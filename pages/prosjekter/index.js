import React from "react";
import styles from "../../styles/Home.module.scss";
import { motion } from "framer-motion";
import ArticleThumbnail from "../../components/articles/ArticleThumbnails";

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

const Prosjekter = () => {
    return (
        <motion.div
            className={styles.container}
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <div className={styles.title}>
                <h1>Prosjekter</h1>
            </div>

            <ArticleThumbnail site="prosjekter" />
        </motion.div>
    );
};

export default Prosjekter;
