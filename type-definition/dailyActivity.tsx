const mh_coaches = [
  {
    id: 1,
    type: 'water',
    title: 'Drink 8 glasses of water today',
    completed: true,
    gifImage: AppImages.water_coach_image,
    color: '#B7CCF0',
  },
  {
    id: 2,
    type: 'nutrition',
    title: 'Follow the diet plan for today',
    completed: false,
    gifImage: AppImages.water_coach_image,
    color: '#9CC688',
  },
  {
    id: 3,
    type: 'soul',
    title: 'Listen to calming music to promote relaxation',
    completed: false,
    gifImage: AppImages.water_coach_image,
    color: '#F4DD95',
  },
  {
    id: 4,
    type: 'mind',
    title: 'Begin your mind activities for today',
    completed: false,
    gifImage: AppImages.water_coach_image,
    color: '#F6BDDE',
  },
  {
    id: 5,
    type: 'fitness',
    title: 'Complete your fitness regime for the day',
    completed: false,
    gifImage: AppImages.water_coach_image,
    color: '#F4B5AC',
  },
];

interface MHCoach {
  id: number;
  type: 'water' | 'nutrition' | 'soul' | 'mind' | 'fitness';
  title: string;
  completed: boolean;
  gifImage: string;
  color: string;
}

type MHCoaches = MHCoach[];
