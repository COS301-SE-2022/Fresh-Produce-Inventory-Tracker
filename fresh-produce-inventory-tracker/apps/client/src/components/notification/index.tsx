/* eslint-disable-next-line */
export interface NotificationProps {
  urgency:string,
  number:string,
  message:string
}

export function Notification(props: NotificationProps) {
  if(props.urgency != "Urgent")
  {
    return (
      <div className="flex items-center w-full h-10 shadow-md rounded-lg p-4 lg:max-w-[95%] ml-5 mt-5 bg-blue-200">
        <h1 className="text-xl font-black">
          #{props.number}
        </h1>
        <div className="ml-2">
          <h2>{props.message}</h2>
        </div>
      </div>
    );
  }
  else
  {
    return (
      <div className="flex items-center w-full h-10 shadow-md rounded-lg p-4 lg:max-w-[95%] ml-5 mt-5 bg-red-200">
        <h1 className="text-xl font-black">
          #{props.number}
        </h1>
        <div className="ml-2">
          <h2>{props.message}</h2>
        </div>
      </div>
    );
  }
}

export default Notification;
