import Select from '../../src/components/select';
import { IoAdd } from 'react-icons/io5';
import InventoryTable from '../../src/components/inventory-table/inventory-table';
import Modal from '../../src/components/modal/modal';
import { useState } from 'react';
/* eslint-disable-next-line */
export interface InventoryProps {}

const SHOW_ITEMS: string[] = ['10 Items', '15 Items', '20 Items'];

enum SELECT_STATUS {
  Expired,
  'About to Expire',
  'NEW',
}

export function Inventory(props: InventoryProps) {
  const [showImageUpload, setShowImageUpload] = useState(false);

  return (
    <div className="rounded-xl flex flex-wrap justify-between lg:max-w-[98%] px-4 py-10 bg-slate-50 mt-4 shadow-md">
      <div className="flex flex-col-reverse gap-y-4 md:items-center md:flex-row gap-x-4">
        <div className="flex items-center gap-x-5">
          <span className="text-sm md:text-base">Show</span>
          <Select SHOW_ITEMS={SHOW_ITEMS} />
        </div>
        <button
          onClick={() => setShowImageUpload(true)}
          className="flex items-center justify-center w-full px-4 py-2 text-xs text-white rounded md:py-3 md:text-base gap-x-2 bg-primary"
        >
          <IoAdd className="w-4 h-4 text-white md:flex" />
          <span>Add Item</span>
        </button>
        <Modal
          isOpen={showImageUpload}
          openModal={() => setShowImageUpload(true)}
          closeModal={() => setShowImageUpload(false)}
          title="Add New Item"
          description="Please select and upload an image for analysis."
        />
      </div>
      <div className="flex items-center mt-2 w-fit gap-x-4 md:mt-0">
        <p className="text-sm md:text-base">Status</p>
        <Select SHOW_ITEMS={['Expired', 'About to expire', 'New/Fresh']} />
      </div>

      <div className="w-full mt-10">
        <InventoryTable />
      </div>
    </div>
  );
}

export default Inventory;
