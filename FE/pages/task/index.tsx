/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck 

import axios from 'axios';
import url from 'node:url';
import { options } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/react';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    options
  );

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const params = new url.URLSearchParams({
    id: session.user?.id?.toString(),
  });

  const response = await axios.post(
    `${process.env.BACKEND_URL}/api/tasks/gettasks`,
    params
  );

  return {
    props: {
      data: response.data,
      status: response.status,
      userId: session?.user?.id.toString(),
      session
    },
  };
}

export function Task({
  data,
  status,
  userId
}: {
  data: any;
  status: number;
  userId: string;
  }) {
  const { data: session } = useSession();
  const [tasks,setTask] = useState(data);
  const [loading, setLoading] = useState<boolean>(false);
  const handleDeleteTask = async (message: string) => {
    setLoading(true);
    const params = new URLSearchParams();
    params.append('id', userId);
    params.append('message', message.toString());
    const { status } = await axios.post(
      `http://13.246.32.49:3333/api/tasks/deletetask`,
      params
    );
    if (status === 201) {
      Toast.fire({
        icon: 'success',
        title: 'Task deleted.',
      });
    } else if (status >= 500) {
      Toast.fire({
        icon: 'error',
        title: 'Oops an error has occured.',
      });
    }
    setLoading(false);
  
    const form = 'id=' + session.user?.id?.toString();

    const response = await fetch("http://13.246.32.49:3333/api/tasks/gettasks", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: form,
    });
  
    const taskData = await response.json();

    setTask(taskData);
  };
  return (
    <div className="p-4 ">
      <h2 className="text-lg">Tasks({data.length})</h2>
      <h3 className="mt-2">All the generated tasks will apear here.</h3>
      <ul className="flex flex-col mt-4 gap-y-2">
        {tasks.length > 0 ? (
          tasks.map((task, idx) => {
            return (
              <li
                onClick={() => handleDeleteTask(task.message)}
                className="max-w-xl p-4 rounded shadow-lg cursor-pointer w-fit bg-slate-200 text-cyan-800 hover:bg-slate-300"
                key={task.message}
              >
                <span>{idx + 1}.</span>{' '}
                <span className="max-w-xl">{task.message}</span>
                <div className="flex mt-3 gap-x-2">
                  {/* <button className="rounded btn btn-primary btn-xs">
                    Take action
                  </button> */}
                  <button className="flex rounded gap-x-2 btn btn-error bg-opacity-10 text-error btn-xs hover:bg-opacity-20">
                    {loading ? (
                      <CgSpinner className="w-5 h-5 animate-spin" />
                    ) : (
                      'Complete Task'
                    )}
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <div className="max-w-xl p-4 font-bold text-center bg-cyan-100">
            No Tasks at the moment.
          </div>
        )}
      </ul>
    </div>
  );
}

export default Task;
