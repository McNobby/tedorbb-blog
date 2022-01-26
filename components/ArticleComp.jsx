import styles from "../styles/Home.module.scss";
import React from "react";
import BackButton from "./backButton";

const ArticleComp = ({ info }) => {
    const { title, body, thumbnail } = info;

    const bodyEl = body.map((e) => {
        return <p key={e}>{e}</p>;
    });

    return (
        <div className={styles.article}>
            <div className={styles.inlineWrap}>
                <BackButton/>
                <h1>{title}</h1>
            </div>
            <h2>{thumbnail}</h2>
            {bodyEl}
        </div>
    );
};

export default ArticleComp;
