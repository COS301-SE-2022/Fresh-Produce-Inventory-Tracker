import styles from './index.module.css';

/* eslint-disable-next-line */
export interface LogoutProps {}
import { signOut } from "next-auth/react"
import { unstable_getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    options
  );

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export function Logout(props: LogoutProps) {
  signOut({redirect:false});
  const router = useRouter();
  setTimeout(function () {
    router.push('/login');
  }, 100);
  return(
    <div>Hello world!</div>
  )
}

export default Logout;
