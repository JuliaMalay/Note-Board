const cards = [
  {
    id: 'card-1',
    title: 'Learning React',
  },
  {
    id: 'card-2',
    title: 'Develop an application',
  },
  {
    id: 'card-3',
    title: 'Buy socks',
  },
];

const data = {
  lists: [
    {id: 'list-1', title: 'Todo', cards},
    {id: 'list-2', title: 'Doing', cards: []},
  ],
};

export default data;
