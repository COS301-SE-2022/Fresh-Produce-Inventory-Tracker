/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable-next-line */
export interface NotificationsProps {}

import Notification  from "../../src/components/notification"; 

const table_api = 'http://13.246.23.178:3333/api/notification/getnotifications';

const notifications =  [];

export async function getServerSideProps() {
  const  Form = "id=1";

  const response = await fetch(table_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: Form,
  });

  const TaskData = await response.json();
  for(let x = 0;x < TaskData.length;x++)
  {
    notifications.push(TaskData[x]);
  }

  if (response.status == 201) {
    //console.log(TaskData)
  }

  if(response.status == 500)
  {
    console.log("No notifications found")
  }

  return {
    props:{notifications}
  }
}

export function Notifications({notifications}) {
  deleteAll();
  if(notifications.length != 0)
  {
    return (
      <div>
            {notifications.map(notifications => (
              <Notification key = {notifications.id}{...notifications} Type={notifications.Type} number={notifications.id} message={notifications.message}></Notification>
            ))}
      </div>
    );
  }
  else
  {
    return (
      <div className="flex items-center w-full h-10 shadow-md rounded-lg p-4 lg:max-w-[95%] ml-5 mt-5 bg-blue-200">
        <h1>No notifications found</h1>
      </div>
    );
  }
  
}

function deleteAll()
{
  const table_api = 'http://13.246.23.178:3333/api/notification/deletenotification';

  async function del()
  {
    const  Form = "userid=1";

    const response = await fetch(table_api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: Form,
    });

    if (response.status == 201) {
      console.log("delete Success")
    }

    if(response.status == 500)
    {
      console.log("No notifications found")
    }
  }
  del();
}

export default Notifications;
