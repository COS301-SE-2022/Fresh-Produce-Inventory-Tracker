/* eslint-disable-next-line */
export interface UserProps {}
import Image from './../../src/components/image/image';
import  Notification  from "../../src/components/notification"; 
import InventoryItem from '../../src/components/inventory-item/inventory-item';

interface InventoryItem {
  id: number;
  name: string;
  description: string;
  impordivay: string;
  condition: string;
  expiresIn: string;
}

const INVENTORY_ITEMS_DATA_MOCK: InventoryItem[] = [
  {
    id: 10,
    name: 'Bell paper',
    description: '10 Kgs of Bell papers',
    impordivay: 'Mar 13, 2022 at 10:01',
    condition: 'good',
    expiresIn: 'Apr 13, 2022',
  },
  {
    id: 13,
    name: 'Blue Berries',
    description: '8 Kgs of Blue berries',
    impordivay: 'Mar 10, 2022 at 17:21',
    condition: 'about to expire',
    expiresIn: 'Mar 18, 2022',
  },
  {
    id: 22,
    name: 'Rice',
    description: '50 Kgs of Rice',
    impordivay: 'Mar 01, 2022 at 09:11',
    condition: 'good',
    expiresIn: 'Mar 10, 2022',
  }
];

export function User(props: UserProps) 
{
  return (
    <div className="ml-2 h-5/6 border-solid border-2 lg:max-w-[98%] rounded">
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
      <div className="border-solid border-2 ml-4 rounded-lg h-inherit mr-4">
        <h1 className="content-center ml-6 font-bold font-lg mt-2">Inventory Items:</h1>
        <div className='mt-2 overflow-hidden'>
          <div className="grid grid-cols-5 rounded-lg bg-red-200 m-2 place-items-center">
                    <div>Number</div>
                    <div>Item-Name</div>
                    <div>Item-Description</div>
                    <div>Import-Date</div>
                    <div>Expiration-Date</div>
                  </div>
          {INVENTORY_ITEMS_DATA_MOCK.map(
              ({ id, name, description, expiresIn, condition, impordivay }) => {
                return (
                  <div key={id} className="grid grid-cols-5 rounded-lg bg-blue-200 m-2 place-items-center">
                    <div>#{id}</div>
                    <div>{name}</div>
                    <div>{description}</div>
                    <div>{impordivay}</div>
                    <div>{expiresIn}</div>
                  </div>
                );
              }
            )}
        </div>
        <p className='m-2'></p>
      </div>
    </div>
  )
}
  
export default User;
  