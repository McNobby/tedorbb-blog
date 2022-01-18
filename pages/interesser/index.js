import React from 'react'
import styles from '../../styles/Home.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

const variants = {
    hidden:{
        opacity: 0,
        x: 1000,
    },
    show: {
        x: 0, 
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
            type: "spring"
        }
    },
    exit: {
        opacity: 0,
        x: 500,
        transition:{
            duration: 1
        }
    }
}

const Interesser = () => {
    return (
        <motion.div className={styles.container}
        variants={variants}
        initial="hidden"
        animate="show"
        exit="exit"
        >
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
        </motion.div>
    )
}

export default Interesser
