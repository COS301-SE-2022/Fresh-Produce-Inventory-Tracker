/* eslint-disable-next-line */
export interface TaskProps {
  id:string,
  message:string
}

export function Task(props: TaskProps) {

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => 
  {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    deleteTask(button.name);
  };
  return (
    <div className="grid grid-cols-6 rounded-lg bg-blue-200 m-2 place-items-center">
      <div>#{props.id}</div>
      <div className='col-span-3'>{props.message}</div>
      <button onClick={buttonHandler} name={props.id}>Complete task</button>
    </div>
  );
}

function deleteTask(id)
{
  async function del(id)
  {
    const deleteTask = 'http://localhost:3333/api/tasks/deletetask';

    const  Form = "id="+id;

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
  }
  del(id);
}

export default Task;
