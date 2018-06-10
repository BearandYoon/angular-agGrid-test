export interface AgGridDTO {
  videoId: string;
  thumbnail: string;
  publishedAt: string;
  title: string;
  description: string;
}

export interface AgGridDTO1 {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: Snippet;
}

export interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  title: string;
}

export interface Thumbnails {
  default: Thumbnail;
  high: Thumbnail;
  medium: Thumbnail;
}

export interface Thumbnail {
  height: number;
  url: string;
  width: number;
}
