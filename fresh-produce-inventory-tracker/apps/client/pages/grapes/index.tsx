/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable-next-line */
// react plugin used to create charts
import Router from "next/router";
import {Chart} from "../../src/components/chart/chart"
const fruitDataMonday = [];
const fruitDataTuesday = [];
const fruitDataWednesday = [];
const fruitDataThursday = [];
const fruitDataFriday = [];
const fruitDataSaturday = [];
const fruitDataSunday = [];

const table_api = 'http://localhost:3333/api/trend/getall';
const options = [
  "Grapes","All","Apples","Pears","Oranges"
];

export interface InventoryProps {
  type:string
}

export async function getServerSideProps() {
  const  Form = "userid=1";

  const response = await fetch(table_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: Form,
  });

  const trendData = await response.json();

  if (response.status == 201 && trendData != undefined) {
    for(let x = 0;x < trendData.length;x++)
    {
      const data = Object.values(trendData[x])[3];

      switch(data)
      {
        case "Monday":
          {
            fruitDataMonday.push(trendData[x]);
            break;
          }
        case "Tuesday":
          {
            fruitDataTuesday.push(trendData[x])
            break;
          }
        case "Wednesday":
          {
            fruitDataWednesday.push(trendData[x])
            break;
          }
        case "Thursday":
          {
            fruitDataThursday.push(trendData[x])
            break;
          }
        case "Friday":
          {
            fruitDataFriday.push(trendData[x])
            break;
          }
        case "Saterday":
          {
            fruitDataSaturday.push(trendData[x])
            break;
          }
        case "Sunday":
          {
            fruitDataSunday.push(trendData[x])
            break;
          }
      }
    }
  }

  if (response.status == 500) {
    alert('Incorrect id');
  }

  return {
    props:{fruitDataMonday,fruitDataTuesday,fruitDataWednesday,fruitDataThursday,fruitDataFriday,fruitDataSaturday,fruitDataSunday}
  }
}

export function Apples({fruitDataMonday,fruitDataTuesday,fruitDataWednesday,fruitDataThursday,fruitDataFriday,fruitDataSaturday,fruitDataSunday},props:InventoryProps) { 

  let x = 0;

  const filter = async (event) => {
    console.log(event.target.value)
    if(event.target.value == "All")
    {
      window.location.replace("./../trends");
    }
    else if(event.target.value != "Grapes")
    {
      window.location.replace("./../" + event.target.value.toLowerCase());
    }
  }

  return (
      <div>
      <div className="grid m-2 content-center grid-cols-6">
        <div className="col-span-2">
          <h1>Average Grape Sales</h1>
        </div>
        <div className="col-span-5"></div>
        <div>
        <select onChange={filter} className="relative w-40 py-[.88rem] pl-3 pr-10 text-left bg-white  rounded-lg shadow-md cursor-default ring-black/20 ring-1 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            {options.map(option => (
              <option key={x++} value={option} className="absolute min-w-full mt-2 overflow-auto text-base bg-white rounded-lg shadow-lg w-fit max-h-64 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">{option}</option>
            ))}
          </select>
        </div>
      </div>
      <Chart type="Line" fruit="Grapes" dataMonday={fruitDataMonday} dataTuesday={fruitDataTuesday} dataWednesday={fruitDataWednesday} dataThursday={fruitDataThursday} dataFriday={fruitDataFriday} dataSaturday={fruitDataSaturday} dataSunday={fruitDataSunday}></Chart>
    </div>
  );
}

export default Apples;
