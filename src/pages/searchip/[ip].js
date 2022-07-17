import Head from 'next/head';
import IPHeader from '../../components/IPHeader';
import Map from '../../components/Map';
import styles from '../../../styles/Home.module.css';

const Id = ({data}) => {

  let center = [data.location.lat, data.location.lng];

  return ( 
    <>
      <Head>
        <title>Live location of the {data.ip} IP Address</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IPHeader data={data} />
      <main>
        <Map className={styles.homeMap} center={center} zoom={12}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Marker position={center}>
                <Popup>
                  Location of searched IP Address
                </Popup>
              </Marker>
            </>
          )}
        </Map>
      </main>
    </>
  );
}

export const getServerSideProps = async (context) => {
  let ip = context.params.ip;
  const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_NCW9nrnctnbJnDD7lHK3KTdfRDjmo&ipAddress=${ip}`);
  const data = await res.json();

  return {
    props: { data }
  }
}
 
export default Id;