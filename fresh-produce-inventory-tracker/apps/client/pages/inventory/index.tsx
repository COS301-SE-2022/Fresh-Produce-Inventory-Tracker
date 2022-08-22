import Select from '../../src/components/select';
import { IoAdd } from 'react-icons/io5';
import InventoryTable from '../../src/components/inventory-table/inventory-table';
import Modal from '../../src/components/modal/modal';
import { useState } from 'react';
/* eslint-disable-next-line */
export interface InventoryProps {}

enum SHOW_ITEMS {
  '10 Items' = '10 Items',
  '15 Items' = '15 Items',
  '20 Items' = '20 Items',
}

enum SELECT_STATUS {
  Expired = 'Expired',
  'About to Expire' = 'About to Expire',
  'New/Fresh' = 'New/Fresh',
}

export function Inventory(props: InventoryProps) {
  const [showImageUpload, setShowImageUpload] = useState(false);

  return (
    <div className="rounded-xl flex flex-wrap justify-between lg:max-w-[98%] px-4 py-10 bg-slate-50 mt-4 shadow-md">
      <div className="flex flex-col-reverse gap-y-4 md:items-center md:flex-row gap-x-4 ">
        <div className="flex items-center gap-x-5 w-fit">
          <div className="dropdown">
            <label tabIndex={0} className="m-1 text-white btn btn-primary">
              Show
            </label>
            <ul
              tabIndex={0}
              className="p-4 space-y-4 text-white shadow dropdown-content bg-neutral menu rounded-box w-52"
            >
              {Object.keys(SHOW_ITEMS).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <button
          onClick={() => setShowImageUpload(true)}
          className="flex items-center justify-center w-full px-4 py-2 text-xs text-white btn btn-primary md:py-3 md:text-base gap-x-2 bg-primary"
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
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="m-1 text-white btn btn-primary">
            Status
          </label>
          <ul
            tabIndex={0}
            className="p-4 space-y-4 text-white shadow dropdown-content menu bg-neutral rounded-box w-52"
          >
            {Object.keys(SELECT_STATUS).map((status) => (
              <li key={status}>{status}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full mt-10">
        <InventoryTable />
      </div>
    </div>
  );
}

export default Inventory;
