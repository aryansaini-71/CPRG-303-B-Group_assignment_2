// File: data/mockData.ts

// 1. Categories for the Search/Explore screen
export const categories = [
  "For You",
  "Trending",
  "News",
  "Sports",
  "Entertainment",
];

// 2. Types for TypeScript (helps prevent errors)
export type NewsItem = {
  id: string;
  title: string;
  time: string;
  topic: string;
  posts: string;
};

export type PostItem = {
  id: string;
  displayName: string;
  handle: string;
  time: string;
  text: string;
  image?: any; // The '?' means the image is optional
  comments: string;
  reposts: string;
  likes: string;
  views: string;
};

// 3. Data for your Notifications/Search screens
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
    title: "Doug Ford Awards $1.04 Billion Contract for New Ontario Science Centre",
    time: "6 hours ago",
    topic: "News",
    posts: "6.2K posts",
  },
];

// 4. Data for your Home Feed (index.tsx)
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
    displayName: "Art Explorer",
    handle: "@artexplorer",
    time: "2h",
    text: "A beautiful perspective of a gathering around a fire in a snowy forest.",
    // Ensure you named the file post1.jpg in assets/images
    image: require("../assets/images/post1.jpg"), 
    comments: "145",
    reposts: "520",
    likes: "2.3K",
    views: "500K",
  },
  {
    id: "p3",
    displayName: "Kaho Wong",
    handle: "@kahowong93",
    time: "9h",
    text: "This is really interesting from all points of view!",
    comments: "88",
    reposts: "41",
    likes: "1.9K",
    views: "412K",
  },
  {
    id: "p4",
    displayName: "Travel Diary",
    handle: "@traveldiary",
    time: "30m",
    text: "Enjoying the cherry blossoms on this beautiful street! #sakura",
    // Ensure you named the file post2.jpg in assets/images
    image: require("../assets/images/post2.jpg"),
    comments: "210",
    reposts: "98",
    likes: "4.1K",
    views: "1.2M",
  },
];