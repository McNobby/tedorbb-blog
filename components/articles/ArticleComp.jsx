import styles from "../../styles/Home.module.scss";
import React, { useState } from "react";
import BackButton from "../backButton";

import ShowImage from "./ShowImage";

const ArticleComp = ({ info }) => {
    const { title, body, thumbnail, thumbnailImg } = info;

    const bodyEl = body.map((e) => {
        return (
            <div key={e.text} className={styles.paragraph}>
                <p>{e.text}</p>
                <ShowImage image={e.image} alt={""} />
            </div>
        );
    });

    return (
        <div className={styles.article}>
            <div className={styles.inlineWrap}>
                <BackButton />
                <h1>{title}</h1>
            </div>
            <ShowImage image={thumbnailImg} />
            <h2>{thumbnail}</h2>
            {bodyEl}
        </div>
    );
};

export default ArticleComp;
