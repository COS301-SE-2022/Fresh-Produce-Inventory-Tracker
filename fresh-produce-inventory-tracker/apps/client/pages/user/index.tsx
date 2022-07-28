/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable-next-line */
export interface UserProps {}
import Image from './../../src/components/image/image';
import { UserInfo } from './../../src/components/user/user';
import { Task } from './../../src/components/task/task';
import axios from 'axios';
import url from 'node:url';
import { options } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import { BiUser } from 'react-icons/bi';

const taskUrl = `${process.env.BACKEND_URL}/api/tasks/gettasks`;
const profileUrl = `${process.env.BACKEND_URL}/api/profile/getprofile`;

// export async function getStaticProps() {
//   const Form = 'id=1';

//   const response = await fetch(table_api, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//     },
//     body: Form,
//   });

//   const profileResponse = await fetch(profile, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//     },
//     body: Form,
//   });

//   const TaskData = await response.json();
//   console.log(profileResponse);
//   const Profile = await profileResponse.json();
//   const tasks = [];
//   for (let x = 0; x < TaskData.length; x++) {
//     tasks.push(TaskData[x]);
//   }

//   if (response.status == 201) {
//     console.log(TaskData);
//   }

//   if (response.status == 500) {
//     console.log('No tasks found');
//   }

//   return {
//     props: { tasks, Profile },
//     revalidate: 1,
//   };
// }

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
    token: session?.accessToken?.toString(),
  });

  const response = await axios.post(profileUrl, params);

  return {
    props: {
      data: response.data,
      status: response.status,
    },
  };
}

export function User({ data, status }) {
  console.log(data);

  if (status >= 500)
    return (
      <div className="grid w-full h-screen place-content-center">
        <p className="p-4 text-xl text-red-700 rounded bg-red-500/30">
          ! Ooops. An Error has occured.
        </p>
      </div>
    );

  return (
    <div className="p-4">
      <div className="grid w-full grid-cols-10 mt-4">
        <div className="col-span-10 xl:col-span-2">Peronal Information</div>
        <div className="col-span-full md:col-span-5 xl:col-span-4">
          <div className="flex items-end justify-between w-full mt-4 md:justify-start xl:mt-0 gap-x-4">
            <BiUser className="w-24 h-24 p-2 rounded bg-slate-300" />
            <button className="underline decoration-secondary text-secondary">
              Change
            </button>
          </div>
          <div className="flex flex-col justify-between gap-4 mt-6 md:flex-row">
            <div className="flex flex-col gap-2">
              <label htmlFor="first-names" className="font-light">
                First Name(s)
              </label>
              <input
                defaultValue={data?.Name}
                type="text"
                className="w-full p-2 rounded ring-1 ring-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="first-names" className="font-light">
                Last Name
              </label>
              <input
                defaultValue={data?.Surname}
                type="text"
                className="w-full p-2 rounded ring-1 ring-black"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 mt-6">
            <label htmlFor="first-names" className="font-light">
              Bio
            </label>
            <textarea
              defaultValue={data.Bio}
              className="w-full p-2 rounded ring-1 ring-black"
            />
          </div>
          <div className="mt-8">
            <button className="px-4 py-2 text-sm font-light text-white rounded bg-primary">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-10 mt-8">
        <div className="col-span-10 mt-2 xl:col-span-2">
          Account Information
        </div>
        <div className="col-span-full md:col-span-5 xl:col-span-4">
          <p className="px-4 py-2 mt-4 text-xs font-bold rounded xl:mt-0 bg-sky-100 text-sky-900">
            ! To udpate password, fill in Current password, and New password.
          </p>
          <div className="flex flex-col justify-between gap-4 mt-4 md:flex-col">
            <div className="flex flex-col gap-2">
              <label htmlFor="first-names" className="font-light">
                Username
              </label>
              <input
                disabled
                defaultValue={data?.email}
                type="text"
                className="w-full p-2 rounded disabled:opacity-70 disabled:cursor-not-allowed ring-1 ring-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="first-names" className="font-light">
                Email
              </label>
              <input
                disabled
                defaultValue={data?.email}
                type="text"
                className="w-full p-2 rounded disabled:opacity-70 disabled:cursor-not-allowed ring-1 ring-black"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 mt-6 md:flex-row">
            <div className="flex flex-col gap-2">
              <label htmlFor="first-names" className="font-light">
                Current Password
              </label>
              <input
                defaultValue={''}
                type="password"
                className="w-full p-2 rounded disabled:opacity-70 disabled:cursor-not-allowed ring-1 ring-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="first-names" className="font-light">
                New Password
              </label>
              <input
                defaultValue={''}
                type="password"
                className="w-full p-2 rounded disabled:opacity-70 disabled:cursor-not-allowed ring-1 ring-black"
              />
            </div>
          </div>
          <div className="mt-8">
            <button className="px-4 py-2 text-sm font-light text-white rounded bg-primary">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>

    //

    // <div className="ml-2 h-5/6 border-solid border-2 mt-4 pt-2 lg:max-w-[98%] rounded">
    //   <div className="grid grid-cols-4 ml-2 h-3/6">
    //     <div className="my-2 ml-2 avatar">
    //       <div className="border-2 border-solid rounded-lg w-80">
    //         <Image />
    //       </div>
    //     </div>
    //     <UserInfo data={Profile}></UserInfo>
    //   </div>
    //   <div className="ml-4 mr-4 border-2 border-solid rounded-lg h-2/5">
    //     <h1 className="content-center mt-2 ml-6 font-bold font-lg">Tasks:</h1>
    //     <div className="h-full mt-2 overflow-auto">
    //       <div className="grid h-10 grid-cols-12 m-2 bg-blue-200 rounded-lg place-items-center">
    //         <div>ID</div>
    //         <div className="col-span-10">Description</div>
    //       </div>
    //       <Task data={tasks}></Task>
    //     </div>
    //     <p className="m-2"></p>
    //   </div>
    // </div>
  );
}

export default User;
