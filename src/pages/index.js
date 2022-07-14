import Head from 'next/head';
import Map from '../components/Map';
import IPHeader from '../components/IPHeader';
import styles from '../../styles/Home.module.css';

export default function Home({data}) {

  const DEFAULT_CENTER = [data.lat, data.lon];

  return (
    <>
      <Head>
      <title>IP Location Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IPHeader data={data}/>
      <main>
        <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  Location of IP Address
                </Popup>
              </Marker>
            </>
          )}
        </Map>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://ip-api.com/json/')
  const data = await res.json()
  return { props: { data } }
}
