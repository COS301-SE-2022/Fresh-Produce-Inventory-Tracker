/* eslint-disable-next-line */
export interface UserProps {}
import Image from './../../src/components/image/image';
import {UserInfo} from "./../../src/components/user/user"

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

export function User(props: UserProps) 
{
  return (
    <div className="ml-2 h-5/6 border-solid border-2 lg:max-w-[98%] rounded">
      <div className="grid grid-cols-4 ml-2">
        <div className="avatar my-2 ml-2">
          <div className="w-80 rounded-lg border-solid border-2">
            <Image />
          </div>
        </div>
        <UserInfo name="Durandt" email="durandtu@gmail.com" bio="Third year university student currently enrolled in a Bachelors of Information technology at the University of Pretoria."></UserInfo>
      </div>
      <div className="border-solid border-2 ml-4 rounded-lg h-inherit mr-4">
        <h1 className="content-center ml-6 font-bold font-lg mt-2">Tasks:</h1>
        <div className='mt-2 overflow-hidden'>
          <div className="grid grid-cols-5 rounded-lg bg-red-200 m-2 place-items-center">
            <div>ID</div>
            <div>Name</div>
            <div className='col-span-3'>Description</div>
          </div>
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
        </div>
        <p className='m-2'></p>
      </div>
    </div>
  )
}
  
export default User;
  