import Trends from '../src/components/trends';
import { options } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';

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

export function Index() {
  return (
    <div>
      <Trends></Trends>
    </div>
  );
}

export default Index;
