import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import InventoryTable from '../inventory-table/inventory-table';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Total Items", "About to expire", "Expired"],
  datasets: [
    {
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

import Link from 'next/link';
import { AiOutlineNumber } from 'react-icons/ai';
import { IoWarningOutline } from 'react-icons/io5';
import { MdOutlineDangerous, MdChevronRight } from 'react-icons/md';
/* eslint-disable-next-line */
export interface TrendsProps {
  dataInventory?:any,
  dataTasks?:any,
  dataTrends?:any,
  expired:number,
  sales:number
}

export function Trends(props: TrendsProps) {
  return (
    <div className="lg:max-w-[98%]">
      <div className="flex justify-between px-2 py-10 mt-4 shadow-md rounded-xl h-fit bg-slate-50">
        <div className="w-full">
          <div className="flex justify-between">
            <h2 className="text-lg">Statistics</h2>
            <p className="text-xs">last updated 05 June 2022</p>
          </div>

          <div className="w-full bg-neutral text-white shadow stats [-ms-overflow-style:none] mt-4 [scrollbar-width:none] [-webkit-scrollbar]:hidden">
            <div className="stat">
              <div className="stat-figure text-info">
                <AiOutlineNumber className="w-10 h-10 p-2 rounded-full text-info ring-1 ring-info" />
              </div>
              <div className="stat-title">Total Items</div>
              <div className="stat-value text-info">{props.dataInventory.length}</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <IoWarningOutline className="w-10 h-10 p-2 rounded-full text-warning ring-1 ring-warning" />
              </div>
              <div className="stat-title">Number of Sales</div>
              <div className="stat-value text-warning">{props.sales}</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <MdOutlineDangerous className="w-10 h-10 p-2 rounded-full text-error ring-1 ring-error" />
              </div>
              <div className="stat-title">Expired</div>
              <div className="stat-value text-secondary">{props.expired}</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img src="https://placeimg.com/128/128/people" />
                  </div>
                </div>
              </div>
              <div className="stat-title">Tasks remaining</div>
              <div className="stat-value text-secondary">{props.dataTasks.length}</div>
              <div className="stat-desc">20 tasks complete</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 shadow-md rounded-xl p-2">
        <div className='w-full mt-4'>
          <h3 className="mb-4 mb-4">Recently Added</h3>
          <InventoryTable data={props.dataInventory} page='home'/>
          <Link href="/inventory" passHref>
            <span className="flex items-center px-4 py-2 transition-all rounded-md cursor-pointer w-fit group bg-primary text-white hover:bg-neutral/30">
              View Inventory
              <MdChevronRight className="w-5 h-5 transition-all group-hover:translate-x-2" />
            </span>
          </Link>
        </div>
        <div>
          <h3 className="mb-4 mt-4">Oustanding Tasks</h3>
          <InventoryTable data={props.dataInventory} page='home'/>
          <Link href="/tasks" passHref>
            <span className="flex items-center px-4 py-2 transition-all rounded-md cursor-pointer w-fit group bg-primary text-white hover:bg-neutral/30">
              View Tasks
              <MdChevronRight className="w-5 h-5 transition-all group-hover:translate-x-2" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Trends;
