const fitness_activity = [
  {
    id: 1,
    screen_type: 'mh/confirm',
    title: 'Confirm your pregnancy week',
    description: 'Before we dive in, please confirm the week of your pregnancy',
    weeks: 21,
  },
  {
    id: 2,
    screen_type: 'mh/docDetail',
    title: 'These exercises are designed by our expert doctor',
    doc_name: 'Dr.Swati Reddy',
    doc_image: AppImages.doc_profile,
    doc_experience: '10+ years',
    doc_department: 'Nutritionist',
  },
  {
    id: 3,
    screen_type: 'mh/consent',
    title: 'Consent for pregnancy exercises',
    description:
      'We advice you to get a consent from your doctor for performing exercises if you haven’t already!',
  },
  {
    id: 4,
    screen_type: 'mh/disclaimer',
    title: 'Disclaimer',
    description: 'We advice you to perform these exercises under supervision! ',
  },
  {
    id: 5,
    screen_type: 'mh/note',
    title: 'Note!',
    description:
      'Before you start the exercise, have a look at the conditions for which the exercises may not be recommended',
    not_suitable: ['Hip Injury', 'Leg Injury', 'Back Pain', 'Spine Injury'],
  },
  {
    id: 6,
    screen_type: 'mh/weekly-exercise',
    title: 'You have unlocked a new exercise for this week!',
    description:
      'Congratulations on entering your new week with a brand new exercise added to your pregnancy exercise regime',
    exercise_number: 21,
    exercise_name: 'Butterfly Pose (Baddha Konasana)',
    exercise_image:
      'https://s3-alpha-sig.figma.com/img/6c9d/7314/5cd745144234e0cc3bb2df85814852d6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TA5mrwy5emlUHCIvek2p8cubF5IFPSgmH28bINYfXu2O8TiF3W1pnnAneXVtul8cqNwdXKDOgDMwBMZP6S8K3gmnYdNnweYD~fT2sy8mfv-stAM~6cMtCKnWCUNufeEHxrWcK5wittYANa2-B9QF-H46PSIMwCG7VIPh0~o15t0FuLY8aFKz85RMxAfRQ~CqTwgONEciBTgyPdqzAxJueC4R4nWZcNrqvtEnS~WBp4JvA0lBCMvoLLI5hSPR~n8KRsYPpOtXg-ulGQ4roknNYQuns9xFqgt51~EDz9R3MBjtHzCYKPr7DdSUnnV~hCPKRS3YxiI72ahrFmkJdKiiUQ__',
    exercise_detail: {
      title: 'Shoulder Rotation',
      duration: 3,
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
      video_link:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  },
];
