export const categories = [
  "For You",
  "Trending",
  "News",
  "Sports",
  "Entertainment",
];

export type NewsItem = {
  id: string;
  title: string;
  time: string;
  topic: string;
  posts: string;
};

export const todaysNews: NewsItem[] = [
  {
    id: "1",
    title: "Thune Ends Push for Talking Filibuster on SAVE America Act",
    time: "1 day ago",
    topic: "Other",
    posts: "930K posts",
  },
  {
    id: "2",
    title: "Stardew Valley Marks 10 Years with New Marriage Options",
    time: "1 day ago",
    topic: "Entertainment",
    posts: "114K posts",
  },
  {
    id: "3",
    title:
      "Doug Ford Awards $1.04 Billion Contract for New Ontario Science Centre",
    time: "6 hours ago",
    topic: "News",
    posts: "6.2K posts",
  },
];

export type PostItem = {
  id: string;
  displayName: string;
  handle: string;
  time: string;
  text: string;
  comments: string;
  reposts: string;
  likes: string;
  views: string;
};

export const homePosts: PostItem[] = [
  {
    id: "p1",
    displayName: "Apple Hub",
    handle: "@theapplehub",
    time: "1d",
    text: "Hey @grok remove the worst phone",
    comments: "362",
    reposts: "263",
    likes: "8.7K",
    views: "3.6M",
  },
  {
    id: "p2",
    displayName: "Kaho Wong",
    handle: "@kahowong93",
    time: "9h",
    text: "This is really interesting from all points of view!",
    comments: "88",
    reposts: "41",
    likes: "1.9K",
    views: "412K",
  },
];
