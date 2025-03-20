import styles from '@/app/magazine1/page.module.css'
import Image from "next/image"
import maison1 from '@/public/maison1.webp'
import maison2 from '@/public/maison2.webp'
import maison3 from '@/public/maison4.webp'

/**
 * @type {import(next).Metadata}
 * 
 */
export const metadata = {
    title: "Maison Margiela | Magazine Scans",
    description: "High-quality scans of Vogue's April 1995 issue,Maison Margiela, featuring iconic fashion editorials and vintage advertisements.",
};

export default function Scans() {
    return <div>
        <div className={styles.titre}>
            Maison Margiela
        </div>
        <div className={styles.text}>
            Magazine B’s Maison Margiela issue explores the brand’s mysterious and creative world.
            Known for breaking fashion rules, Margiela uses unique techniques like deconstruction and illusion.
            Even after its founder left,
            the brand’s bold spirit lives on. T
            his magazine dives into its history, design philosophy, and lasting influence.
        </div>

        <div className={styles.cube}>
            <div className={styles.tailles}>
                <Image src={maison1} alt="off white" />
                <Image src={maison2} alt="off white" />
                <Image src={maison3} alt="off white" />
            </div>
        </div>

    </div>

}






