const diet_qna = [
  {
    id: 1,
    screen_type: 'mh/wheel', // "mh/scroll"
    question: "What's your age?", // "title"
    unit: '',
    options: [1, 100],
  },
  {
    id: 2,
    screen_type: 'mh/wheel', // "mh/scroll"
    question: "What's your height?", // "title"
    unit: 'cm',
    options: [60, 220],
  },
  {
    id: 3,
    screen_type: 'mh/wheel', // "mh/scroll"
    question: "What's your weight?", // "title"
    unit: 'kg',
    options: [20, 150],
  },
  {
    id: 4,
    screen_type: 'mh/calculate',
    question: 'Your bmi is', // "title"
  },
  {
    id: 5,
    screen_type: 'mh/multiplechoice',
    question: '',
    option: [
      {
        id: 1,
        title: 'Diabetes',
        exceptionTitle: 'You selected Diabetes as a medical condition',
        exceptionQuestion: 'You selected that you are on insulin',
        exepectionQuestionOption: [
          {
            id: 1,
            option: 'Yes',
          },
          {
            id: 2,
            option: 'No',
          },
        ],
      },
      {
        id: 2,
        title: 'Underweight',
        exceptionTitle: 'You selected Underweight as a medical condition',
      },
      {
        id: 3,
        title: 'Over Weight',
        exceptionTitle: 'You selected as a medical condition',
      },
      {
        id: 3,
        title: 'Hypothroid',
      },
    ],
    multiple_select: false,
  },
  {
    id: 6,
    screen_type: 'mh/multiplechoice',
    question: '',
    option: [],
    multiple_select: true,
  },
  {
    id: 7,
    screen_type: 'mh/preview',
    previews: [
      {
        id: 1,
        preview_title:
          'Watch out for these tags based on your preferences when you’re viewing a recipe',
        preview_image: AppImages.first_diet_preview,
      },
      {
        id: 2,
        preview_title:
          'We have a special diet for your pregnancy complications',
        preview_image: AppImages.second_diet_preview,
      },
    ],
  },
];

interface Option {
  id: number;
  title: string;
  exceptionTitle?: string;
  exceptionQuestion?: string;
  exepectionQuestionOption?: Option[];
}

interface Preview {
  id: number;
  preview_title: string;
  preview_image: string;
}

interface DietQNAItem {
  id: number;
  screen_type: string;
  question?: string;
  unit?: string;
  options?: [number, number];
  option?: Option[];
  multiple_select?: boolean;
  previews?: Preview[];
}

type DietQNA = DietQNAItem[];
