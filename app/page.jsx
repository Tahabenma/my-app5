import Image from 'next/image';
import styles from './page.module.css';
import Scan from '@/public/Scan.webp';
import ricky from '@/public/ricky.webp';
import iss from '@/public/iss.webp';
import sex from '@/public/sex.webp';
import Link from 'next/link';



export default function Accueil() {
  return <main className={styles.main}>
    <div className={styles.mainn}>
      
      
      
     
     <Image src={Scan} alt="lol" />
     
      
       
    </div>

    <div className={styles.text}>
      "Taha Benmassoud transforms iconic fashion magazines into stunning digital masterpieces, 
      offering unparalleled access to rare collections and timeless trends. 
      Elevate your style journey with elegance at your fingertips."
    </div>
    
   
    <Link href="/scans" className={styles.scanss}>
    | O U R S C A N S |
   
    </Link>
    
    <div className={styles.taille}>
        <Image src={iss} alt="Rick image 1" />
        <Image src={sex} alt="Rick image 2" />
        <Image src={ricky} alt="Rick image 3" />
      </div>


  </main>;
}
  



