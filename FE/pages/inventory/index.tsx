// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable-next-line */
// react plugin used to create charts
import { IoAdd, IoSearch } from 'react-icons/io5';
import InventoryTable from '../../components/inventory-table/inventory-table';
import Modal from '../../components/modal/modal';
import { useState } from 'react';
import { unstable_getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]';
import { useSession } from 'next-auth/react';

const scale_api = `http://13.244.78.12:3333/api/scale/producelist`;

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

  const form = 'id=1';

  const response = await fetch(scale_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: form,
  });

  const trendData = await response.json();

  if(response.status == 201)
  {
    for(let x = 0;x < trendData.length;x++)
    {
      const expireDate = new Date(trendData[x].expireDate);
      if(expireDate < new Date())
      {
        trendData[x].produceStatus = "expired";
      }
      else
      {
        trendData[x].produceStatus = "good";
      } 
    }
  }

  return {
    props: {
      session,trendData
    },
  };
}


export function Inventory({trendData}) {
  console.log(trendData);
  const { data: session } = useSession();
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [Title, setTitle] = useState("Add scale");

  function change(data)
  {
    setShowImageUpload(true);
    setTitle(data);
  }

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
          onClick={() => change("Add Scale")}
          className="flex items-center justify-center w-50% px-4 py-2 text-xs text-white btn btn-primary md:py-3 md:text-base gap-x-2 bg-primary"
        >
          <IoAdd className="w-4 h-4 text-white md:flex" />
          <span>Add Scale</span>
        </button>

        <button
          onClick={() => change("Check Freshness")}
          className="flex items-center justify-center w-50% px-4 py-2 text-xs text-white btn btn-primary md:py-3 md:text-base gap-x-2 bg-primary"
        >
          <IoSearch className="w-4 h-4 text-white md:flex" />
          <span>Check Freshness</span>
        </button>
        <Modal
          isOpen={showImageUpload}
          openModal={() => setShowImageUpload(true)}
          closeModal={() => setShowImageUpload(false)}
          title={Title}
          description="Please select and upload an image for analysis."
          id={session.user?.id?.toString()}
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
        <InventoryTable data={trendData} page="Inventory"/>
      </div>
    </div>
  );
}

export default Inventory;
