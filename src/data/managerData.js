import { v4 as uuidv4 } from 'uuid';

export const teamMaterialData = [
    {
      id: uuidv4(),
      name: 'Material 1',
    },
    {
      id: uuidv4(),
      name: 'Material 2',
    },
    {
      id: uuidv4(),
      name: 'Material 3 ',
    },
  ];

export const meetingScheduleData = [
    {
      id: uuidv4(),
      date: 'Thursday, 4 April 2024',
      link: 'https://www.delldesignsystem.com/'
    },
    {
      id: uuidv4(),
      date: 'Friday, 5 April 2024',
      link: 'https://trek-landing-q7rpeqxn7a-as.a.run.app/',
    },
    {
      id: uuidv4(),
      date: 'Monday, 8 April 2024',
      text: 'https://www.apple.com/mac/s',
    },
];

export const onboardingteamData = [
    {
        id: uuidv4(),
        name: 'Nisya',
        Mentor: 'Ash',
        meetinstatus:'completed',
        materialToComplete: '3'
    },
    {
        id: uuidv4(),
        name: 'Leo',
        Mentor: 'Jacky',
        meetinstatus:'completed',
        materialToComplete: '2'
    },
    {
        id: uuidv4(),
        name: 'Hendrick',
        Mentor: 'Andy',
        meetinstatus:'pending',
        materialToComplete: '1'
    },
    {
        id: uuidv4(),
        name: 'Ahmad',
        Mentor: 'Shaun',
        meetinstatus:'pending',
        materialToComplete: '4'
    }
]