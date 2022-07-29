import axios from 'axios';
import url from 'node:url';
import { options } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
const tasksUrl = `${process.env.BACKEN_URL}/api/tasks/gettasks`;

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
      accessToken: session?.accessToken?.toString(),
    },
  };
}

export function Task({
  data,
  status,
  accessToken,
}: {
  data: any;
  status: number;
  accessToken: string;
}) {
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
                className="max-w-xl p-4 rounded shadow-lg cursor-pointer w-fit bg-slate-200 text-cyan-800 hover:bg-slate-300"
                key={task.message}
              >
                <span>{idx + 1}.</span>{' '}
                <span className="max-w-xl">{task.message}</span>
                <div className="flex mt-3 gap-x-2">
                  <button className="rounded btn btn-primary btn-xs">
                    Take action
                  </button>
                  <button className="rounded btn btn-error bg-opacity-10 text-error btn-xs hover:bg-opacity-20">
                    delete
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
