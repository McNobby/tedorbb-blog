import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
   <div className="Mainpage">
     <h1>Teodor Berntsen Bøe</h1>
     <div className="pagePanel">
     <Link href="/interesser">
       <div className={styles.pageBtn}>
          <a>Interesser</a>
        </div>
       </Link>
     </div>
   </div>
  )
}
