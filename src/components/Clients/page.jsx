import React from 'react'
import {clients} from '../../constant/page'
import Image from "next/image";
import styles from '@/styles/page';
const Clients = () => {
  return (
    <section  className={`${styles.flexCenter} my-4`}>
   <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map(((client)=>(
           <div key={client.id}  className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
            <Image src={client.logo}  alt='clints'  className="sm:w-[192px] w-[100px] object-contain"/>
           </div>
        )))}
    </div>
    </section>
  )
}

export default Clients