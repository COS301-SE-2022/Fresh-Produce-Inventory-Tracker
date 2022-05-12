/* eslint-disable-next-line */
export interface NotificationsProps {}

import { notifications } from "../data/data.json";

import  Notification  from "../../src/components/notification"; 

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
          <Notification key = {notificationsList.id}{...notificationsList}>notificationsList.id</Notification>
        ))}
    </div>
  );
}

export default Notifications;
