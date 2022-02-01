import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import getCollection from "../../lib/getCollection";

const variants = {
    hidden: { y: 100 },
    show: {
        y: 0,
        transition: {
            staggerChildren: 1,
        },
    },
    exit: {
        opacity: 0,
        scale: 1.3,
        transition: {
            duration: 0.2,
        },
    },
};

const item = {
    hidden: {
        y: 100,
    },
    show: {
        y: 0,
        transition: {
            type: "spring",
            mass: 0.5,
            damping: 9.2,
        },
    },
};

const ArticleThumbnail = ({ site }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getCollections();
    }, []);

    const getCollections = async () => {
        const query = await getCollection(site);
        setData(query);
    };

    const list = data.map((e) => {
        return (
            <motion.div variants={item} key={e.id}>
                <Link href={`/${site}/${e.id}`}>
                    <div className={styles.gridElement}>
                        <h1>{e.data.title}</h1>
                        <p>{e.data.thumbnail}</p>
                    </div>
                </Link>
            </motion.div>
        );
    });

    return (
        <div
            className={styles.gridContainer}
            variants={variants}
            inital="hidden"
            animate="show"
            exit="exit"
        >
            {list}
        </div>
    );
};

export default ArticleThumbnail;
