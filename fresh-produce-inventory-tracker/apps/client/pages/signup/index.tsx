/* eslint-disable @next/next/no-img-element */
import { useForm } from 'react-hook-form';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface SignupProps {}
interface Signup {
  firstName: string;
  surname: string;
  email: string;
  password: string;
  'confirm-password': string;
}

const api_url = 'http://localhost:3333/api/authentication/signup';

export function Signup(props: SignupProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = async (data: Signup) => {
    const form = new FormData();
    form.append('name',data.firstName);
    form.append('email', data.email);
    form.append('password', data.password);
    const Form = 'email=' + data.email + '&password=' + data.password;
    console.log(Form);

    const response = await fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: Form,
    });

    if (response.status == 201) {
      window.location.replace('../login');
      return;
    }

    if (response.status == 500) {
      alert('User is already in the system, please try again!');
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
            <label htmlFor="name" className="text-xs font-light opacity-80 ">
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
            <label htmlFor="surname" className="text-xs font-light opacity-80 ">
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
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-xs font-light opacity-80 "
            >
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
            <label
              htmlFor="password"
              className="text-xs font-light opacity-80 "
            >
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

        <div className="mt-6">
          <input
            type="submit"
            value="Signup"
            className="w-full px-1 py-2 font-light text-white rounded-md cursor-pointer bg-primary hover:bg-primary-focus"
          />
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
