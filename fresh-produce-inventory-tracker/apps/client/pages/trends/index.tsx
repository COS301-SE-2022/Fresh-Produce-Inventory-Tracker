/* eslint-disable-next-line */
// react plugin used to create charts
import { constants } from "buffer";
import {Chart} from "./../../src/components/chart/chart"
const fruitDataMonday = [];
const fruitDataTuesday = [];
const fruitDataWednesday = [];
const fruitDataThursday = [];
const fruitDataFriday = [];
const fruitDataSaturday = [];
const fruitDataSunday = [];

const table_api = 'http://localhost:3333/api/trend/getall';

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

  if (response.status == 201) {
    console.log(trendData);
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
    props: {fruitDataMonday,fruitDataTuesday,fruitDataWednesday,fruitDataThursday,fruitDataFriday,fruitDataSaturday,fruitDataSunday}
  }
}



export function Trends({fruitDataMonday,fruitDataTuesday,fruitDataWednesday,fruitDataThursday,fruitDataFriday,fruitDataSaturday,fruitDataSunday}) {
  return (
      <div className="m-2 content-center">
        <div>
          <h1>Average Fruit Sales</h1>
        </div>
        <Chart type="Bar" fruit="Fruit" dataMonday={fruitDataMonday} dataTuesday={fruitDataTuesday} dataWednesday={fruitDataWednesday} dataThursday={fruitDataThursday} dataFriday={fruitDataFriday} dataSaturday={fruitDataSaturday} dataSunday={fruitDataSunday}></Chart>
      </div>
  );
}

export default Trends;
