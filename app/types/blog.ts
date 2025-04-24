export interface BlogPost {
  title: string;
  date: string;
  location: string;
  content: string[];
  image: string;
  mixcloudUrl?: string;
  tracklist?: string[];
  isUpcoming?: boolean;
  slug: string;
}