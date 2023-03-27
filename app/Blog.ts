export interface BlogResponse {
  status: string;
  feed: Feed;
  items: Item[];
}

export interface Feed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

export interface Item {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  categories: string[];
  enclosures: any[];
  content: string;
}
