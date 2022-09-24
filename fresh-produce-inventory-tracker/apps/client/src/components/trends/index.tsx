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
export interface TrendsProps {}

const TrendItem = ({ icon, number, type }) => (
  <div className="flex items-center gap-2 p-4 rounded-md shadow-xl h-28 md:w-48 bg-primary/10">
    {icon}
    <div>
      <p className="flex flex-col">
        <span className="block text-xl truncate md:text-3xl">{number}</span>
        <span className="text-xs md:text-base">{type}</span>
      </p>
    </div>
  </div>
);

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
              <div className="stat-value text-info">92</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <IoWarningOutline className="w-10 h-10 p-2 rounded-full text-warning ring-1 ring-warning" />
              </div>
              <div className="stat-title">About To Expire</div>
              <div className="stat-value text-warning">24</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <MdOutlineDangerous className="w-10 h-10 p-2 rounded-full text-error ring-1 ring-error" />
              </div>
              <div className="stat-title">Expired</div>
              <div className="stat-value text-secondary">2.6M</div>
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
              <div className="stat-value">86%</div>
              <div className="stat-title">Tasks complete</div>
              <div className="stat-desc text-secondary">3 tasks remaining</div>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/inventory" passHref>
              <span className="flex items-center px-4 py-2 transition-all rounded-md cursor-pointer w-fit group bg-neutral/10 hover:bg-neutral/30">
                View Inventory
                <MdChevronRight className="w-5 h-5 transition-all group-hover:translate-x-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 gap-y-8 md:flex-row">
        <div className="md:w-[25%] w-full h-fit">
          <h3 className="text-md">Some Numbers</h3>
          <Doughnut data={data} />
        </div>
        <div className="md:w-[75%]">
          <h3 className="mb-4 ">Recently Added</h3>
          <InventoryTable />
        </div>
      </div>
    </div>
  );
}

export default Trends;
