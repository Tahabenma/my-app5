import Image from 'next/image';
import rick from '@/public/rick.png';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
    return <header className={styles.header}>
     <Link href= "/">
     <Image  src={rick} alt="logo de rick owens .js" />
     </Link>
     
     
     <div className={styles.menu}>
  <Link href="/seasons" className={styles.menuItem}>
   S E A S O N S
   </Link>
   <div className={styles.separator}>
    |
   </div>
   
    <  Link href="/scans" className={styles.menuItem}>
    S C A N S
   </Link>
      </div>
      
      </header>
}
 
 












  

/*<Image src={logo} alt="Logo de React.js" />*/