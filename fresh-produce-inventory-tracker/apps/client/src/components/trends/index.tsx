import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import InventoryTable from '../inventory-table/inventory-table';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: '# of Votes',
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
        <span className="text-3xl">{number}</span>
        <span className="text-sm">{type}</span>
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
            <p className="text-xs text-black/50">last updated 05 June 2022</p>
          </div>
          <div className="grid grid-cols-2 mt-8 md:place-items-center md:grid-cols-4 gap-x-4 gap-y-8">
          <TrendItem
              icon={
                <AiOutlineNumber className="w-10 h-10 p-2 rounded-full text-info ring-1 ring-info" />
              }
              number={92}
              type="Total items"
            />
            <TrendItem
              icon={
                <IoWarningOutline className="w-10 h-10 p-2 rounded-full text-warning ring-1 ring-warning" />
              }
              number={23}
              type="About to expire"
            />
            <TrendItem
              icon={
                <MdOutlineDangerous className="w-10 h-10 p-2 rounded-full text-error ring-1 ring-error" />
              }
              number={10}
              type="Expired"
            />
            <TrendItem
              icon={
                <AiOutlineNumber className="w-10 h-10 p-2 rounded-full text-success ring-1 ring-success" />
              }
              number={25}
              type="New items"
            />
          </div>
          <div className="mt-8">
            <Link href="/inventory" passHref>
              <span className="flex items-center px-4 py-2 text-sm transition-all rounded-md cursor-pointer w-fit hover:bg-primary/10 group">
                View Inventory
                <MdChevronRight className="w-5 h-5 transition-all group-hover:translate-x-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mt-10">
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
