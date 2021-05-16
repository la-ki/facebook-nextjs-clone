import Head from "next/head";
import Header from "../components/Header";
import { getSession } from "next-auth/client";
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>

      {/*HEADER*/}
      <Header />

      <main className="flex">
        {/*SIDEBAR*/}
        <Sidebar />
        {/*FEED*/}
        {/*WIDGETS*/}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
