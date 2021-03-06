import Head from 'next/head';
import {useRouter} from 'next/router';
import Map from '../components/Map';
import IPHeader from '../components/IPHeader';
import styles from '../../styles/Home.module.css';
import useSWR from 'swr';
import Loading from '../components/Loading';
// import { useContext } from 'react';
// import {GlobalContext} from '../../GlobalContext';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  let router = useRouter();
  const {data, error} = useSWR('https://geo.ipify.org/api/v2/country,city?apiKey=at_NCW9nrnctnbJnDD7lHK3KTdfRDjmo', fetcher);
  if(error){
    router.push('/404');
  }
  let defaultCenter;
  if(data){
    defaultCenter = [data.location.lat, data.location.lng];
  }
  

  return (
    <>
      <Head>
      <title>IP Location Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IPHeader data={data}/>
      {!data && <Loading />}
      {data && (
        <main>
        <Map className={styles.homeMap} center={defaultCenter} zoom={12}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Marker position={defaultCenter}>
                <Popup>
                  Location of your IP Address
                </Popup>
              </Marker>
            </>
          )}
        </Map>
        </main>
      )}
      
    </>
  )
}