/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable-next-line */
export interface NotificationsProps {}

import { notifications } from "../data/data.json";

import  Notification  from "../../src/components/notification"; 
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
            <Notification key = {notificationsList.id}{...notificationsList} urgency={notificationsList.urgency} number={notificationsList.id} message={notificationsList.message}></Notification>
          ))}
    </div>
  );
}

export default Notifications;
