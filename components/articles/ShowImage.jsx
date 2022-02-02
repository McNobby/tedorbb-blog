import React, { useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../lib/FirebaseConf";

const ShowImage = ({ image, alt }) => {
    const [imagePath, setImagePath] = useState("");

    if (image) {
        console.log(image);
        const storageRef = ref(storage, image);
        getDownloadURL(storageRef)
            .then((url) => {
                setImagePath(url);
            })
            .catch((e) => {
                return <img src="" alt="no image uploaded" />;
            });
    }

    return <img src={imagePath} alt={alt} />;
};

export default ShowImage;
