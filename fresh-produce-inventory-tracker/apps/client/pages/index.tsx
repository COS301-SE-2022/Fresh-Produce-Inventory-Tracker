// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable-next-line */
// react plugin used to create charts
import Trends from '../src/components/trends';
import { options } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';

const scale_api = `http://13.246.26.157:3333/api/scale/producelist`;

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

  const form = 'id=' + session.user?.id?.toString();

  const response = await fetch(scale_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: form,
  });

  const trendData = await response.json();

  if(response.status == 201)
  {
    console.log(trendData);
    for(let x = 0;x < trendData.length;x++)
    {
      const expireDate = new Date(trendData[x].expireDate);
      if(expireDate < new Date())
      {
        trendData[x].produceStatus = "expired";
      }
      else
      {
        trendData[x].produceStatus = "good";
      } 
    }
  }

  return {
    props: {
      session,trendData
    },
  };
}

export function Index({trendData}) {
  return (
    <div className="px-4">
      <Trends data={trendData}></Trends>
    </div>
  );
}

export default Index;
