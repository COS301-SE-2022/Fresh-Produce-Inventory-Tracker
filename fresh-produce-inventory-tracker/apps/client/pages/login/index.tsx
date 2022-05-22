/* eslint-disable @next/next/no-img-element */
import { BiShow, BiHide } from 'react-icons/bi';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
/* eslint-disable-next-line */
export interface LoginProps {}
interface Login {
  email: string;
  password: string;
}

export function Login(props: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data: Login) => {
    console.log(data);
  };

  return (



    
    <div className="grid w-screen h-full min-h-screen p-2 place-content-center bg-base-300/40">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-full p-8 transition-all bg-white rounded-md shadow-md md:max-w-sm min-w-fit"
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
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              id="email"
              type="text"
              name="email"
              className={`w-full ${
                errors.email ? 'ring-error' : 'ring-primary/20'
              } mt-1 font-light rounded focus:ring-primary focus:outline-none input ring-1  input-sm`}
            />
            <div className="mt-2 text-xs font-light text-error">
              {errors?.email?.type === 'pattern' ? (
                <p>Email address is invalid.</p>
              ) : errors?.email?.type === 'required' ? (
                <p>Email address is required.</p>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="relative flex flex-col">
            <label
              htmlFor="password"
              className="text-xs font-light opacity-80 "
            >
              Password
            </label>
            <input
              {...register('password', { required: true })}
              type={`${showPassword ? 'text' : 'password'}`}
              id="password"
              name="password"
              className={`w-full mt-1 font-light rounded input ${
                errors?.password?.type === 'required'
                  ? 'ring-error'
                  : 'ring-primary/20'
              }  focus:outline-none ring-1 focus:ring-primary input-sm`}
            />
            <div className="mt-2 text-xs font-light text-error">
              {errors?.password?.type === 'required' && (
                <p>Password field is required.</p>
              )}
            </div>
            <div className="absolute cursor-pointer right-2 bottom-4">
              <input
                defaultChecked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                type="checkbox"
                name="showPassword"
                id="showPassword"
                className="absolute inset-0 appearance-none peer focus:pointer-events-auto"
              />
              {showPassword ? <BiHide /> : <BiShow />}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <input
            type="submit"
            value="Sign in"
            className="w-full px-1 py-2 font-light text-white rounded-md cursor-pointer bg-primary hover:bg-primary-focus"
          />
          <p className="mt-4 text-sm text-center">
            {"Don't"} have an account yet?
            <Link href="/signup" passHref>
              <span className="cursor-pointer text-secondary">
                {' '}
                Signup now!
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
