/* eslint-disable @next/next/no-img-element */
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { MdOutlineDangerous } from 'react-icons/md';
import { CgSpinner } from 'react-icons/cg';
/* eslint-disable-next-line */
export interface SignupProps {}
interface Signup {
  name: string;
  surname: string;
  email: string;
  password: string;
  'confirm-password': string;
}

const api_url = 'http://localhost:3333/api/authentication/signup';

export function Signup(props: SignupProps) {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = async (data: Signup) => {
    setError('');
    if (data.password !== data['confirm-password']) {
      setError("Passwords don't match");
      return;
    }
    const Form = `email=${data.email}&password=${data.password}&name=${data.name}&surname=${data.surname}`;

    setLoading(true);
    const response = await fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: Form,
    });
    setLoading(false);
    if (response.status == 201) {
      window.location.replace('../login');
      return;
    }

    if (response.status == 409) {
      setError('Email already exists');
      return;
    }

    if (response.status == 500) {
      setError('Internal server error, please try again later');
    }
  };

  return (
    <div className="grid w-screen h-full min-h-screen p-2 place-content-center bg-base-300/40">
      <form
        onSubmit={handleSubmit(handleSignup)}
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
              Please create an account to start your adventure.
            </h2>
          </div>
        </div>

        <div className="flex flex-col mt-6 gap-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xs">
              Name
            </label>
            <input
              {...register('name', { required: true })}
              type="text"
              id="name"
              name="name"
              className={`w-full mt-1 font-light rounded input ${
                errors?.name?.type === 'required'
                  ? 'ring-error'
                  : 'ring-primary/20'
              }  focus:outline-none ring-1 focus:ring-primary input-sm`}
            />
            <div className="mt-2 text-xs font-light text-error">
              {errors?.name?.type === 'required' && (
                <p>Name field is required.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="surname" className="text-xs ">
              Surname
            </label>
            <input
              {...register('surname', { required: true })}
              type="text"
              id="surname"
              name="surname"
              className={`w-full mt-1 font-light rounded input ${
                errors?.surname?.type === 'required'
                  ? 'ring-error'
                  : 'ring-primary/20'
              }  focus:outline-none ring-1 focus:ring-primary input-sm`}
            />
            <div className="mt-2 text-xs font-light text-error">
              {errors?.surname?.type === 'required' && (
                <p>Surname field is required.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="email" className="text-xs">
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
          <div className="flex flex-col">
            <label htmlFor="password" className="text-xs ">
              Password
            </label>
            <input
              {...register('password', { required: true })}
              type="password"
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
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-xs ">
              Confirm Password
            </label>
            <input
              {...register('confirm-password', { required: true })}
              type="password"
              id="confirm-password"
              name="confirm-password"
              className={`w-full mt-1 font-light rounded input ${
                errors['confirm-password']?.type === 'required'
                  ? 'ring-error'
                  : 'ring-primary/20'
              }  focus:outline-none ring-1 focus:ring-primary input-sm`}
            />
            <div className="mt-2 text-xs font-light text-error">
              {errors['confirm-password']?.type === 'required' && (
                <p>Confirm Password field is required.</p>
              )}
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
              tabIndex={0}
              className="mt-4 text-sm rounded-md shadow-lg alert bg-error/20"
            >
              <div>
                <MdOutlineDangerous className="w-5 h-5 text-rose-700" />
                <span role="error-alert" className="font-medium text-rose-700">
                  {error}
                </span>
              </div>
            </div>
          </Transition>
        )}

        <div className="mt-6">
          <button
            disabled={loading}
            type="submit"
            value="Signup"
            className="flex items-center justify-center w-full px-1 py-2 font-light text-white rounded-md cursor-pointer disabled:bg-primary/80 bg-primary hover:bg-primary-focus"
          >
            {loading ? (
              <CgSpinner className="w-5 h-5 mt-3 text-white animate-spin top-2" />
            ) : (
              'Sign in'
            )}
          </button>
          <p className="mt-4 text-sm text-center">
            Already have an account with us?
            <Link href="/login" passHref>
              <span className="cursor-pointer text-secondary">
                {' '}
                Signin now!
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
