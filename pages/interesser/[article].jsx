import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.scss";
import ArticleComp from "../../components/articles/ArticleComp";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    x: -500,
    transition: {
      duration: 1,
    },
  },
};

const Article = () => {
  const router = useRouter();

  const [path, setpath] = useState("");
  const [article, setArticle] = useState({ title: "Loading...", body: [] });

  // runs when router ready state changes
  useEffect(() => {
    if (!router.isReady) return;
    // loads article id from url
    console.log(router.asPath.split("/"));
    setpath(router.asPath.split("/"));
    getArticle(router.asPath.split("/"));
  }, [router.isReady]);

  const getArticle = async (id) => {};

  return (
    <motion.div
      className={styles.articleContainer}
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ArticleComp info={article} />
    </motion.div>
  );
};

export default Article;
