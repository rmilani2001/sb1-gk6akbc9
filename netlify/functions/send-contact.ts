import { Handler } from '@netlify/functions';
import * as postmark from 'postmark';

interface ContactFormData {
  name: string;
  email: string;
  eventType: string;
  date?: string;
  time?: string;
  location: string;
  message?: string;
}

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    // Validate that we have a body
    if (!event.body) {
      throw new Error('Missing request body');
    }

    let formData: ContactFormData;
    
    try {
      formData = JSON.parse(event.body) as ContactFormData;
    } catch (e) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'Invalid JSON in request body' })
      };
    }

    // Validate required fields
    const { name, email, eventType, location } = formData;

    if (!name?.trim() || !email?.trim() || !eventType?.trim() || !location?.trim()) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'Name, email, vibe, and location are required' }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: 'Invalid email format' }),
      };
    }

    const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY || '');

    const emailContent = `
      <html>
        <body style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #9333ea;">New Booking Request</h1>
          
          <div style="margin: 20px 0; padding: 15px; background: #f9fafb; border-radius: 8px;">
            <h2 style="color: #6b21a8; margin-bottom: 10px;">Contact Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <div style="margin: 20px 0; padding: 15px; background: #f9fafb; border-radius: 8px;">
            <h2 style="color: #6b21a8; margin-bottom: 10px;">Event Details</h2>
            <p><strong>Event Type:</strong> ${eventType}</p>
            ${formData.date ? `<p><strong>Date:</strong> ${formData.date}</p>` : ''}
            ${formData.time ? `<p><strong>Time:</strong> ${formData.time}</p>` : ''}
            <p><strong>Location:</strong> ${location}</p>
          </div>

          ${formData.message ? `
            <div style="margin: 20px 0; padding: 15px; background: #f9fafb; border-radius: 8px;">
              <h2 style="color: #6b21a8; margin-bottom: 10px;">Message</h2>
              <p style="white-space: pre-wrap;">${formData.message}</p>
            </div>
          ` : ''}
        </body>
      </html>
    `;

    await client.sendEmail({
      From: process.env.FROM_EMAIL || '',
      To: process.env.TO_EMAIL || '',
      ReplyTo: email,
      Subject: `New Booking Request - ${eventType}`,
      HtmlBody: emailContent,
      MessageStream: 'outbound'
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Message sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        message: 'Error sending message',
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
    };
  }
};

export { handler };