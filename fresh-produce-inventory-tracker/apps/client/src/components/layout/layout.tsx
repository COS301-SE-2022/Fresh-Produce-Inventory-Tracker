/* eslint-disable-next-line */
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  MdDashboard,
  MdOutlineInventory,
  MdOutlineTrendingDown,
  MdOutlineSettingsApplications,
  MdInventory2,
} from 'react-icons/md';
import Logo from '../logo/logo';
export interface LayoutProps {
  children;
}

const Links = [
  {
    name: 'Dashboard',
    link : "/",
    icon: <MdDashboard className="text-black/60 group-active:text-white" />,
  },
  {
    name: 'Inventory',
    link: "/inventory",
    icon: (
      <MdOutlineInventory className="text-black/60 group-active:text-white" />
    ),
  },
  {
    name: 'Statistics',
    link:"/statistics",
    icon: (
      <MdOutlineTrendingDown className="text-black/60 group-active:text-white" />
    ),
  },
  {
    name: 'Settings',
    link: "/settings",
    icon: (
      <MdOutlineSettingsApplications className="text-black/60 group-active:text-white" />
    ),
  },
];

export function Layout(props: LayoutProps) {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {props.children}

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="px-4 overflow-y-auto bg-white border-2 border-solid w-80 menu text-base-content">
          <div className="flex flex-col items-center mb-5 h-fit">
            <Logo />
            <h1 className="mb-10 font-bold text-center">
              Fresh Produce Inverntory Tracker
            </h1>
          </div>
          <div>

          </div>
          {/* <!-- Sidebar content here --> */}
          {Links.map(({ name, icon, link }) => (
            <li key={name}>
              <Link
                href={link}
                passHref
              >
                <div
                  className={`flex transition-all border-opacity-0 bg-blue-100/50 mb-2 hover:bg-red-100 rounded-md  border-primary group`}
                >
                  {icon}
                  <span className="text-sm text-primary group-hover:text-primary group-active:text-white">
                    {' '}
                    {name}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Layout;
