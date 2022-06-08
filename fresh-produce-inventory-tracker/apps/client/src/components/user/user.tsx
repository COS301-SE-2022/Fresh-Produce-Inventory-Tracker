import styles from './user.module.css';
import UserModal from '../user-modal/user-modal';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface UserProps {
  data:{id,Visibility,Name,email,Bio}
}

export function UserInfo(props: UserProps) {
  const [showImageUpload, setShowImageUpload] = useState(false);
  if(props.data != undefined)
  {
    if(props.data.Visibility == true)
    {
      return (
        <div className="grid grid-rows-5 my-1 mr-2 col-span-3 lg:max-w-[98%] rounded-r-lg">
              <div className="flex items-center font-bold grid grid-cols-12">
                <div className="m-2">
                  <label className="mt-4">Name:</label>
                </div>
                <div className="flex items-center w-96% col-span-10 bg-blue-200 rounded m-2">
                  <p className="m-2">{props.data.Name}</p>
                </div>
                <div className='flex items-center font-bold grid'>
                <button onClick={() => setShowImageUpload(true)} className='bg-red-200 rounded-lg p-2 hover:bg-red-400'>Edit</button>
                <UserModal
                  isOpen={showImageUpload}
                  openUserModal={() => setShowImageUpload(true)}
                  closeUserModal={() => setShowImageUpload(false)}
                  title="Edit info"
                  description="Please input the updated information."
                />
              </div>
              </div>
              <div className="flex items-center font-bold grid grid-cols-12">
                <div className="m-2">
                  <label className="mt-4">Email:</label>
                </div>
                <div className="flex items-center w-96% col-span-11 bg-blue-200 rounded m-2">
                  <p className="m-2">{props.data.email}</p>
                </div>
              </div>
              <div className="flex items-center font-bold grid grid-cols-12 row-span-2">
                <div className="m-2">
                  <label className="mt-4">Bio:</label>
                </div>
                <div className="flex w-96% col-span-11 bg-blue-200 rounded m-2 h-full">
                  <p className="m-2">{props.data.Bio}</p>
                </div>
              </div>
            </div>
      );
    }
    else
    {
      return (
        <div className="grid grid-rows-5 my-1 mr-2 col-span-3 lg:max-w-[98%] rounded-r-lg">
              <div className="flex items-center font-bold grid grid-cols-12">
                <div className="m-2">
                  <label className="mt-4">Name:</label>
                </div>
                <div className="flex items-center w-96% col-span-10 bg-blue-200 rounded m-2">
                  <p className="m-2">{props.data.Name}</p>
                </div>
                <div className='flex items-center font-bold grid'>
                <button className='bg-red-200 rounded-lg p-2 hover:bg-red-400'>Edit</button>
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
  else
  {
    <div className="grid grid-rows-5 my-1 mr-2 col-span-3 lg:max-w-[98%] rounded-r-lg">
              <div className="flex items-center font-bold grid grid-cols-12">
                <div className="m-2">
                  <label className="mt-4">Name:</label>
                </div>
                <div className="flex items-center w-96% col-span-10 bg-blue-200 rounded m-2">
                  <p className="m-2">John Doe</p>
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
                  <p className="m-2">JohnDoe@Example.com</p>
                </div>
              </div>
              <div className="flex items-center font-bold grid grid-cols-12 row-span-2">
                <div className="m-2">
                  <label className="mt-4">Bio:</label>
                </div>
                <div className="flex w-96% col-span-11 bg-blue-200 rounded m-2 h-full">
                  <p className="m-2">I am unknown and yet know by many</p>
                </div>
              </div>
            </div>
  }
}

export default UserInfo;
