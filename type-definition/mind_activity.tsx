const mind_activities = [
  {
    id: 1,
    title: 'Body Scanning',
    video_link:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: 10,
    video_info: [
      {
        id: 1,
        title: 'Why?',
        listed_info: [
          'Beneficial for opening the hips and stretching the inner thighs.',
        ],
      },
      {
        id: 2,
        title: 'Benefits',
        listed_info: [
          'Improves Flexibility: Helps in increasing flexibility in the groin and hip region.',
        ],
      },
      {
        id: 3,
        title: 'Precautions',
        listed_info: [
          'If you have any knee injuries or concerns, you should be cautious and possibly use additional padding or avoid the pose if painful.',
        ],
      },
    ],
    completed: false,
    image: AppImages.mind_gif,
  },
  {
    id: 2,
    title: 'Labour Visualisation',
    video_link:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: 10,
    video_info: [
      {
        id: 1,
        title: 'Why?',
        listed_info: [
          'Beneficial for opening the hips and stretching the inner thighs.',
        ],
      },
      {
        id: 2,
        title: 'Benefits',
        listed_info: [
          'Improves Flexibility: Helps in increasing flexibility in the groin and hip region.',
        ],
      },
      {
        id: 3,
        title: 'Precautions',
        listed_info: [
          'If you have any knee injuries or concerns, you should be cautious and possibly use additional padding or avoid the pose if painful.',
        ],
      },
    ],
    completed: false,
    image: AppImages.mind_gif,
  },
  {
    id: 3,
    title: 'Progressive Relaxation',
    video_link:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: 10,
    video_info: [
      {
        id: 1,
        title: 'Why?',
        listed_info: [
          'Beneficial for opening the hips and stretching the inner thighs.',
        ],
      },
      {
        id: 2,
        title: 'Benefits',
        listed_info: [
          'Improves Flexibility: Helps in increasing flexibility in the groin and hip region.',
        ],
      },
      {
        id: 3,
        title: 'Precautions',
        listed_info: [
          'If you have any knee injuries or concerns, you should be cautious and possibly use additional padding or avoid the pose if painful.',
        ],
      },
    ],
    completed: false,
    image: AppImages.mind_gif,
  },
  {
    id: 4,
    title: 'Womb Conversation',
    video_link:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: 10,
    video_info: [
      {
        id: 1,
        title: 'Why?',
        listed_info: [
          'Beneficial for opening the hips and stretching the inner thighs.',
        ],
      },
      {
        id: 2,
        title: 'Benefits',
        listed_info: [
          'Improves Flexibility: Helps in increasing flexibility in the groin and hip region.',
        ],
      },
      {
        id: 3,
        title: 'Precautions',
        listed_info: [
          'If you have any knee injuries or concerns, you should be cautious and possibly use additional padding or avoid the pose if painful.',
        ],
      },
    ],
    completed: false,
    image: AppImages.mind_gif,
  },
];

interface VideoInfo {
  id: number;
  title: string;
  listed_info: string[];
}

interface MindActivity {
  id: number;
  title: string;
  video_link: string;
  duration: number;
  video_info: VideoInfo[];
  completed: boolean;
  image: string;
}

type MindActivities = MindActivity[];
