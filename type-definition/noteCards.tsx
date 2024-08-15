const mh_notes = [
  {
    id: 1,
    reviewed: true,
    doc_name: 'Dr. Nazaneen Homaifar',
    title: 'Your baby at 4 weeks',
    first_color: '#CBC8F4',
    second_color: '#BDB9F7',
    image: AppImages.first_note,
    doc_profile: AppImages.doc_profile,
    insights: [
      {
        id: 1,
        type: 'doc-profile',
        docName: 'Dr. Nazaneen Homaifar',
        docImage: AppImages.doc_profile,
        docDepartment: 'Obstetrician and Gynaecologist',
      },
      {
        id: 2,
        headerTitle: 'How big is a baby at 4 weeks?',
        length: '2 mm or 0.08 in',
        length_type: '(Crown to Rump)',
        weight: 'Too Small',
        size: 'A flax seed',
        size_image: AppImages.seed_image,
        type: 'child-details',
      },
      {
        id: 3,
        type: 'title',
        image: AppImages.insight_image,
        title: 'This week your baby is starting to form lungs',
      },
      {
        id: 4,
        type: 'listed-data',
        headerTitle: 'What are prenatal vitamins',
        listed_data: [
          'You might be aware of classic pregnancy symptoms like nausea and a missed period, but how can you tell if you’re pregnant after what’s considered your 3rd week of pregnancy?',
          'The truth is that you can’t, because technically speaking, at 3 weeks pregnant, your baby doesn’t exist yet.',
        ],
      },
      {
        id: 5,
        type: 'title',
        image: AppImages.insight_image,
        title: 'This week your baby is benefitting from a placenta',
      },
      {
        id: 6,
        type: 'listed-data',
        headerTitle: 'Prenatal vitamins ingredients list',
        listed_data: [
          'Gestational age and fetal age are actually different things.',
          'Your gestational age is calculated from the first day of your last period.',
          'So when experts talk about being 3 weeks pregnant, they are referring to your gestational age.',
        ],
      },
    ],
  },
  {
    id: 2,
    reviewed: true,
    doc_name: 'Dr. Nazaneen Homaifar',
    first_color: '#F4DD95',
    second_color: '#EED485',
    image: AppImages.second_note,
    doc_profile: AppImages.doc_profile,
    title: 'Your baby at 4 weeks',
    insights: [
      {
        id: 1,
        type: 'doc-profile',
        docName: 'Dr. Nazaneen Homaifar',
        docImage: AppImages.doc_profile,
        docDepartment: 'Obstetrician and Gynaecologist',
      },
      {
        id: 2,
        type: 'title',
        image: AppImages.insight_image,
        title: 'This week your baby is starting to form lungs',
      },
      {
        id: 3,
        type: 'listed-data',
        headerTitle: 'What are prenatal vitamins',
        listed_data: [
          'You might be aware of classic pregnancy symptoms like nausea and a missed period, but how can you tell if you’re pregnant after what’s considered your 3rd week of pregnancy?',
          'The truth is that you can’t, because technically speaking, at 3 weeks pregnant, your baby doesn’t exist yet.',
        ],
      },
      {
        id: 4,
        type: 'title',
        image: AppImages.insight_image,
        title: 'This week your baby is benefitting from a placenta',
      },
      {
        id: 5,
        type: 'listed-data',
        headerTitle: 'Prenatal vitamins ingredients list',
        listed_data: [
          'Gestational age and fetal age are actually different things.',
          'Your gestational age is calculated from the first day of your last period.',
          'So when experts talk about being 3 weeks pregnant, they are referring to your gestational age.',
        ],
      },
    ],
  },
  {
    id: 3,
    reviewed: true,
    doc_name: 'Dr. Nazaneen Homaifar',
    first_color: '#F6BDDE',
    second_color: '#F8ABD8',
    image: AppImages.first_note,
    doc_profile: AppImages.doc_profile,
    title: 'Your checklist at 4 weeks',
    insights: [
      {
        id: 1,
        type: 'doc-profile',
        docName: 'Dr. Nazaneen Homaifar',
        docImage: AppImages.doc_profile,
        docDepartment: 'Obstetrician and Gynaecologist',
      },
      {
        id: 2,
        type: 'title',
        image: AppImages.insight_image,
        title: 'This week your baby is starting to form lungs',
      },
      {
        id: 3,
        type: 'listed-data',
        headerTitle: 'What are prenatal vitamins',
        listed_data: [
          'You might be aware of classic pregnancy symptoms like nausea and a missed period, but how can you tell if you’re pregnant after what’s considered your 3rd week of pregnancy?',
          'The truth is that you can’t, because technically speaking, at 3 weeks pregnant, your baby doesn’t exist yet.',
        ],
      },
      {
        id: 4,
        type: 'title',
        image: AppImages.insight_image,
        title: 'This week your baby is benefitting from a placenta',
      },
      {
        id: 5,
        type: 'listed-data',
        headerTitle: 'Prenatal vitamins ingredients list',
        listed_data: [
          'Gestational age and fetal age are actually different things.',
          'Your gestational age is calculated from the first day of your last period.',
          'So when experts talk about being 3 weeks pregnant, they are referring to your gestational age.',
        ],
      },
    ],
  },
];

interface Insight {
  id: number;
  type: 'doc-profile' | 'child-details' | 'title' | 'listed-data';
  docName?: string;
  docImage?: string;
  docDepartment?: string;
  length?: string;
  length_type?: string;
  weight?: string;
  size?: string;
  size_image?: string;
  image?: string;
  title?: string;
  headerTitle?: string;
  listed_data?: string[];
}

interface MHNote {
  id: number;
  reviewed: boolean;
  doc_name: string;
  title: string;
  first_color: string;
  second_color: string;
  image: string;
  doc_profile: string;
  insights: Insight[];
}

type MHNotes = MHNote[];
