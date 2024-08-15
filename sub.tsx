const sub = [
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
        mh_book_reminder: [
          /* ... */
        ],
        mh_notes: [
          /* ... */
        ],
      },
    ],
    'mh/coaches': [
      {
        id: 3,
        block_type: 'mh/coaches',
        mh_coaches: [
          /* ... */
        ],
      },
    ],
    'mh/diet-plan': [
      {
        id: 4,
        block_type: 'mh/diet-plan',
        mh_diet_plan: [
          /* ... */
        ],
      },
    ],
    'mh/symptoms': [
      {
        id: 5,
        block_type: 'mh/symptoms',
        mh_log_symptoms: [
          /* ... */
        ],
      },
    ],
    'mh/medication': [
      {
        id: 6,
        block_type: 'mh/medication',
        mh_medications: [
          /* ... */
        ],
      },
    ],
    'mh/trimesters': [
      {
        id: 7,
        block_type: 'mh/trimesters',
        mh_trimester_list: [
          /* ... */
        ],
        current_trimester: 1,
      },
    ],
    'mh/news': [
      {
        id: 8,
        block_type: 'mh/news',
        mh_news: [
          /* ... */
        ],
      },
    ],
    'mh/webinars': [
      {
        id: 9,
        block_type: 'mh/webinars',
        mh_webinar: [],
      },
    ],
  },
];

interface WeekTrack {
  id: number;
  block_type: 'mh/week-track';
  currentWeek: number;
  seed_name: string;
  seed_image: string;
  baby_growth_image: string;
}

interface NoteReminder {
  id: number;
  title: string;
  doc_profile: string;
  doc_name: string;
  doc_exp: string;
  doc_dept: string;
  color: string;
  type: 'scan' | 'session';
  insights?: string;
}

interface NoteInsight {
  id: number;
  type: 'doc-profile' | 'child-details' | 'title' | 'listed-data';
  docName?: string;
  docImage?: string;
  docDepartment?: string;
  headerTitle?: string;
  length?: string;
  length_type?: string;
  weight?: string;
  size?: string;
  size_image?: string;
  image?: string;
  title?: string;
  listed_data?: string[];
}

interface Note {
  id: number;
  reviewed: boolean;
  doc_name: string;
  title: string;
  first_color: string;
  second_color: string;
  image: string;
  doc_profile: string;
  insights: NoteInsight[];
}

interface NotesBlock {
  id: number;
  block_type: 'mh/notes';
  mh_book_reminder: NoteReminder[];
  mh_notes: Note[];
}

interface Coach {
  id: number;
  type: 'water' | 'nutrition' | 'soul' | 'mind' | 'fitness';
  title: string;
  completed: boolean;
  gifImage: string;
  color: string;
}

interface CoachesBlock {
  id: number;
  block_type: 'mh/coaches';
  mh_coaches: Coach[];
}

interface DietPlan {
  id: number;
  diet_name: string;
  intake_time: 'Early Morning' | 'BreakFast' | 'Mid Morning';
  color: string;
  option: number;
  image: string;
  contains: string[];
  not_suitable: string[];
  recipe_link: string;
}

interface DietPlanBlock {
  id: number;
  block_type: 'mh/diet-plan';
  mh_diet_plan: DietPlan[];
}

interface Symptom {
  id: number;
  mood_type: string;
  title: string;
  image: string;
  clicked: boolean;
  docname: string;
  experience: string;
  department: string;
  color: string;
}

interface SymptomsBlock {
  id: number;
  block_type: 'mh/symptoms';
  mh_log_symptoms: Symptom[];
}

interface MedicationPill {
  id: number;
  medicine_name: string;
  pills: number;
  taken: boolean;
  intake_type: 'Before Food' | 'After Food';
  intake_time: 'Breakfast' | 'Dinner';
  medicine_type: 'tablet';
  medicine_strength: string;
  medicine_unit: 'g';
}

interface MedicationTab {
  id: number;
  tab_type: 'Before Breakfast' | 'After Dinner';
  tab_image: string;
  pills: MedicationPill[];
}

interface MedicationBlock {
  id: number;
  block_type: 'mh/medication';
  mh_medications: MedicationTab[];
}

interface TrimesterDetail {
  id: number;
  current_trimester: 1 | 2 | 3;
  image: string;
  trimester_detail: any[];
}

interface TrimestersBlock {
  id: number;
  block_type: 'mh/trimesters';
  mh_trimester_list: TrimesterDetail[];
  current_trimester: 1 | 2 | 3;
}

interface News {
  id: number;
  title: string;
  description: string;
  read_time: number;
  published_date: string;
  image: string;
  news_link: string;
}

interface NewsBlock {
  id: number;
  block_type: 'mh/news';
  mh_news: News[];
}

interface WebinarsBlock {
  id: number;
  block_type: 'mh/webinars';
  mh_webinar: any[];
}

type SubBlock =
  | WeekTrack
  | NotesBlock
  | CoachesBlock
  | DietPlanBlock
  | SymptomsBlock
  | MedicationBlock
  | TrimestersBlock
  | NewsBlock
  | WebinarsBlock;

interface Sub {
  [key: string]: SubBlock[];
}
