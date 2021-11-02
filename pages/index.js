import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PagePanel from '../components/pagePanel'


export default function Home() {
  return (
   <div className="Mainpage">
     <h1>Teodor Berntsen Bøe</h1>
     
      <PagePanel />
     
   </div>
  )
}
