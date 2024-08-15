const mh_book_reminder = [
  {
    id: 1,
    title: 'Are you done with your EP Scan?',
    doc_profile: AppImages.doc_profile,
    doc_name: 'Dr.Nazameen Homaifar',
    doc_exp: '10+ years',
    doc_dept: 'Psychologist',
    color: '#B7CCF0',
    type: 'scan',
  },
  {
    id: 2,
    title: 'Book a Nutrition Counselling session',
    insights: 'Insights 2',
    doc_profile: AppImages.doc_profile,
    doc_name: 'Dr.Nazameen Homaifar',
    doc_exp: '10+ years',
    doc_dept: 'Psychologist',
    color: '#F4DD95',
    type: 'session',
  },
];

interface MHBookReminder {
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

type MHBookReminders = MHBookReminder[];
