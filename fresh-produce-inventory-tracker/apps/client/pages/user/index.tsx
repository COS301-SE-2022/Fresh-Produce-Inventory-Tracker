/* eslint-disable-next-line */
export interface UserProps {}
import Image from './../../src/components/image/image';
import  Notification  from "../../src/components/notification"; 

export function User(props: UserProps) 
{
  return (
    <div className="ml-2 h-5/6 border-solid border-2 border-red-200 lg:max-w-[98%] rounded">
      <div className="grid grid-cols-4 ml-2">
        <div className="avatar my-2 ml-2">
          <div className="w-80 rounded-lg border-solid border-2">
            <Image />
          </div>
        </div>
        <div className="grid grid-rows-4 my-1 mr-2 col-span-3 lg:max-w-[98%] rounded-r-lg">
          <div className="flex items-center font-bold grid grid-cols-12">
            <div className="m-2">
              <label className="mt-4">Name:</label>
            </div>
            <div className="flex items-center w-96% col-span-11 bg-blue-200 rounded m-2">
              <p className="m-2">Durandt Uys</p>
            </div>
          </div>
          <div className="flex items-center font-bold grid grid-cols-12">
            <div className="m-2">
              <label className="mt-4">Email:</label>
            </div>
            <div className="flex items-center w-96% col-span-11 bg-blue-200 rounded m-2">
              <p className="m-2">durandtu@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center font-bold grid grid-cols-12 row-span-2">
            <div className="m-2">
              <label className="mt-4">Bio:</label>
            </div>
            <div className="flex w-96% col-span-11 bg-blue-200 rounded m-2 h-full">
              <p className="m-2">----Some text----</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-solid border-2 border-blue-200 ml-4 rounded-lg h-inherit mr-4">
        <h1 className="content-center ml-6 font-bold font-lg mt-2">Inventory Items:</h1>
        <Notification/>
        <p className='m-2'></p>
      </div>
    </div>
  )
}
  
export default User;
  