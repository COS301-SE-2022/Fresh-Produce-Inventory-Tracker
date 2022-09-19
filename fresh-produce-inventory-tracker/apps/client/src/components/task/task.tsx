/* eslint-disable-next-line */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import Router from "next/router";
import Link from 'next/link';

export interface TaskProps {
  data:[]
}

export function Task(props: TaskProps) {

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => 
  {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    deleteTask(button.name,button.id);
  };
  return (
    <div>
      {props.data.map(function(d, idx){
         return (
          <div key={idx} className="grid items-center w-full shadow-md rounded-lg p-4 lg:max-w-[97%] ml-5 mt-5 bg-red-200 grid-cols-12">
            <h1 className="text-xl font-black">
              #{d.id}
            </h1>
            <div className="flex items-center col-span-10 ml-2">
              <h2>{d.message}</h2>
            </div>
            <button className="p-2 text-white bg-gray-600 rounded-lg  hover:bg-blue-800" name={d.message} id={d.id} onClick={buttonHandler}>Complete</button>
          </div>
        );
       })}
        
    </div>
  );
}

function deleteTask(message,id)
{
  async function del(message,id)
  {
    const deleteTask = 'http://localhost:3333/api/tasks/deletetask';

    const  Form = "id=1&message=" + message;

    const response = await fetch(deleteTask, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: Form,
    });

    if (response.status == 201) {
      alert("Task has been completed!")
    }

    if(response.status == 500)
    {
      console.log(response);
    }

    location.href = "./user";
  }
  del(message,id);
}

export default Task;
