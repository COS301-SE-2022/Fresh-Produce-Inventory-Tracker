/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  return (
    <div className="grid w-screen h-screen place-content-center bg-base-300/40">
      <form
        onSubmit={() => {
          console.log('submit');
        }}
        className="max-w-xs p-8 bg-white rounded-md shadow-md"
      >
        <div>
          <div className="flex flex-col items-center">
            <img src="/EPI-USE Logo.PNG" className="w-24" alt="logo" />
          </div>
          <div className="mt-6">
            <h1 className="text-lg leadin-7">
              Welcome to the Fresh Produce Inventory Tracker
            </h1>
            <h2 className="mt-2 text-sm text-primary/80">
              Please sing-in to your account and start the adventure.
            </h2>
          </div>
        </div>

        <div className="flex flex-col mt-6 gap-y-4">
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-xs font-light opacity-80">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full rounded focus:outline-none input ring-1 ring-primary/10 focus:ring-secondary/70 input-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-xs font-light opacity-80 ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full rounded input focus:ring-secondary/70 focus:outline-none ring-1 ring-primary/10 input-sm"
            />
          </div>
        </div>

        <div className="mt-6">
          <input
            type="submit"
            value="Sing in"
            className="w-full px-1 py-2 font-light text-white rounded-md cursor-pointer bg-primary hover:bg-primary-focus"
          />
          <p className="mt-4 text-sm text-center">
            {"Don't"} have an account yet?
            <Link href="/singup" passHref>
              <span className="cursor-pointer focus:text-secondary-focus text-secondary">
                {' '}
                Singup now!
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
