import { useState } from "react";
import {Loading} from "../../components/loading/loading"
import { useRouter } from 'next/router'
import Item from "./../../components/item/item"

/* eslint-disable-next-line */
export interface MobileProps {
  type:string
}

const upload_url = `http://13.244.78.12:3333/api/image/uploadone`;
const freshness_url = `http://13.244.78.12:3333/api/calcfreshness/predict`;
const add_task = `http://13.244.78.12:3333/api/tasks/createtask`;
const tableYear_api = `http://13.244.78.12:3333/api/trendforyear/getmonthaverages`;
const produce_api = `http://13.244.78.12:3333/api/scale/producelist`;

let FreshProduce = 0;
let PoultryMeat = 0;
let Pastries = 0;
let fn = 0;
let pmn = 0
let pn = 0;

export async function getServerSideProps() {

  let Form = "userid=1&producetype=Fresh Produce";

  let response = await fetch(tableYear_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: Form,
  });

  let trendDatas: number = await response.json();

  if(response.status == 201)
  {
    for(let x = 0;x < Object.values(trendDatas)[2].length;x++)
    {
      FreshProduce+=(Object.values(trendDatas)[2][x]);
    }
  }

  Form = "userid=1&producetype=Poultry/Meat";

  response = await fetch(tableYear_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: Form,
  });

  trendDatas = await response.json();

  if(response.status == 201)
  {
    for(let x = 0;x < (Object.values(trendDatas)[2]).length;x++)
    {
      PoultryMeat+=(Object.values(trendDatas)[2][x]);
    }
  }

  Form = "userid=1&producetype=Pastries";

  response = await fetch(tableYear_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: Form,
  });

  trendDatas = await response.json();

  if(response.status == 201)
  {
    for(let x = 0;x < Object.values(trendDatas)[2].length;x++)
    {
     Pastries+=(Object.values(trendDatas)[2][x]);
    }
  }

  Form = "id=1";

  response = await fetch(produce_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: Form,
  });

  const trendData = await response.json();

  if(response.status == 201)
  {
    for(let x = 0;x < trendData.length;x++)
    {
      if(trendData[x].ProduceType == "Fresh Produce")
      {
        fn++;
      }
      else if(trendData[x].ProduceType == "Poultry/Meat")
      {
        pmn++;
      }
      else
      {
        pn++;
      }
    }
  }

  return {
    props:{FreshProduce,PoultryMeat,Pastries,fn,pmn,pn}
  }
}

export function Mobile({FreshProduce,PoultryMeat,Pastries,fn,pmn,pn},props: MobileProps) {

  const router = useRouter();
  let type = "apple";
  
  if(typeof(router.query.type) == "string")
  {
    type = router.query.type;
  }

  const [image, setImage] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  const onImageChange = (e) => setImage(e.target.files[0]);
  const uploadImage = async (e) => {
    e.preventDefault();
    setShowLoading(true);
    
    const myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');


    const form = new FormData();
    form.append('id', '1');
    form.append('image', image);


    const response = await fetch(upload_url, {
      method: 'POST',
      headers: myHeaders,
      body: form,
    });

    const file = await response.json();

    if (response.status == 201) {
      alert('Image has been uploaded successfully');
      checkFreshness(file);
      return;
    } else if (response.status == 500) 
    {
      setShowLoading(false);
      alert('Error, please make sure you have uploaded valid image format.');
    }
  };

  const checkFreshness = async (data) => {
    const urlencoded = new URLSearchParams();
    urlencoded.append('id', '1');
    urlencoded.append('type', type);
    urlencoded.append('file', data.path);

    const myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');

    const response = await fetch(freshness_url, {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    });

    let prediction = await response.json();

    if (response.status == 201) {
      setShowLoading(false);
      prediction = Object.values(prediction);
      alert(
        'This apple is a "' +
          prediction[0] +
          '" with a prediction accuracy of ' +
          prediction[2] +
          '%'
      );
      if (prediction[0] == 'rotten apples') {
        createTask();
      }
      console.log(prediction);
      return;
    }

    if (response.status == 500) {
      setShowLoading(false);
      alert('Error, please make sure you have uploaded valid image format.');
    }
  };

  const createTask = async () => {
    const form = new FormData();
    form.append('id', '1');
    form.append('message', 'A rotten apple has been found, resolve asap!');

    const response = await fetch(add_task, {
      method: 'POST',
      body: form,
    });

    if (response.status == 201) {
      console.log('Task has been added to user page');
      return;
    }

    if (response.status == 500) {
      alert('Error, please make sure you have uploaded valid image format.');
    }
  };

  return (
    <div className="mt-4">
      <form
        onSubmit={uploadImage}
        className="flex flex-col w-full md:items-center md:justify-between gap-y-2 md:flex-row"
      >
        <label className="block">
          <input
            required
            onChange={onImageChange}
            type="file"
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary/20 file:text-secondary hover:file:bg-violet-100 "
            capture="environment">
            </input>
        </label>
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-200 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Upload Image
        </button>
      </form>
      <Loading
      isOpen={showLoading}
      openLoading={() => setShowLoading(true)}
      closeLoading={() => setShowLoading(false)}
      title="Add New Item"
      description="Please select and upload an image for analysis."
      />
      <Item type="Fresh Produce" count={FreshProduce} items={fn}></Item>
      <Item type="Poultry/Meat" count={PoultryMeat} items={pmn}></Item>
      <Item type="Pastries" count={Pastries} items={pn}></Item>
    </div>
  );
}

export default Mobile;
