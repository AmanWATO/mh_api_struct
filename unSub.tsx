const unSub = [
  {
    'mh/week-track': [
      {
        id: 1,
        block_type: 'mh/week-track',
        currentWeek: 4,
        seed_name: '',
        seed_image: '',
        baby_growth_image: '',
      },
    ],
    'mh/notes': [
      {
        id: 2,
        block_type: 'mh/notes',
        mh_personalised_gifs: ['', ''],
      },
    ],
    'mh/coaches': [
      {
        id: 3,
        block_type: 'mh/coaches',
        mh_unsub_coaches: [
          {
            id: 1,
            title: 'Daily Activities to Keep You Hydrated',
            listed_data: [
              'Track your daily water intake easily',
              'Get hydration goals curated by our experts',
              'Receive reminders to stay hydrated',
            ],
            image: 'AppImages.coach_card_img',
          },
          {
            id: 2,
            title: 'Daily Activities for Optimal Nutrition',
            listed_data: [
              'Track your daily nutrition goals',
              'Set reminders tailored to your schedule',
              'Celebrate your progress to stay motivated',
            ],
            image: 'AppImages.coach_card_img',
          },
        ],
      },
    ],
    'mh/diet-plan': [
      {
        id: 4,
        block_type: 'mh/diet-plan',
        mh_unsub_diet: [
          {
            id: 1,
            image: 'AppImages.first_slider',
            title: 'Prepared out by expert Nutritionists',
            listed_data: [
              'Curated by our experts',
              'A plan safe for you and your baby',
              'A diet providing the right nutrients',
            ],
          },
          {
            id: 2,
            image: 'AppImages.second_slider',
            title: 'Prepared out by expert Nutritionists',
            listed_data: [
              'Curated by our experts',
              'Select what to avoid based on your tastes and needs',
              'A diet providing the right nutrients',
            ],
          },
          {
            id: 3,
            image: 'AppImages.third_slider',
            title: 'Prepared out by expert Nutritionists',
            listed_data: [
              'Curated by our experts',
              'A plan safe for you and your baby',
              'A diet providing the right nutrient',
            ],
          },
        ],
        mh_diet_chart: [],
      },
    ],
    'mh/symptoms': [
      {
        id: 5,
        block_type: 'mh/symptoms',
        title: '',
        image_list: [],
      },
    ],
    'mh/trimester': [
      {
        id: 6,
        block_type: 'mh/trimester',
        image_list: [],
      },
    ],
    'mh/news': [
      {
        id: 7,
        block_type: 'mh/news',
        mh_news: [
          {
            id: 1,
            title: 'Get the look: Alanna Panday’s best maternity outfits',
            description:
              'Pregnancy is a beautiful journey, and embracing it with style can make you feel even more special. Alanna Panday, a model and social media influencer, has been turning heads with her maternity outfits that blend comfort with high fashion.',
            read_time: 5,
            published_date: '14/07/2024',
            image: 'AppImages.news_image',
            news_link: '',
          },
          {
            id: 2,
            title:
              'Deepika Padukone Radiates Happiness with Baby Bump in Yoga Photo',
            description:
              'Pregnancy is a beautiful journey, and embracing it with style can make you feel even more special. Alanna Panday, a model and social media influencer, has been turning heads with her maternity outfits that blend comfort with high fashion.',
            read_time: 5,
            published_date: '04/07/2024',
            image: 'AppImages.news_image',
            news_link: '',
          },
        ],
      },
    ],
    'mh/webinars': [
      {
        id: 8,
        block_type: 'mh/webinars',
        mh_webinar: [],
      },
    ],
  },
];

interface UnSubCoach {
  id: number;
  title: string;
  listed_data: string[];
  image: string; // Assuming AppImages.<imageName> is a string URL
}

interface UnSubDiet {
  id: number;
  image: string; // Assuming AppImages.<imageName> is a string URL
  title: string;
  listed_data: string[];
}

interface UnSubNews {
  id: number;
  title: string;
  description: string;
  read_time: number; // Time in minutes
  published_date: string; // Format: DD/MM/YYYY
  image: string; // Assuming AppImages.<imageName> is a string URL
  news_link: string;
}

interface UnSubSymptom {
  id: number;
  title: string;
  image_list: string[];
}

interface UnSubTrimester {
  id: number;
  image_list: string[];
}

interface UnSubWebinar {
  id: number;
  mh_webinar: any[]; // Assuming this can be any type of data
}

interface UnSubWeekTrack {
  id: number;
  block_type: 'mh/week-track';
  currentWeek: number;
  seed_name: string;
  seed_image: string;
  baby_growth_image: string;
}

interface UnSubNote {
  id: number;
  block_type: 'mh/notes';
  mh_personalised_gifs: string[];
}

interface UnSubDietPlan {
  id: number;
  block_type: 'mh/diet-plan';
  mh_unsub_diet: UnSubDiet[];
  mh_diet_chart: any[]; // Assuming this can be any type of data
}

interface UnSubCoachBlock {
  id: number;
  block_type: 'mh/coaches';
  mh_unsub_coaches: UnSubCoach[];
}

interface UnSubNewsBlock {
  id: number;
  block_type: 'mh/news';
  mh_news: UnSubNews[];
}

type UnSubBlock =
  | UnSubWeekTrack
  | UnSubNote
  | UnSubCoachBlock
  | UnSubDietPlan
  | UnSubSymptom
  | UnSubTrimester
  | UnSubNewsBlock
  | UnSubWebinar;

interface Unsub {
  [key: string]: UnSubBlock[];
}
