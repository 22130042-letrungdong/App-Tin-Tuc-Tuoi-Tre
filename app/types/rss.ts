export type RssItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  guid: string;

  enclosure?: {
    type: string;
    length: number;
    url: string;
  };
};


