import Link from 'next/link';
import { AiOutlineNumber, AiOutlineDollar} from 'react-icons/ai';
import { MdOutlineDangerous, MdChevronRight } from 'react-icons/md';
/* eslint-disable-next-line */
export interface ItemProps {
  type:string
}

const TrendItem = ({ icon, number, type }) => (
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

export function Item(props: ItemProps) {
  return (
    <div className="lg:max-w-[98%]">
      <div className="flex justify-between px-2 py-10 mt-4 shadow-md rounded-xl h-fit bg-slate-50">
        <div className="w-full">
          <div className="flex justify-between">
            <h2 className="text-lg">{props.type}</h2>
            <p className="text-xs text-black/50">last updated 05 June 2022</p>
          </div>
          <div className="grid grid-cols-1 place-items-center mt-8 gap-y-8">
            <TrendItem
              icon={
                <AiOutlineDollar className="w-10 h-10 p-2 rounded-full text-success bg-success/20" />
              }
              number={1500}
              type="Total items sold"
            />
            <TrendItem
              icon={
                <AiOutlineNumber className="w-10 h-10 p-2 rounded-full text-warning bg-warning/20" />
              }
              number={4}
              type="# of items"
            />
            <TrendItem
              icon={
                <MdOutlineDangerous className="w-10 h-10 p-2 rounded-full text-error bg-error/20" />
              }
              number={3}
              type="Expired"
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
    </div>
  );
}

export default Item;
