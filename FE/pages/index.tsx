// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable-next-line */
// react plugin used to create charts
import Trends from '../components/trends';
import { options } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';

const scale_api = `http://13.244.78.12:3333/api/scale/producelist`;
const task_api = `http://13.244.78.12:3333/api/tasks/gettasks`;
const sales_api = `http://13.244.78.12:3333/api/trendforyear/getall`;

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

  let form = 'id=' + session.user?.id?.toString();

  let response = await fetch(scale_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: form,
  });

  const trendData = await response.json();

  let count = 0;

  if(response.status == 201)
  {
    for(let x = 0;x < trendData.length;x++)
    {
      const expireDate = new Date(trendData[x].expireDate);
      if(expireDate < new Date())
      {
        trendData[x].produceStatus = "expired";
        count++;
      }
      else
      {
        trendData[x].produceStatus = "good";
      } 
    }
  }

  response = await fetch(task_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: form,
  });

  const taskData = await response.json();

  form = "userid=" + session.user?.id?.toString();

  response = await fetch(sales_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: form,
  });

  const saleData = await response.json();
  let sales = 0;
  let FruitVeg = 0;
  let PoultryMeat = 0;
  let Pastries = 0;

  for(let x = 0;x < saleData.length;x++)
  {
    for(let y = 0;y < saleData[x].AverageSalesAmountForYear.length;y++)
    {
      if(saleData[x].ProduceType == "Fresh Produce")
      {
        FruitVeg+=saleData[x].AverageSalesAmountForYear[y];
      }
      else if(saleData[x].ProduceType == "Poultry/Meat")
      {
        PoultryMeat+=saleData[x].AverageSalesAmountForYear[y];
      }
      else
      {
        Pastries+=saleData[x].AverageSalesAmountForYear[y];
      }
      sales += saleData[x].AverageSalesAmountForYear[y];
    }
  }

  return {
    props: {
      session,trendData,taskData,count,sales,FruitVeg,PoultryMeat,Pastries
    },
  };
}

export function Index({trendData,taskData,count,sales,FruitVeg,PoultryMeat,Pastries}) {
  return (
    <div className="px-4">
      <Trends dataInventory={trendData} dataTasks={taskData} expired={count} sales={sales} FruitVegCount={FruitVeg} PoultryMeatCount={PoultryMeat} PastriesCount={Pastries}></Trends>
    </div>
  );
}

export default Index;
