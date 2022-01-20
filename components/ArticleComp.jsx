import styles from "../styles/Home.module.scss";
import React from "react";

const ArticleComp = ({ info }) => {
    const { title, body } = info;

    const bodyEl = body.map((e) => {
        return <p key={e}>{e}</p>;
    });

    return (
        <div className={styles.article}>
            <h1>{title}</h1>
            {bodyEl}
        </div>
    );
};

export default ArticleComp;
