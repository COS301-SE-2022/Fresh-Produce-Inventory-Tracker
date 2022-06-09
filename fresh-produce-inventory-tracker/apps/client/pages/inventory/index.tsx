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
      <div className="flex items-center gap-x-4">
        <span className="">Show</span>
        <Select SHOW_ITEMS={SHOW_ITEMS} />
        <button
          onClick={() => setShowImageUpload(true)}
          className="flex items-center text-white gap-x-2 btn btn-primary"
        >
          <IoAdd className="hidden w-4 h-4 text-white md:flex" />
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
      <div className="flex items-center w-fit gap-x-4">
        <p>Status</p>
        <Select SHOW_ITEMS={['Expired', 'About to expire', 'New/Fresh']} />
      </div>

      <div className="w-full mt-10">
        <InventoryTable />
      </div>
    </div>
  );
}

export default Inventory;
