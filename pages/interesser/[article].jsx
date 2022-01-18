import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/Home.module.scss"
import db from "../../lib/firebase"
import { getDoc, doc } from "firebase/firestore"; 
import ArticleComp from '../../components/ArticleComp';
import { motion } from 'framer-motion';

const variants = {
    hidden:{
        opacity: 0,
        x: -1000,
    },
    show: {
        x: 0, 
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.5,
            type: "spring"
        }
    },
    exit: {
        opacity: 0,
        x: -500,
        transition:{
            duration: 1
        }
    }
}

const Article = () => {

    const router = useRouter();

    const [path, setpath] = useState("")
    const [article, setArticle] = useState({Title:"Loading...", Body: []})

	// runs when router ready state changes
	useEffect(()=>{
		if (!router.isReady) return;
		// loads article id from url
		setpath(router.query.article);
        getArticle(router.query.article)
	}, [router.isReady]);


    const getArticle = async (id) => {
        const query = await getDoc(doc(db, "articles", id))

        if (query.exists()){
            setArticle(query.data())
            console.log(query.data());
            return(query.data())
        }else{
            console.log("not found");
        }
    }

    return (
        <motion.div className={styles.articleContainer}
        variants={variants}
        initial="hidden"
        animate="show"
        exit="exit">
            <ArticleComp info={article} />
        </motion.div>
    )
}

export default Article


