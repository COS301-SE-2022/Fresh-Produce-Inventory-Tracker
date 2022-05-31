/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable-next-line */
export interface NotificationsProps {}

import { notifications } from "../data/data.json";

import  Notification  from "../../src/components/notification"; 
import  UNotification  from "../../src/components/urgent-notification"; 
import {remove} from "../../../backend/addNotification.js"


export const getStaticProps = async() => {
  return{
    props:{
      notificationsList:notifications
    }
  }
}

export function Notifications({notificationsList}) {
  return (
    <div>
          {notificationsList.map(notificationsList => (
            urgencyCheck(notificationsList.id,notificationsList,notificationsList.urgency)
          ))}
    </div>
  );
}

function urgencyCheck(id,notificationsList,urgency)
{
  if(urgency == "normal")
  {
    return <Notification key = {id}{...notificationsList}></Notification>;
  }
  else
  {
    return <UNotification key = {id}{...notificationsList}></UNotification>;
  }
}

export default Notifications;
