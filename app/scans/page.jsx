import styles from '@/app/scans/page.module.css'
import Image from 'next/image'
import reihp from '@/public/reihp.webp'
import Link from 'next/link'
import maisonhp from '@/public/maisonhp.webp'

export default function Scans() {
      return <div className={styles.page}>
            <p>
                  At Taha, we curate the most exclusive and avant-garde scans of rare, unpublished fashion magazines,
                  capturing the essence of style through the decades.
                  Indulge in a world where timeless elegance meets contemporary allure.
            </p>


            <div className={styles.image}>
                  <Link href="/magazine1" className={styles.image}>
                        <Image src={maisonhp} alt="off white" />

                  </Link>

                  <Link href="/magazine2" className={styles.image}>

                        <Image src={reihp} alt="off white" />
                  </Link>
            </div>

      </div>

}