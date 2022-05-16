import Link from 'next/link';
import { AiOutlineNumber } from 'react-icons/ai';
import { IoWarningOutline } from 'react-icons/io5';
import { MdOutlineDangerous, MdChevronRight } from 'react-icons/md';
/* eslint-disable-next-line */
export interface StatisticsProps {}

const StatisticItem = ({ icon, number, type }) => (
  <div className="flex items-center gap-2 w-fit">
    {icon}
    <div>
      <p className="flex flex-col">
        <span className="text-xl font-bold">{number}</span>
        <span className="text-sm">{type}</span>
      </p>
    </div>
  </div>
);

export function Statistics(props: StatisticsProps) {
  return (
    <div className=" rounded-xl lg:max-w-[98%] px-4 py-10 bg-slate-50 mt-4 shadow-md ml-2">
      <h2 className="text-lg">Statistics</h2>
      <div className="grid grid-cols-2 mt-8 md:place-items-center md:grid-cols-4 gap-x-4 gap-y-8">
        <StatisticItem
          icon={
            <AiOutlineNumber className="w-10 h-10 p-2 rounded-full text-info bg-info/20" />
          }
          number={92}
          type="Total items"
        />
        <StatisticItem
          icon={
            <IoWarningOutline className="w-10 h-10 p-2 rounded-full text-warning bg-warning/20" />
          }
          number={23}
          type="About to expire"
        />
        <StatisticItem
          icon={
            <MdOutlineDangerous className="w-10 h-10 p-2 rounded-full text-error bg-error/20" />
          }
          number={10}
          type="Expired"
        />
        <StatisticItem
          icon={
            <AiOutlineNumber className="w-10 h-10 p-2 rounded-full text-success bg-success/20" />
          }
          number={25}
          type="New items"
        />
      </div>
      <div className="mt-8">
        <Link href="/inventory" passHref>
          <span className="flex items-center px-4 py-2 text-xs font-bold underline rounded-full cursor-pointer gap-x-2 w-fit text-primary">
            View Inventory
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Statistics;
