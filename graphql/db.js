export const people = [
  {
    id: '0',
    name: 'Nicolas',
    age: 18,
    gender: 'female',
  },
  {
    id: '1',
    name: 'Tom',
    age: 28,
    gender: 'male',
  },
  {
    id: '2',
    name: 'Anne',
    age: 24,
    gender: 'female',
  },
  {
    id: '3',
    name: 'Henry',
    age: 25,
    gender: 'male',
  },
  {
    id: '4',
    name: 'Bob',
    age: 29,
    gender: 'male',
  },
  {
    id: '5',
    name: 'Carry',
    age: 28,
    gender: 'female',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => String(id) === person.id);
  return filteredPeople[0];
};
