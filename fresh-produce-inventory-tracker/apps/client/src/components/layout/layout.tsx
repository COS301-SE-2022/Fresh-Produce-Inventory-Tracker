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
    icon: <MdDashboard className="text-black/60 group-active:text-white" />,
  },
  {
    name: 'Inventory',
    icon: (
      <MdOutlineInventory className="text-black/60 group-active:text-white" />
    ),
  },
  {
    name: 'Statistics',
    icon: (
      <MdOutlineTrendingDown className="text-black/60 group-active:text-white" />
    ),
  },
  {
    name: 'Settings',
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
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="p-4 overflow-y-auto bg-white w-80 menu text-base-content">
          <div className="flex items-center mt-4 mb-20 h-fit">
            <Logo />
          </div>
          {/* <!-- Sidebar content here --> */}
          {Links.map(({ name, icon }) => (
            <li key={name}>
              <Link
                href={`/${name === 'Dashboard' ? '/' : name.toLowerCase()}`}
                passHref
              >
                <div
                  className={`flex transition-all border-opacity-0 hover:border-opacity-100 border-primary group`}
                >
                  {icon}
                  <span className="font-semibold text-primary group-hover:text-secondary group-active:text-white">
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
