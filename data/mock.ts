export interface Post {
  id: string;
  name: string;
  handle: string;
  avatarInitials: string;
  avatarColor: string;
  verified: boolean;
  time: string;
  body: string;
  comments: number;
  retweets: number;
  likes: number;
  views: number;
}

export interface Notification {
  id: string;
  type: 'like' | 'retweet' | 'follow' | 'mention';
  actor: string;
  actorHandle: string;
  actorColor: string;
  actorInitial: string;
  time: string;
  preview?: string;
}

export const POSTS: Post[] = [
  {
    id: '1',
    name: 'Elon Musk',
    handle: '@elonmusk',
    avatarInitials: 'EM',
    avatarColor: '#1d9bf0',
    verified: true,
    time: '2h',
    body: 'The thing I find most surprising is how few people actually read the source material before forming strong opinions.',
    comments: 4821,
    retweets: 12400,
    likes: 98200,
    views: 4200000,
  },
  {
    id: '2',
    name: 'Sam Altman',
    handle: '@sama',
    avatarInitials: 'SA',
    avatarColor: '#7856ff',
    verified: true,
    time: '4h',
    body: 'we are getting closer. the models keep surprising us with what they can do. excited for what\'s coming next month.',
    comments: 2100,
    retweets: 5600,
    likes: 47300,
    views: 980000,
  },
  {
    id: '3',
    name: 'Andrej Karpathy',
    handle: '@karpathy',
    avatarInitials: 'AK',
    avatarColor: '#00ba7c',
    verified: true,
    time: '6h',
    body: 'Neural networks are just smooth, differentiable programs. Once you internalize this, a lot of the "magic" disappears and is replaced with engineering intuition.',
    comments: 891,
    retweets: 3200,
    likes: 29100,
    views: 620000,
  },
  {
    id: '4',
    name: 'Julia Evans',
    handle: '@b0rk',
    avatarInitials: 'JE',
    avatarColor: '#ff6b35',
    verified: false,
    time: '8h',
    body: 'hot take: the best debugging skill is learning how to write a minimal reproducible example. It forces you to understand the problem deeply and often you solve it yourself in the process.',
    comments: 443,
    retweets: 1800,
    likes: 14700,
    views: 290000,
  },
  {
    id: '5',
    name: 'Kent C. Dodds',
    handle: '@kentcdodds',
    avatarInitials: 'KC',
    avatarColor: '#e0245e',
    verified: true,
    time: '12h',
    body: "Reminder that useState is often the right tool, even for 'complex' state. Don't reach for useReducer or a state machine until useState genuinely feels painful.",
    comments: 312,
    retweets: 980,
    likes: 8400,
    views: 185000,
  },
];

export const NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    type: 'like',
    actor: 'Sam Altman',
    actorHandle: '@sama',
    actorColor: '#7856ff',
    actorInitial: 'SA',
    time: '1h',
    preview: 'your tweet about neural networks',
  },
  {
    id: 'n2',
    type: 'retweet',
    actor: 'Elon Musk',
    actorHandle: '@elonmusk',
    actorColor: '#1d9bf0',
    actorInitial: 'EM',
    time: '2h',
    preview: 'your thread on React performance',
  },
  {
    id: 'n3',
    type: 'follow',
    actor: 'Andrej Karpathy',
    actorHandle: '@karpathy',
    actorColor: '#00ba7c',
    actorInitial: 'AK',
    time: '3h',
  },
  {
    id: 'n4',
    type: 'mention',
    actor: 'Julia Evans',
    actorHandle: '@b0rk',
    actorColor: '#ff6b35',
    actorInitial: 'JE',
    time: '5h',
    preview: '@you have you written about zines for technical writing?',
  },
  {
    id: 'n5',
    type: 'like',
    actor: 'Kent C. Dodds',
    actorHandle: '@kentcdodds',
    actorColor: '#e0245e',
    actorInitial: 'KC',
    time: '7h',
    preview: 'your post about minimal reproducible examples',
  },
  {
    id: 'n6',
    type: 'mention',
    actor: 'Sam Altman',
    actorHandle: '@sama',
    actorColor: '#7856ff',
    actorInitial: 'SA',
    time: '9h',
    preview: '@you great point on inference costs',
  },
  {
    id: 'n7',
    type: 'retweet',
    actor: 'Andrej Karpathy',
    actorHandle: '@karpathy',
    actorColor: '#00ba7c',
    actorInitial: 'AK',
    time: '12h',
    preview: 'your explainer on attention mechanisms',
  },
];