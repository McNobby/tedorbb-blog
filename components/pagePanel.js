import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const PagePanel = () => {
    return (
        <div className="pagePanel">

        <Link href="/interesser">
          <div className={styles.pageBtn}>
            <Image src="/heart.svg" width={50} height={50} />
             <a>Interesser</a>
           </div>
          </Link>
   
          <Link href="/prosjekter">
          <div className={styles.pageBtn}>
            <Image src="/folder.svg" width={50} height={50} />
             <a>Prosjekter</a>
           </div>
          </Link>
      
        </div>
    )
}

export default PagePanel
