import styles from '@/app/scans/page.module.css' 
import Image from 'next/image'
import real from '@/public/real.jpg'

export default function Scans () {
    return <div className={styles.page}>
  <p>
  At Taha, we curate the most exclusive and avant-garde scans of rare, unpublished fashion magazines, 
  capturing the essence of style through the decades. 
  Indulge in a world where timeless elegance meets contemporary allure.
  </p>
  
  <div className={styles.image}>
        <Image src={real} alt="off white" />
       
  </div>

  </div>
  
}