/* eslint-disable-next-line */
export interface UserProps {}
import Image from './../../src/components/image/image';
import {UserInfo} from "./../../src/components/user/user"
import {Task} from "./../../src/components/task/task"

const table_api = 'http://localhost:3333/api/tasks/gettasks';

export async function getServerSideProps() {
  const  Form = "id=1";

  const response = await fetch(table_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: Form,
  });

  const TaskData = await response.json();

  if (response.status == 201) {
    console.log(TaskData)
  }

  if(response.status == 500)
  {
    console.log("No tasks found")
  }

  return {
    props:{Tasks:TaskData}
  }
}

export function User({Tasks}) 
{
  return (
    <div className="ml-2 h-5/6 border-solid border-2 lg:max-w-[98%] rounded">
      <div className="grid grid-cols-4 ml-2">
        <div className="avatar my-2 ml-2">
          <div className="w-80 rounded-lg border-solid border-2">
            <Image/>
          </div>
        </div>
        <UserInfo name="Durandt" email="durandtu@gmail.com" bio="Third year university student currently enrolled in a Bachelors of Information technology at the University of Pretoria." visibility="true"></UserInfo>
      </div>
      <div className="border-solid border-2 ml-4 rounded-lg h-inherit mr-4">
        <h1 className="content-center ml-6 font-bold font-lg mt-2">Tasks:</h1>
        <div className='mt-2 overflow-hidden'>
          <div className="grid grid-cols-5 rounded-lg bg-red-200 m-2 place-items-center">
            <div>ID</div>
            <div>Name</div>
            <div className='col-span-3'>Description</div>
          </div>
        </div>
        <p className='m-2'></p>
      </div>
    </div>
  )
}
  
export default User;
  