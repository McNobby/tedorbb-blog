import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

import Link from "next/link";
import getCollection from "../lib/getCollection";
import { collection } from "firebase/firestore";

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
            <Link href={`/${site}/${e.id}`} key={e.id}>
                <div className={styles.gridElement}>
                    <h1>{e.data.title}</h1>
                    <p>{e.data.thumbnail}</p>
                </div>
            </Link>
        );
    });

    return <div className={styles.gridContainer}>{list}</div>;
};

export default ArticleThumbnail;
