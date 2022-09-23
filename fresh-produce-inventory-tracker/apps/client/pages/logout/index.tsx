import styles from './index.module.css';

/* eslint-disable-next-line */
export interface LogoutProps {}
import { signOut } from "next-auth/react"
import { unstable_getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]';

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
  signOut({redirect: false, callbackUrl: "/"});
}

export default Logout;
