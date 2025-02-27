import Image from 'next/image';
import rick from '@/public/rick.png';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return <header className={styles.header}>
    <Link href="/">
      <Image src={rick} alt="logo de rick owens .js" />
    </Link>


    <div className={styles.menu}>
      <Link href="/seasons" className={styles.menuItem}>
        SEASONS
      </Link>
      <div className={styles.separator}>
        |
      </div>
      <  Link href="/scans" className={styles.menuItem}>
        SCANS
      </Link>
      <div className={styles.separator}>
        |
      </div>
      <  Link href="/contact" className={styles.menuItem}>
        CONTACTS
      </Link>
    </div>


  </header>
}
















