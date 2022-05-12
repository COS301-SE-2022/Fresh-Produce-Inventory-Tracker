import { MdOutlineNotifications } from 'react-icons/md';
import Link from 'next/link';
import { RiUser3Line } from 'react-icons/ri';
import { useRouter } from 'next/router';
/* eslint-disable-next-line */
export interface NotificationProps {}

export function Notification(props: NotificationProps) {

  return (
    <div className="flex items-center transition-all justify-between w-full h-10 shadow-md rounded-lg p-4 lg:max-w-[95%] ml-5 mt-5 bg-red-200">
      <h1 className="text-xl font-black">
        
      </h1>
      <div className="flex gap-x-4">
        
      </div>
    </div>
  );
}

export default Notification;
