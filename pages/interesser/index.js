import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

const Interesser = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Interesser</h1>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.gridElement} >
                    <h1>Fullstack utvikling</h1>
                    <h2>Med react eller nextjs</h2>
                    <p>For øyeblikket lærer jeg nextjs men tidligere brukt express.js som backend</p>
                </div>
                <div className={styles.gridElement}>
                    <h1>Test</h1>
                    <h2>Hallo verden!</h2>
                </div>
            </div>
        </div>
    )
}

export default Interesser
