
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

export type PostItem = {
  id: string;
  displayName: string;
  handle: string;
  time: string;
  text: string;
  image?: any;
  comments: string;
  reposts: string;
  likes: string;
  views: string;
};

export type NotificationItem = {
  id: string;
  user: string;
  time: string;
  content: string;
  type: 'system' | 'post';
};

export type MessageItem = {
  id: string;
  user: string;
  handle: string;
  time: string;
  lastMessage: string;
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
    title: "Doug Ford Awards $1.04 Billion Contract for New Ontario Science Centre",
    time: "6 hours ago",
    topic: "News",
    posts: "6.2K posts",
  },
];


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
    text: "Enjoying the cherry blossoms! #sakura",
    image: require("../assets/images/post2.jpg"),
    comments: "210",
    reposts: "98",
    likes: "4.1K",
    views: "1.2M",
  },
];


export const notifications: NotificationItem[] = [
  {
    id: "n1",
    user: "Google Gemini",
    time: "30m",
    content: "Nano Banana 2 is here. Our latest image model gives you the power of Pro at the speed of Flash.",
    type: 'system',
  },
  {
    id: "n2",
    user: "Apple Hub",
    time: "2h",
    content: "Apple confirms new products are coming starting on Monday! 🔥 #AppleLaunch",
    type: 'post',
  },
  {
    id: "n3",
    user: "MrBeast",
    time: "9h",
    content: "If you won Beast Games would you rather have $1M or a mystery gift?",
    type: 'post',
  },
];


export const chatList: MessageItem[] = [
  {
    id: "m1",
    user: "Apple Hub",
    handle: "@theapplehub",
    time: "2h",
    lastMessage: "The new iPhone colors are looking great!",
  },
  {
    id: "m2",
    user: "Samsung Canada",
    handle: "@SamsungCanada",
    time: "5h",
    lastMessage: "Did you see our latest Galaxy S26 Ultra promo?",
  },
  {
    id: "m3",
    user: "MrBeast",
    handle: "@MrBeast",
    time: "1d",
    lastMessage: "Check out the new video I just dropped!",
  },
];