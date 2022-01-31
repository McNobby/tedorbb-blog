import React, { useRef, useState } from "react";
import LoginProtection from "../../components/LoginProtection";
import Paragraph from "../../components/paragraph";
import addDocToFB from "../../lib/addDocToFB";
import styles from "../../styles/Home.module.scss";

const WritePage = () => {
    const [paragraphs, setParagraphs] = useState([{ id: 1 }]);

    const title = useRef(null);
    const thumbnail = useRef(null);
    const collection = useRef(null);

    let text = [];

    const textEditors = paragraphs.map((e) => {
        return <Paragraph id={e.id} key={e.id} />;
    });

    const addP = () => {
        setParagraphs([...paragraphs, { id: paragraphs.length + 1 }]);
    };

    const submit = () => {
        const data = {
            title: title.current.value,
            thumbnail: thumbnail.current.value,
            body: JSON.parse(sessionStorage.getItem("body")),
        };
        console.log(text);
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
