import styles from '@/app/seasons/page.module.css'
import Image from 'next/image'
import ricardo from '@/public/ricardo.webp'

export default function Scans() {
  return <div className={styles.main}>


    <div className={styles.image}>
      <Image src={ricardo} alt="ricardo" />

    </div>



    <div className={styles.titre}>
      Rick Owens
    </div>


    <p className={styles.textt}>
      Rick Owens is known for his avant-garde, often dark and dystopian approach to fashion,
      blending gothic and grunge influences with high-end, luxury craftsmanship. His designs
      typically feature exaggerated proportions, raw, unfinished edges, and a strong focus on
      architectural forms. Owens often plays with contrasting textures, combining sleek,
      sculptural silhouettes with distressed or deconstructed elements. His color palette
      leans heavily toward monochromatic shades like black, gray, and white, with occasional
      use of earth tones or metallics. The overall aesthetic reflects a sense of rebellion, mystique, and non-conformity,
      which appeals to those who see fashion as a form of self-expression rather than just a trend.
    </p>

    <div className={styles.textt}>
      Owens' collections are also known for challenging traditional gender norms and expectations.
      His pieces are often unisex, blending masculinity and femininity to create a fluid, gender-neutral wardrobe.
      He frequently incorporates elements of fetish and BDSM culture, such as leather, lacing, and bondage-inspired
      details, adding a raw, edgy undertone to his collections. Despite his avant-garde approach, Owens maintains a
      high level of craftsmanship, using luxurious materials like cashmere, silk, and fine leathers. His work is not
      just about clothing but about creating an experience or a statement,
      often forcing viewers to question societal norms and their perceptions of beauty and fashion.
    </div>

  </div>





}