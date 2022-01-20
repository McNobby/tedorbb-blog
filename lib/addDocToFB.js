import { addDoc, collection } from "firebase/firestore";
import db from "./FirebaseConf";

const addDocToFB = async (collectionID, data) => {
    const docRef = await addDoc(collection(db, collectionID), data);

    return `document added with id: ${docRef.id}`;
};

export default addDocToFB;
