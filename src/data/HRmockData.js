import { v4 as uuidv4 } from 'uuid';

export const hrBasicStats = [
  {
    id: uuidv4(),
    number: '15',
    desc: 'New Hires'
  },
  {
    id: uuidv4(),
    number: '3',
    desc: 'Managers',
  },
  {
    id: uuidv4(),
    number: '30',
    desc: 'Learning Materials',
  },
];

export const mockTableList = [
    {
      id: uuidv4(),
      manager: 'Manager 1',
      hrdata: [
        {
            id: uuidv4(),
            name: 'Nisya',
            mentor: 'Ash',
            quiz: 'Completed',
            submitDocs: '3',
            docstoComplete: '3',
        },
        {
            id: uuidv4(),
            name: 'Leo',
            mentor: 'Jacky',
            quiz: 'Completed',
            submitDocs: '2',
            docstoComplete: '2',
        },
        {
            id: uuidv4(),
            name: 'Hendrick',
            mentor: 'Andy',
            quiz: 'Pending',
            submitDocs: '1',
            docstoComplete: '1',
        },
        {
            id: uuidv4(),
            name: 'Ahmad',
            mentor: 'Shaun',
            quiz: 'Pending',
            submitDocs: '4',
            docstoComplete: '4',
        }
      ]
    },
    {
      id: uuidv4(),
      manager: 'Manager 2',
      hrdata: [
        {
            id: uuidv4(),
            name: 'ABC',
            mentor: 'Ash',
            quiz: 'Completed',
            submitDocs: '3',
            docstoComplete: '3',
        },
        {
            id: uuidv4(),
            name: 'ABC',
            mentor: 'Jacky',
            quiz: 'Completed',
            submitDocs: '2',
            docstoComplete: '2',
        },
        {
            id: uuidv4(),
            name: 'ABC',
            mentor: 'Andy',
            quiz: 'Pending',
            submitDocs: '1',
            docstoComplete: '1',
        },
        {
            id: uuidv4(),
            name: 'ABC',
            mentor: 'Shaun',
            quiz: 'Pending',
            submitDocs: '4',
            docstoComplete: '4',
        }
      ]
    },
    {
      id: uuidv4(),
      manager: 'Manager 3 ',
      hrdata: [
        {
            id: uuidv4(),
            name: 'Nisya1',
            mentor: 'Ash',
            quiz: 'Completed',
            submitDocs: '3',
            docstoComplete: '3',
        },
        {
            id: uuidv4(),
            name: 'Leo2',
            mentor: 'Jacky',
            quiz: 'Completed',
            submitDocs: '2',
            docstoComplete: '2',
        },
        {
            id: uuidv4(),
            name: 'Hendrick3',
            mentor: 'Andy',
            quiz: 'Pending',
            submitDocs: '1',
            docstoComplete: '1',
        },
        {
            id: uuidv4(),
            name: 'Ahmad4',
            mentor: 'Shaun',
            quiz: 'Pending',
            submitDocs: '4',
            docstoComplete: '4',
        }
      ]
    },
  ];