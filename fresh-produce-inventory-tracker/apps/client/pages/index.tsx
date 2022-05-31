import { MdDashboard } from 'react-icons/md';
import Statistics from '../src/components/statistics';

interface Task {
  id: number;
  name: string;
  description: string;
}

const Task_Mock_Data: Task[] = [
  {
    id: 1,
    name: 'Apple restock',
    description: 'Apples on isle 9 need to be restocked asap!'
  },
  {
    id: 2,
    name: 'Blue Berries restock',
    description: 'Blue berries need to be restocked asap!'
  },
  {
    id: 3,
    name: 'Rotten tamato',
    description: 'A rotten tamato has been detected, please check the tamatos asap!'
  }
];

export function Index() {
  return (
    <div>
      <h1>Tasks:</h1>
      {Task_Mock_Data.map(
        ({ id, name, description }) => {
          return (
            <div key={id} className="grid grid-cols-5 rounded-lg bg-blue-200 m-2 place-items-center">
              <div>#{id}</div>
              <div>{name}</div>
              <div className='col-span-3'>{description}</div>
            </div>
          );
        }
      )}
      <Statistics></Statistics>
    </div>
  );
}

export default Index;
