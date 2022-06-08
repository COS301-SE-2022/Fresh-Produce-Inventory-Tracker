import styles from './check.module.css';
import { MdOutlineNotifications } from 'react-icons/md';

/* eslint-disable-next-line */
export interface CheckProps {
  data:[]
}

export function Check(props: CheckProps) {
  //console.log(props.data.length);
  if(props.data.length > 0)
  {
    return <MdOutlineNotifications className="w-10 h-10 p-2 rounded-full cursor-pointer bg-red-600"/>
  }
  else
  {
    return <MdOutlineNotifications className="w-10 h-10 p-2 rounded-full cursor-pointer bg-blue-200"/>
  }
  
}

export default Check;
