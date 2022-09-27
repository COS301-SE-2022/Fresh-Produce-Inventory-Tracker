// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable-next-line */
// react plugin used to create charts
import { useState } from "react";
import {Chart} from "./../../src/components/chart/chart"
import { options } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import { useSession } from 'next-auth/react';

const FreshProduce = [0,0,0,0,0,0,0,0,0,0,0,0];
const PoultryMeat = [0,0,0,0,0,0,0,0,0,0,0,0];
const Pastries = [0,0,0,0,0,0,0,0,0,0,0];
let FreshProduceLine = [];
let PoultryMeatLine = [];
let PastriesLine = [];
const months = [31,28,31,30,31,30,31,31,30,31,30,31]

const scale_api = `http://13.246.26.157:3333/api/scale/producelist`;
const tableYearAll_api = `http://13.246.26.157:3333/api/trendforyear/getall`;

const option = [
  "All","Fruit&Veg","Meat","Pastries"
];

export interface InventoryProps {
  type:string
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

  const Form = "userid=" + session.user?.id?.toString();

  const responses = await fetch(tableYearAll_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: Form,
  });

  const form = 'id=' + session.user?.id?.toString();

  const response = await fetch(scale_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: form,
  });

  const trendDatas = await responses.json();
  const trendData = await response.json();

  if(responses.status == 201 && response.status == 201)
  {
    PastriesLine = [];
    FreshProduceLine = [];
    PoultryMeatLine = [];
    let count = 0;
    for(let x = 0;x < trendDatas.length;x++)
    {
      if(trendDatas[x].ProduceType == "Fresh Produce")
      {
        count = 0;
        for(let y=0;y < months.length;y++)
          {
            for(let z = 0;z < months[y];z++)
            {
              FreshProduce[y] += trendDatas[x].AverageSalesAmountForYear[count];
              count++;
            }
          }

          const obj = {label:"",data:[],borderColor:""};
          let colour = "rgba(";
          const singleData = [0,0,0,0,0,0,0,0,0,0,0,0];
          count = 0;

          for(let y = 0;y < months.length;y++)
          {
            for(let z = 0;z < months[y];z++)
            {
              singleData[y] += trendDatas[x].AverageSalesAmountForYear[count];
              count++;
            }
          }

          for(let y = 0;y < trendData.length;y++)
          {
            if(trendData[y].id == trendDatas[x].id)
            {
              obj.label = trendData[y].name;
            }
          }

          for(let y = 0;y < 3;y++)
          {
            colour += Math.floor(Math.random() * 256) + ",";
          }

          colour+="1)";
          
          obj.data = singleData;
          obj.borderColor = colour;
          FreshProduceLine.push(obj);
      }
      else if(trendDatas[x].ProduceType == "Poultry/Meat")
      {
        
        count = 0;
        for(let y=0;y < months.length;y++)
          {
            for(let z = 0;z < months[y];z++)
            {
              PoultryMeat[y] += trendDatas[x].AverageSalesAmountForYear[count];
              count++;
            }
          }
          const obj = {label:"",data:[],borderColor:""};
          let colour = "rgba("
          const singleData = [0,0,0,0,0,0,0,0,0,0,0,0];
          count = 0;
          for(let y=0;y < months.length;y++)
          {
            for(let z = 0;z < months[y];z++)
            {
              singleData[y] += trendDatas[x].AverageSalesAmountForYear[count];
              count++;
            }
          }
          for(let y = 0;y < trendData.length;y++)
          {
            if(trendData[y].id == trendDatas[x].id)
            {
              obj.label = trendData[y].name;
            }
          }
          for(let y = 0;y < 3;y++)
          {
            colour += Math.floor(Math.random() * 256) + ",";
          }
          colour+="1)";
          
          obj.data = singleData;
          obj.borderColor = colour;
        PoultryMeatLine.push(obj);
      }
      else 
      {
        
        count = 0;
        for(let y=0;y < months.length;y++)
          {
            for(let z = 0;z < months[y];z++)
            {
              Pastries[y] += trendDatas[x].AverageSalesAmountForYear[count];
              count++;
            }
          }
          const obj = {label:"",data:[],borderColor:""};
          let colour = "rgba("
          const singleData = [0,0,0,0,0,0,0,0,0,0,0,0];
          count = 0;
          for(let y=0;y < months.length;y++)
          {
            for(let z = 0;z < months[y];z++)
            {
              singleData[y] += trendDatas[x].AverageSalesAmountForYear[count];
              count++;
            }
          }
          for(let y = 0;y < trendData.length;y++)
          {
            if(trendData[y].id == trendDatas[x].id)
            {
              obj.label = trendData[y].name;
            }
          }
          for(let y = 0;y < 3;y++)
          {
            colour += Math.floor(Math.random() * 256) + ",";
          }
          colour+="1)";
          
          obj.data = singleData;
          obj.borderColor = colour;
        PastriesLine.push(obj);
      }
    }
  }

  return {
    props:{FreshProduce,PoultryMeat,Pastries,FreshProduceLine,PoultryMeatLine,PastriesLine}
  }
}

export function Trends({FreshProduce,PoultryMeat,Pastries,FreshProduceLine,PoultryMeatLine,PastriesLine},props:InventoryProps) {
  const { data: session } = useSession();
  let x = 0;
  const [type, setType] = useState("Bar");
  const [produce, setProduce] = useState("Fruit");
  const [FP, setFP] = useState(FreshProduce);
  const [M, setM] = useState(PoultryMeat);
  const [P, setP] = useState(Pastries);
  const [lineData,setLineData] = useState([]);

  const filter = async (event) => {
    if(event.target.value != "All")
    {
      setType("Line");
      if(event.target.value == "Fruit&Veg")
      {
        setLineData(FreshProduceLine);
        setProduce("Fruit & Veg");
      }
      else if(event.target.value == "Meat")
      {
        setLineData(PoultryMeatLine);
        setProduce("Meat");
      }
      else
      {
        setLineData(PastriesLine);
        setProduce("Pastries");
      }
    }
    else
    {
      setType("Bar");
    }
  }

  const fetchData = async () => {
    FreshProduce = [0,0,0,0,0,0,0,0,0,0,0,0];
    PoultryMeat = [0,0,0,0,0,0,0,0,0,0,0,0];
    Pastries = [0,0,0,0,0,0,0,0,0,0,0,0];
    let count = 0;

    const Form = "userid=1";

    const responses = await fetch(tableYearAll_api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: Form,
    });

    const form = 'id=1';

    const response = await fetch(scale_api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: form,
    });

    const trendDatas = await responses.json();
    const trendData = await response.json();

    if(responses.status == 201)
    {
      PastriesLine = [];
      FreshProduceLine = [];
      PoultryMeatLine = [];
      for(let x = 0;x < trendDatas.length;x++)
      {
        if(trendDatas[x].ProduceType == "Fresh Produce")
        {
          count = 0;
          for(let y=0;y < months.length;y++)
          {
            for(let z = 0;z < months[y];z++)
            {
              FreshProduce[y] += trendDatas[x].AverageSalesAmountForYear[count];
              count++;
            }
          }
          const obj = {label:"",data:[],borderColor:""};
          let colour = "rgba("
          const singleData = [0,0,0,0,0,0,0,0,0,0,0,0];
          count = 0;
          for(let y=0;y < months.length;y++)
          {
            for(let z = 0;z < months[y];z++)
            {
              singleData[y] += trendDatas[x].AverageSalesAmountForYear[count];
              count++;
            }
          }
          for(let y = 0;y < trendData.length;y++)
          {
            if(trendData[y].id == trendDatas[x].id)
            {
              obj.label = trendData[y].name;
            }
          }
          for(let y = 0;y < 3;y++)
          {
            colour += Math.floor(Math.random() * 256) + ",";
          }
          colour+="1)";
          
          obj.data = singleData;
          obj.borderColor = colour;
          FreshProduceLine.push(obj);
        }
        else if(trendDatas[x].ProduceType == "Poultry/Meat")
        {
          count = 0;
          for(let y=0;y < months.length;y++)
          {
            for(let z = 0;z < months[y];z++)
            {
              PoultryMeat[y] += trendDatas[x].AverageSalesAmountForYear[count];
              count++;
            }
          }
          const obj = {label:"",data:[],borderColor:""};
          let colour = "rgba("
          const singleData = [0,0,0,0,0,0,0,0,0,0,0,0];
          count = 0;
          for(let y=0;y < months.length;y++)
          {
            for(let z = 0;z < months[y];z++)
            {
              singleData[y] += trendDatas[x].AverageSalesAmountForYear[count];
              count++;
            }
          }
          for(let y = 0;y < trendData.length;y++)
          {
            if(trendData[y].id == trendDatas[x].id)
            {
              obj.label = trendData[y].name;
            }
          }
          for(let y = 0;y < 3;y++)
          {
            colour += Math.floor(Math.random() * 256) + ",";
          }
          colour+="1)";
          
          obj.data = singleData;
          obj.borderColor = colour;
          PoultryMeatLine.push(obj);
        }
        else 
        {
          count = 0;
          for(let y=0;y < months.length;y++)
          {
            for(let z = 0;z < months[y];z++)
            {
              Pastries[y] += trendDatas[x].AverageSalesAmountForYear[count];
              count++;
            }
          }
          const obj = {label:"",data:[],borderColor:""};
          let colour = "rgba("
          const singleData = [0,0,0,0,0,0,0,0,0,0,0,0];
          count = 0;
          for(let y=0;y < months.length;y++)
          {
            for(let z = 0;z < months[y];z++)
            {
              singleData[y] += trendDatas[x].AverageSalesAmountForYear[count];
              count++;
            }
          }
          for(let y = 0;y < trendData.length;y++)
          {
            if(trendData[y].id == trendDatas[x].id)
            {
              obj.label = trendData[y].name;
            }
          }
          for(let y = 0;y < 3;y++)
          {
            colour += Math.floor(Math.random() * 256) + ",";
          }
          colour+="1)";
          
          obj.data = singleData;
          obj.borderColor = colour;
          PastriesLine.push(obj);
        }
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
            {option.map(option => (
              <option key={x++} value={option} className="p-4 space-y-4 text-white shadow dropdown-content bg-neutral menu rounded-box w-52">{option}</option>
            ))}
          </select>
        </div>
      </div>
      <Chart lineData={lineData} type={type} fruit={produce} data={[FP,M,P]}></Chart>
    </div>
  );
}

export default Trends;
