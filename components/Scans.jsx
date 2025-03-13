import styles from './Scans.module.css';
import Image from 'next/image';
import ricky from '@/public/ricky.webp';
import iss from '@/public/iss.webp';
import sex from '@/public/sex.webp';


/**
 * @type {import(next).Metadata}
 * 
 */
export const metadata = {
   title: "Magazine Scans",
   description: "website presenting different scans from multiple vintage magazines",
};


export default function Scans() {
   return < scans className={styles.scans}>


      <a href="*******" target="_blank" className={styles.textt}> | S C A N S |</a>
      <div className={styles.taille}>
         <Image src={iss} alt="Rick image 1" />
         <Image src={sex} alt="Rick image 2" />
         <Image src={ricky} alt="Rick image 3" />
      </div>

   </scans>
}