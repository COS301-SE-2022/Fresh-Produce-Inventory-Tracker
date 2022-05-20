import { MdOutlineNotifications } from 'react-icons/md';
import Link from 'next/link';
import { RiUser3Line } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { GiHamburgerMenu } from 'react-icons/gi';

/* eslint-disable-next-line */
export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  const router = useRouter();

  return (
    <header>
      <div className="flex items-center transition-all justify-between w-full h-20 shadow-md rounded-lg p-4 lg:max-w-[98%] ml-2">
        <div>
          <h1 className="text-xl font-black">
            {router.route === '/'
              ? 'Dashboard'
              : `${router.pathname
                  .replace('/', '')
                  .charAt(0)
                  .toUpperCase()}${router.pathname
                  .replace('/', '')
                  .substring(1)}`}
          </h1>
          <p className="mt-2 text-sm text-primary/70">
            {new Date().toString().split(' ').splice(1, 3).join(' ')}
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <label
            htmlFor="my-drawer-2"
            className="p-2 transition-all rounded-md cursor-pointer lg:hidden hover:bg-primary/20 bg-primary/10"
          >
            <GiHamburgerMenu className="w-full h-full cursor-pointer pointer-events-none"></GiHamburgerMenu>
          </label>

          <Link href="/notification" passHref>
            <span>
              <MdOutlineNotifications className="w-10 h-10 p-2 rounded-full cursor-pointer bg-neutral-10" />
            </span>
          </Link>

          <div className="flex items-center cursor-pointer gap-x-2">
            <Link href="/user" passHref>
              <span>
                <RiUser3Line className="w-10 h-10 p-2 rounded-full cursor-pointer bg-neutral/10" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
