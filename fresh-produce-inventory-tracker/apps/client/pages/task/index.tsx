import axios from 'axios';
import url from 'node:url';
import { options } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import Swal from 'sweetalert2';

const tasksUrl = `${process.env.BACKEN_URL}/api/tasks/gettasks`;

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
    'http://localhost:3333/api/tasks/gettasks',
    params
  );

  return {
    props: {
      data: response.data,
      status: response.status,
      userId: session?.user?.id.toString(),
    },
  };
}

export function Task({
  data,
  status,
  userId,
}: {
  data: any;
  status: number;
  userId: string;
  }) {
  console.log(userId)
  const [loading, setLoading] = useState<boolean>(false);
  const handleDeleteTask = async (message: string) => {
    setLoading(true);
    const params = new URLSearchParams();
    params.append('id', userId);
    params.append('message', message.toString());
    const { data, status } = await axios.post(
      'http://localhost:3333/api/tasks/deletetask',
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
  };

  // console.log('tasks', data);
  return (
    <div className="p-4 ">
      <h2 className="text-lg">Tasks({data.length})</h2>
      <h3 className="mt-2">All the generated tasks will apear here.</h3>
      <ul className="flex flex-col mt-4 gap-y-2">
        {data.length > 0 ? (
          data.map((task, idx) => {
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
                      'Delete'
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
