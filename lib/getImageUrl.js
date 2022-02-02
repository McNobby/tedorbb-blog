import { storage } from "./FirebaseConf";
import { ref, getDownloadURL } from "firebase/storage";

export default function getImageUrl(path) {
    const storageRef = ref(storage, path);
    getDownloadURL(storageRef)
        .then((url) => {
            console.log(url);
            setImagePath(url);
            return url;
        })
        .catch((e) => {
            console.log(e.message);
            return undefined;
        });
}
