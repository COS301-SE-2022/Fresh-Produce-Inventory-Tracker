// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable-next-line */
// react plugin used to create charts
import { useState } from "react";
import {Chart} from "./../../src/components/chart/chart"
const fruitDataMonday = [];
const fruitDataTuesday = [];
const fruitDataWednesday = [];
const fruitDataThursday = [];
const fruitDataFriday = [];
const fruitDataSaturday = [];
const fruitDataSunday = [];
const FreshProduce = [];
const PoultryMeat = [];
const Pastries = [];
const lineData = [];

const table_api = 'http://13.246.23.178:3333/api/trend/getall';
const tableYear_api = 'http://13.246.23.178:3333/api/trendforyear/getmonthaverages';

const options = [
  "All","Fruit&Veg","Meat","Pastries"
];

enum SHOW_ITEMS {
  '10 Items' = '10 Items',
  '15 Items' = '15 Items',
  '20 Items' = '20 Items',
}

export interface InventoryProps {
  type:string
}

export async function getServerSideProps() {
  let  Form = "userid=1";

  const response = await fetch(table_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: Form,
  });

  const trendData = await response.json();

  Form = "userid=1&producetype=Fresh Produce"

  let responses = await fetch(tableYear_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: Form,
  });

  let trendDatas = await responses.json();

  if(responses.status == 201)
  {
    console.log(trendDatas);
    for(let x = 0;x < Object.values(trendDatas)[2].length;x++)
    {
      FreshProduce.push(Object.values(trendDatas)[2][x]);
    }
  }

  Form = "userid=1&producetype=Poultry/Meat"

  responses = await fetch(tableYear_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: Form,
  });

  trendDatas = await responses.json();

  if(responses.status == 201)
  {
    for(let x = 0;x < (Object.values(trendDatas)[2]).length;x++)
    {
      PoultryMeat.push(Object.values(trendDatas)[2][x]);
    }
  }

  Form = "userid=1&producetype=Pastries"

  responses = await fetch(tableYear_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: Form,
  });

  trendDatas = await responses.json();

  if(responses.status == 201)
  {
    for(let x = 0;x < Object.values(trendDatas)[2].length;x++)
    {
     Pastries.push(Object.values(trendDatas)[2][x]);
    }
  }

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
    props:{fruitDataMonday,fruitDataTuesday,fruitDataWednesday,fruitDataThursday,fruitDataFriday,fruitDataSaturday,fruitDataSunday,FreshProduce,PoultryMeat,Pastries,lineData}
  }
}

export function Trends({fruitDataMonday,fruitDataTuesday,fruitDataWednesday,fruitDataThursday,fruitDataFriday,fruitDataSaturday,fruitDataSunday,FreshProduce,PoultryMeat,Pastries,lineData},props:InventoryProps) {

  let x = 0;
  const [type, setType] = useState("Bar");
  const [produce, setProduce] = useState("Fruit");
  const [FP, setFP] = useState(FreshProduce);
  const [M, setM] = useState(PoultryMeat);
  const [P, setP] = useState(Pastries);

  const filter = async (event) => {
    if(event.target.value != "All")
    {
      setType("Line");
      if(event.target.value == "Fruit&Veg")
      {
        lineData = FreshProduce;
        setProduce("Fruit & Veg");
      }
      else if(event.target.value == "Meat")
      {
        lineData = PoultryMeat;
        setProduce("Meat");
      }
      else
      {
        lineData = Pastries;
        setProduce("Pastries");
      }
    }
    else
    {
      setType("Bar");
    }
  }

  const [refresh, setR] = useState(false);

  const fetchData = async () => {
    FreshProduce = [];
    PoultryMeat = [];
    Pastries = [];
    let Form = "userid=1&producetype=Fresh Produce"

    let responses = await fetch(tableYear_api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: Form,
    });

    let trendDatas = await responses.json();

    if(responses.status == 201)
    {
      for(let x = 0;x < Object.values(trendDatas)[2].length;x++)
      {
        FreshProduce.push(Object.values(trendDatas)[2][x]);
      }
    }

    Form = "userid=1&producetype=Poultry/Meat"

    responses = await fetch(tableYear_api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: Form,
    });

    trendDatas = await responses.json();

    if(responses.status == 201)
    {
      for(let x = 0;x < (Object.values(trendDatas)[2]).length;x++)
      {
        PoultryMeat.push(Object.values(trendDatas)[2][x]);
      }
    }

    Form = "userid=1&producetype=Pastries"

    responses = await fetch(tableYear_api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: Form,
    });

    trendDatas = await responses.json();

    if(responses.status == 201)
    {
      for(let x = 0;x < Object.values(trendDatas)[2].length;x++)
      {
        Pastries.push(Object.values(trendDatas)[2][x]);
      }
    }
    setFP(FreshProduce);
    setM(PoultryMeat);
    setP(Pastries);
  }

  function stateChange() {
    setTimeout(function () {
        fetchData();
        stateChange();
    }, 15000);
  }

  stateChange();

  return (
      <div>
      <div className="grid content-center grid-cols-6 m-2">
        <div className="col-span-2">
          <h1>Average Sales</h1>
        </div>
        <div className="col-span-5"></div>
        <div>
        <select onChange={filter} className="m-1 text-white btn btn-primary">
            {options.map(option => (
              <option key={x++} value={option} className="p-4 space-y-4 text-white shadow dropdown-content bg-neutral menu rounded-box w-52">{option}</option>
            ))}
          </select>
        </div>
      </div>
      <Chart lineData={lineData} type={type} fruit={produce} data={[FP,M,P]} dataMonday={fruitDataMonday} dataTuesday={fruitDataTuesday} dataWednesday={fruitDataWednesday} dataThursday={fruitDataThursday} dataFriday={fruitDataFriday} dataSaturday={fruitDataSaturday} dataSunday={fruitDataSunday}></Chart>
    </div>
  );
}

export default Trends;
