import db from '../lib/FirebaseConf'
import { getDocs, collection } from "firebase/firestore";

const getCollection = async (collectionID) => {

    const query = await getDocs(collection(db, collectionID))

    let data = []

    query.forEach(doc => {
        data = [...data, {id: doc.id, data: doc.data()}]
    })

    return data
}

export default getCollection
