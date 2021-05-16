import Head from 'next/head'
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      {/*HEADER*/}
      <Header />

      <main>
        {/*SIDEBAR*/}
        {/*FEED*/}
        {/*WIDGETS*/}
      </main>

    </div>
  )
}
