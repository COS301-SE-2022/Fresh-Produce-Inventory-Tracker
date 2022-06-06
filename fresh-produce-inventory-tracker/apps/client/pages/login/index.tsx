/* eslint-disable @next/next/no-img-element */
import { BiShow, BiHide } from 'react-icons/bi';
import { MdOutlineDangerous, MdOutlineCheckCircle } from 'react-icons/md';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import { CgSpinner } from 'react-icons/cg';
/* eslint-disable-next-line */
export interface LoginProps {}
interface Login {
  email: string;
  password: string;
}

enum Errors {
  loginError = 'Invalid email and/or password',
  serverError = 'Internal server error',
}

enum Success {
  login = 'Success, correct credentials',
}

export function Login(props: LoginProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data: Login) => {
    setLoading(true);
    setMessage('');
    setError('');
    fetch('http://localhost:3333/api/authentication/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode >= 500) setError(Errors.serverError);
        else if (data.statusCode >= 401) setError(Errors.loginError);
        else setMessage(Success.login);
      })
      .catch((error) => {
        setError(error.serverError);
      });
    setLoading(false);
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
              role="password"
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

        {error.length > 0 && (
          <Transition
            as={Fragment}
            appear={true}
            show={true}
            enter="transform transition duration-[200ms]"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95 "
          >
            <div
              role="error-alert"
              className="mt-4 text-sm rounded-md shadow-lg alert bg-error/20"
            >
              <div>
                <MdOutlineDangerous className="w-5 h-5 text-rose-700" />
                <span className="font-medium text-rose-700">{error}</span>
              </div>
            </div>
          </Transition>
        )}

        {message && (
          <Transition
            as={Fragment}
            appear={true}
            show={true}
            enter="transform transition duration-[200ms]"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95 "
          >
            <div className="mt-2 text-sm rounded-md shadow-lg alert bg-success/20">
              <div>
                <MdOutlineCheckCircle className="w-5 h-5 text-lime-700" />
                <span className="font-medium text-lime-800">{message}</span>
              </div>
            </div>
          </Transition>
        )}

        <div className="flex flex-col items-center mt-6">
          <input
            disabled={loading}
            type="submit"
            value="Sign in"
            className="w-full px-1 py-2 font-light text-white rounded-md cursor-pointer disabled:bg-primary/80 bg-primary hover:bg-primary-focus"
          />
          {loading && (
            <CgSpinner className="w-5 h-5 mt-3 text-secondary animate-spin" />
          )}
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
