import styles from './user.module.css';

/* eslint-disable-next-line */
export interface UserProps {
  name:string,
  email:string,
  bio:string,
  visibility:string
}

export function UserInfo(props: UserProps) {
  if(props.visibility == "true")
  {
    return (
      <div className="grid grid-rows-5 my-1 mr-2 col-span-3 lg:max-w-[98%] rounded-r-lg">
            <div className="flex items-center font-bold grid grid-cols-12">
              <div className="m-2">
                <label className="mt-4">Name:</label>
              </div>
              <div className="flex items-center w-96% col-span-10 bg-blue-200 rounded m-2">
                <p className="m-2">{props.name}</p>
              </div>
              <div className='flex items-center font-bold grid'>
              <button className='bg-red-200 rounded-lg p-2 hover:bg-red-400'>Edit</button>
            </div>
            </div>
            <div className="flex items-center font-bold grid grid-cols-12">
              <div className="m-2">
                <label className="mt-4">Email:</label>
              </div>
              <div className="flex items-center w-96% col-span-11 bg-blue-200 rounded m-2">
                <p className="m-2">{props.email}</p>
              </div>
            </div>
            <div className="flex items-center font-bold grid grid-cols-12 row-span-2">
              <div className="m-2">
                <label className="mt-4">Bio:</label>
              </div>
              <div className="flex w-96% col-span-11 bg-blue-200 rounded m-2 h-full">
                <p className="m-2">{props.bio}</p>
              </div>
            </div>
          </div>
    );
  }
  else
  {
    return (
      <div className="grid grid-rows-4 my-1 mr-2 col-span-3 lg:max-w-[98%] rounded-r-lg">
            <div className="flex items-center font-bold grid grid-cols-13">
              <div className="m-2">
                <label className="mt-4">Name:</label>
              </div>
              <div className="flex items-center w-96% col-span-11 bg-blue-200 rounded m-2">
                <p className="m-2">{props.name}</p>
              </div>
              <div className='flex cols-span-1'>
                <button>Edit</button>
              </div>
            </div>
            <div className="flex items-center font-bold grid grid-cols-12">
              <div className="m-2">
                <label className="mt-4">Email:</label>
              </div>
              <div className="flex items-center w-96% col-span-11 bg-gray-200 rounded m-2">
                <p className="m-2"></p>
              </div>
            </div>
            <div className="flex items-center font-bold grid grid-cols-12 row-span-2">
              <div className="m-2">
                <label className="mt-4">Bio:</label>
              </div>
              <div className="flex w-96% col-span-11 bg-gray-200 rounded m-2 h-full">
                <p className="m-2"></p>
              </div>
            </div>
          </div>
    );
  }
}

export default UserInfo;
