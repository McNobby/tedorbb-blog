import styles from "../styles/Home.module.scss";
import React, { useState } from "react";
import BackButton from "../backButton";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../lib/FirebaseConf";

const ImageFromFirebase = ({ image }) => {
    const [imagePath, setImagePath] = useState("");

    if (image) {
        console.log(image);
        const storageRef = ref(storage, image);
        getDownloadURL(storageRef).then((url) => {
            console.log(url);
            setImagePath(url);
        });
    }

    return <img src={imagePath} alt="" />;
};

const ArticleComp = ({ info }) => {
    const { title, body, thumbnail } = info;

    const bodyEl = body.map((e) => {
        return (
            <div key={e.text} className={styles.paragraph}>
                <p>{e.text}</p>
                <ImageFromFirebase image={e.image} />
            </div>
        );
    });

    return (
        <div className={styles.article}>
            <div className={styles.inlineWrap}>
                <BackButton />
                <h1>{title}</h1>
            </div>
            <h2>{thumbnail}</h2>
            {bodyEl}
        </div>
    );
};

export default ArticleComp;
