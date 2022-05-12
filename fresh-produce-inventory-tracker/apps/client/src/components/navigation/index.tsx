import { MdOutlineNotifications } from 'react-icons/md';
import Link from 'next/link';
import { RiUser3Line } from 'react-icons/ri';
import { useRouter } from 'next/router';
/* eslint-disable-next-line */
export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  const router = useRouter();

  return (
    <div className="flex items-center transition-all justify-between w-full h-20 shadow-md rounded-lg p-4 lg:max-w-[99%] ml-2">
      <h1 className="text-xl font-black">
        {router.route === '/'
          ? 'Dashboard'
          : `${router.pathname
              .replace('/', '')
              .charAt(0)
              .toUpperCase()}${router.pathname.replace('/', '').substring(1)}`}
      </h1>
      <div className="flex gap-x-4">
        <a href="notifications">
          <MdOutlineNotifications className="w-10 h-10 p-2 rounded-full cursor-pointer bg-neutral-10"/>
        </a>
        <div className="flex items-center cursor-pointer gap-x-2">
          <a href="/user">
            <RiUser3Line className="w-10 h-10 p-2 rounded-full bg-neutral/10" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
