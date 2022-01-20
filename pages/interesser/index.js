import React from "react";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import ArticleThumbnail from "../../components/ArticleThumbnails";

const variants = {
    hidden: {
        opacity: 0,
        x: 1000,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
            type: "spring",
        },
    },
    exit: {
        opacity: 0,
        x: 500,
        transition: {
            duration: 1,
        },
    },
};

const Interesser = () => {
    return (
        <motion.div
            className={styles.container}
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <div className={styles.title}>
                <h1>Interesser</h1>
            </div>
            <ArticleThumbnail site="interesser" />
        </motion.div>
    );
};

export default Interesser;
