import styles from './IPHeader.module.css';
import Image from 'next/image';
import ArrowIcon from '../../public/images/icon-arrow.svg'
import { useState } from 'react';


const IPHeader = ({data}) => {

  let [value, setValue] = useState('');
  let handleSubmit = (e) => {
    e.preventDefault();
    let isItAnIP = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value)
    if(!isItAnIP) return;
    
  }



  return ( 
    <header className={styles.header}>
      <h1>IP Address Tracker</h1>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <input type = "search"
         placeholder= 'Search for any IP address'
         value= {value}
         onChange= {(e) => setValue(e.target.value)}
         autoComplete= 'off'
        />
        <button><Image src={ArrowIcon} alt='Click to get mapped location of search query'/></button>
      </form>
      <ul className={styles.list}>
        <li>
          <h2>IP ADDRESS</h2>
          <p>{data.query}</p>
        </li>
        <li>
          <h2>LOCATION</h2>
          <p>{data.city}, {data.countryCode}</p>
        </li>
        <li>
          <h2>TIMEZONE</h2>
          <p>{data.timezone}</p>
        </li>
        <li>
          <h2>ISP</h2>
          <p>{data.org}</p>
        </li>
      </ul>
    </header>
  );
}
 
export default IPHeader;