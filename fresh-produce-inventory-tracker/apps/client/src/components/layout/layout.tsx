/* eslint-disable-next-line */
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import {
  MdDashboard,
  MdOutlineInventory,
  MdOutlineTrendingDown,
  MdOutlineSettingsApplications,
  MdInventory2,
  MdInfo
} from 'react-icons/md';
import Logo from '../logo/logo';
import Navigation from '../navigation';
export interface LayoutProps {
  children;
}

const Links = [
  {
    name: 'Dashboard',
    link: '/',
    icon: <MdDashboard className="text-black/60 group-active:text-black" />,
  },
  {
    name: 'Inventory',
    link: '/inventory',
    icon: (
      <MdOutlineInventory className="text-black/60 group-active:text-black" />
    ),
  },
  {
    name: 'Trends',
    link: '/trends',
    icon: (
      <MdOutlineTrendingDown className="text-black/60 group-active:text-black" />
    ),
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: (
      <MdOutlineSettingsApplications className="text-black/60 group-active:text-white" />
    ),
  },
  {
    name: 'About',
    link: '/about',
    icon: (
      <MdInfo className="text-black/60 group-active:text-white" />
    ),
  },
];

export function Layout(props: LayoutProps) {
  const router = useRouter();
  return (
    <>
      {router.pathname.includes('login') ||
      router.pathname.includes('signup') ? (
        <main className="h-full min-h-screen">
          <div>{props.children}</div>
        </main>
      ) : (
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="px-2 py-2 drawer-content">
            <Navigation />
            <main className="h-full min-h-screen">{props.children}</main>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

            <ul className="px-4 overflow-y-auto bg-white border-2 border-solid w-80 menu text-base-content">
              <Link href="/" passHref>
                <div className="flex flex-col items-center mb-5 h-fit">
                  <Logo />
                  <h1 className="mb-10 font-bold text-center">
                    Fresh Produce Inverntory Tracker
                  </h1>
                </div>
              </Link>

              {/* <!-- Sidebar content here --> */}
              {Links.map(({ name, icon, link }) => (
                <li key={name}>
                  <Link href={link} passHref>
                    <div
                      className={`flex transition-all border-opacity-0 bg-blue-100/50 mb-2 hover:bg-red-100 rounded-md  border-primary group`}
                    >
                      {icon}
                      <span className="text-sm text-primary group-hover:text-primary group-active:text-black">
                        {name}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
