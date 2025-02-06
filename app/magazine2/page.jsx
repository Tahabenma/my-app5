import styles from '@/app/magazine1/page.module.css'
import Image from "next/image"
import rei1 from '@/public/rei1.webp'
import rei2 from '@/public/rei2.webp'
import rei3 from '@/public/rei3.webp'


export default function Scans() {
  return <div>

    <div className={styles.titre}>
      Rei kawakubo
    </div>


    <div className={styles.text}>
      To be nobody but yourself in a world that is doing its best,
      day and night, to make you like everybody else means to fight
      the hardest battle any human being can fight—and never stop fighting.
    </div>

    <div className={styles.cube}>
      <div className={styles.tailles}>
        <Image src={rei1} alt="off white" />
        <Image src={rei2} alt="off white" />
        <Image src={rei3} alt="off white" />
      </div>
    </div>

  </div>

}






