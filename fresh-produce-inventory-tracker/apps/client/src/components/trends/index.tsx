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
  sales:number,
  saleData:any
}

export function Trends(props: TrendsProps) {
  let FruitVegCount = 0;
  let PoultryMeatCount = 0;
  let PastriesCount = 0;
  for(let x = 0;x < props.saleData.length;x++)
  {
    if(props.saleData[x].ProduceType == "Fresh Produce")
    {
      FruitVegCount++;
    }
    else if(props.saleData[x].ProduceType == "Poultry/Meat")
    {
      PoultryMeatCount++
    }
    else
    {
      PastriesCount++;
    }
  }

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
                <MdOutlineDangerous className="w-10 h-10 p-2 rounded-full text-error ring-1 ring-error" />
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
          <h3 className="mb-4 mt-4">Sales Per Category</h3>
          <Doughnut data={{labels:["Fruit&Veg","Poultry/Meat","Pastries"],datasets:[{label:"# of Items",data:[FruitVegCount,PoultryMeatCount,PastriesCount],backgroundColor:["rgba(0,255,0,0.5)","rgba(255,0,0,0.5)","rgba(0,0,255,0.5)"]}]}}></Doughnut>
          <Link href="/trends" passHref>
            <span className="flex items-center px-4 py-2 transition-all rounded-md cursor-pointer w-fit group bg-primary text-white hover:bg-neutral/30">
              View Trends
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
