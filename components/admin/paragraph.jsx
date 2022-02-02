import styles from "../../styles/Home.module.scss";
import React, { useRef, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../../lib/FirebaseConf";

const Paragraph = ({ id }) => {
    const image = useRef();
    const imageName = uuidv4();

    const storageRef = ref(storage, `images/${imageName}`);

    const [imgUrl, setImgUrl] = useState("");

    const uploadImage = () => {
        uploadBytes(storageRef, image.current.files[0]).then((snapshot) => {
            console.log(`uploaded image ${imageName}`);
            let localBody = JSON.parse(sessionStorage.getItem("body"));
            if (!localBody) {
                localBody = [];
            }
            localBody[id - 1] = {
                ...localBody[id - 1],
                image: `images/${imageName}`,
            };
            sessionStorage.setItem("body", JSON.stringify(localBody));
            getDownloadURL(snapshot.metadata.ref).then((url) => {
                setImgUrl(url);
            });
        });
    };

    const keyUp = (e) => {
        let localBody = JSON.parse(sessionStorage.getItem("body"));
        if (!localBody) {
            localBody = [];
        }
        localBody[id - 1] = {
            ...localBody[id - 1],
            text: e.target.value,
        };
        sessionStorage.setItem("body", JSON.stringify(localBody));
    };

    return (
        <div className={styles.paragraph}>
            <textarea
                name="paragraph"
                onKeyUp={keyUp}
                placeholder="Write new paragraph"
            ></textarea>
            <input
                type="file"
                id="file"
                accept="image/png, image/jpeg"
                onChange={uploadImage}
                ref={image}
            />
            <img src={imgUrl} alt="" />
        </div>
    );
};

export default Paragraph;
