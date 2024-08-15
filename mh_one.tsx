const mh_one = [
  {
    id: 1,
    mh_one_slider: [
      {
        id: 1,
        image: AppImages.first_slider,
      },
      {
        id: 2,
        image: AppImages.second_slider,
      },
      {
        id: 3,
        image: AppImages.third_slider,
      },
    ],
    block: 'mh/slider',
  },
  {
    id: 2,
    mh_one_titles: [
      {
        id: 1,
        sliderID: 1,
        title: 'Get 2 free video consultation',
      },
      {
        id: 2,
        sliderID: 2,
        title: 'Get daily personalised diet plans',
      },
      {
        id: 3,
        sliderID: 3,
        title: 'Get immediate advice on symptoms',
      },
    ],
    block: 'mh/titles',
  },
  {
    id: 3,
    mh_one_comments: [
      {
        id: 1,
        comment:
          '“Joining the maternity subscription was the best decision I made during my pregnancy”',
        rating: 5,
        pregnancyTime: '26 Weeks Pregnant',
        patient_name: 'Khushi Sharma',
        hospitalBranch: 'Motherhood Sarjapur',
        patient_profile:
          'https://i.pinimg.com/originals/55/b5/9c/55b59c73bd0ee0e42c0022168b9d36be.jpg',
      },
      {
        id: 2,
        comment:
          '“Joining the maternity subscription was the best decision I made during my pregnancy”',
        rating: 5,
        pregnancyTime: '24 Weeks Pregnant',
        patient_name: 'Khushi Verma',
        hospitalBranch: 'Motherhood HSR Layout',
        patient_profile:
          'https://i.pinimg.com/originals/55/b5/9c/55b59c73bd0ee0e42c0022168b9d36be.jpg',
      },
      {
        id: 3,
        comment:
          '“Joining the maternity subscription was the best decision I made during my pregnancy”',
        rating: 5,
        pregnancyTime: '30 Weeks Pregnant',
        patient_name: 'Misti Sharma',
        hospitalBranch: 'Motherhood Sarjapur',
        patient_profile:
          'https://i.pinimg.com/originals/55/b5/9c/55b59c73bd0ee0e42c0022168b9d36be.jpg',
      },
    ],
    block: 'mh/comments',
  },
  {
    id: 4,
    mh_one_includes: [
      {
        id: 1,
        title: 'Get free video consultations from our experienced doctors',
        image:
          'https://us.123rf.com/450wm/lakshmiprasad/lakshmiprasad2306/lakshmiprasad230600217/206887421-shoulder-shot-of-indian-pregnant-woman-consulting-doctor-on-video-call-at-home-concept-telemedicine.jpg?ver=6',
      },
      {
        id: 2,
        title: 'Get daily diet plan from our expert nutritionists',
        image:
          'https://us.123rf.com/450wm/lakshmiprasad/lakshmiprasad2306/lakshmiprasad230600217/206887421-shoulder-shot-of-indian-pregnant-woman-consulting-doctor-on-video-call-at-home-concept-telemedicine.jpg?ver=6',
      },
      {
        id: 3,
        title: 'Get daily advice on symptoms from our expert psychologists',
        image:
          'https://us.123rf.com/450wm/lakshmiprasad/lakshmiprasad2306/lakshmiprasad230600217/206887421-shoulder-shot-of-indian-pregnant-woman-consulting-doctor-on-video-call-at-home-concept-telemedicine.jpg?ver=6',
      },
      {
        id: 4,
        title: 'Get weekly task list from experts for all round development',
        image:
          'https://us.123rf.com/450wm/lakshmiprasad/lakshmiprasad2306/lakshmiprasad230600217/206887421-shoulder-shot-of-indian-pregnant-woman-consulting-doctor-on-video-call-at-home-concept-telemedicine.jpg?ver=6',
      },
    ],
    block: 'mh/includes',
  },
  {
    id: 5,
    mh_one_experts: [
      {
        id: 1,
        title: 'Hear from our nutritionist',
        video_link: 'https://www.youtube.com/watch?v=F_7ZoAQ3aJM',
        image:
          'https://www.freepnglogos.com/uploads/doctor-png/png-woman-doctor-transparent-woman-doctor-images-40.png',
      },
      {
        id: 2,
        title: 'Hear from our gynaecologist',
        video_link: 'https://www.youtube.com/watch?v=F_7ZoAQ3aJM',
        image:
          'https://www.freepnglogos.com/uploads/doctor-png/png-woman-doctor-transparent-woman-doctor-images-40.png',
      },
    ],
    block: 'mh/experts',
  },
  {
    id: 6,
    mh_one_faqs: [
      {
        id: 1,
        question: 'What will I get in the womb care personalised program?',
        answers: [
          'To make your pregnancy easy, you will get amazing 3 coaches - Nutritionist, Psychologist, and Yoga expert.',
          'You will get access to daily live yoga classes.',
          'The experts will check on how you are doing frequently and will guide you.',
        ],
      },
      {
        id: 2,
        question: 'What will I get in the womb care personalised program?',
        answers: [
          'To make your pregnancy easy, you will get amazing 3 coaches - Nutritionist, Psychologist, and Yoga expert.',
          'You will get access to daily live yoga classes.',
          'The experts will check on how you are doing frequently and will guide you.',
        ],
      },
      {
        id: 3,
        question: 'What will I get in the womb care personalised program?',
        answers: [
          'To make your pregnancy easy, you will get amazing 3 coaches - Nutritionist, Psychologist, and Yoga expert.',
          'You will get access to daily live yoga classes.',
          'The experts will check on how you are doing frequently and will guide you.',
        ],
      },
    ],
    block: 'mh/faqs',
  },
];

interface SliderImage {
  id: number;
  image: string;
}

interface Title {
  id: number;
  sliderID: number;
  title: string;
}

interface Comment {
  id: number;
  comment: string;
  rating: number;
  pregnancyTime: string;
  patient_name: string;
  hospitalBranch: string;
  patient_profile: string;
}

interface Include {
  id: number;
  title: string;
  image: string;
}

interface Expert {
  id: number;
  title: string;
  video_link: string;
  image: string;
}

interface FAQ {
  id: number;
  question: string;
  answers: string[];
}

interface MHOneItem {
  id: number;
  block: string;
  mh_one_slider?: SliderImage[];
  mh_one_titles?: Title[];
  mh_one_comments?: Comment[];
  mh_one_includes?: Include[];
  mh_one_experts?: Expert[];
  mh_one_faqs?: FAQ[];
}

type MHOne = MHOneItem[];
