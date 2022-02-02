import React from "react";

const Thumbnail = ({ data, site }) => {
    return (
        <Link href={`/${site}/${data.id}`}>
            <div
                className={styles.gridElement}
                style={
                    imgUrl
                        ? { background: `url("${imgUrl}")` }
                        : { background: "#8753a6" }
                }
            >
                <h1>{e.data.title}</h1>
                <p>{e.data.thumbnail}</p>
            </div>
        </Link>
    );
};

export default Thumbnail;
