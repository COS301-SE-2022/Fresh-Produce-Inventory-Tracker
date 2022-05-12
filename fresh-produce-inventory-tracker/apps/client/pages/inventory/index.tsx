import Select from '../../src/components/select';
import { IoAdd } from 'react-icons/io5';
/* eslint-disable-next-line */
export interface InventoryProps {}

const SHOW_ITEMS: string[] = ['10', '15', '20'];

export function Inventory(props: InventoryProps) {
  return (
    <div className="rounded-xl lg:max-w-[98%] ml-2 px-4 py-10 bg-slate-50 mt-4 shadow-md">
      <div className="flex items-center gap-x-4">
        <span>Show</span>
        <Select SHOW_ITEMS={SHOW_ITEMS} />
        <button className="flex text-white gap-x-2 btn btn-primary hover:btn-secondary hover:text-black">
          <IoAdd className="w-4 h-4 text-white " />
          Add Item
        </button>
      </div>
    </div>
  );
}

export default Inventory;
