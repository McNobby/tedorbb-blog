import React, { useRef, useState } from "react";
import LoginProtection from "../../components/admin/LoginProtection";
import Paragraph from "../../components/admin/paragraph";
import addDocToFB from "../../lib/addDocToFB";
import styles from "../../styles/Home.module.scss";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../../lib/FirebaseConf";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const WritePage = () => {
    const [paragraphs, setParagraphs] = useState([{ id: 1 }]);
    const [thumbImg, setThumbImg] = useState(``);
    const [imageUrl, setImageUrl] = useState("");

    const imageName = uuidv4();
    const image = useRef();
    const storageRef = ref(storage, `images/${imageName}`);

    const title = useRef(null);
    const thumbnail = useRef(null);
    const collection = useRef(null);

    const textEditors = paragraphs.map((e) => {
        return <Paragraph id={e.id} key={e.id} />;
    });

    const addP = () => {
        setParagraphs([...paragraphs, { id: paragraphs.length + 1 }]);
    };

    const uploadImage = () => {
        uploadBytes(storageRef, image.current.files[0]).then((snapshot) => {
            setThumbImg(`images/${imageName}`);
            console.log(`uploaded image ${imageName}`);
            getDownloadURL(snapshot.metadata.ref).then((url) => {
                setImageUrl(url);
            });
        });
    };

    const submit = () => {
        const data = {
            title: title.current.value,
            thumbnail: thumbnail.current.value,
            thumbnailImg: thumbImg,
            body: JSON.parse(sessionStorage.getItem("body")),
        };
        addDocToFB(collection.current.value, data);
    };

    return (
        <LoginProtection>
            <div className={styles.container}>
                <div className={styles.editor}>
                    <h1>Text editor</h1>
                    <input type="text" placeholder="Title" ref={title} />
                    <input
                        type="text"
                        placeholder="Thumbnail text"
                        ref={thumbnail}
                    />
                    <h4>Upload thumbnail:</h4>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        ref={image}
                        onChange={uploadImage}
                    />
                    <img src={imageUrl} alt="" />

                    {textEditors}
                    <button onClick={addP}>+ Add paragraph</button>
                    <select name="place" ref={collection}>
                        <option value="interesser">Interesser</option>
                        <option value="prosjekter">Prosjekter</option>
                    </select>
                    <button id={styles.submit} onClick={submit}>
                        Save & post
                    </button>
                </div>
            </div>
        </LoginProtection>
    );
};

export default WritePage;
