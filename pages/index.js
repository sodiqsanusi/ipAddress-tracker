import Head from 'next/head';
import IPHeader from '../components/IPHeader';
import IPMainMap from '../components/IPMainMap';

export default function Home() {

  let data = {
    query: '192.121.202.112',
    city: 'Lagos',
    countryCode: 'NG',
    org: 'Airtel NG',
    timezone: 'Africa/Lagos'
  }

  return (
    <>
      <Head>
        <title>IP Location Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IPHeader data={data}/>
      {data && <IPMainMap data={data}/>}
    </>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch('http://ip-api.com/json/')
//   const data = await res.json()
//   return { props: { data } }
// }
