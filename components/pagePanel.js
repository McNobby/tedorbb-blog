import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import pocketbase from "../lib/PocketBase";

const PagePanel = ({ categories }) => {
  const container = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.5,
        damping: 7,
        duration: 1,
        staggerChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        ease: "easeOut",
      },
    },
  };

  const buttons = categories?.map((item) => {
    return (
      <Link href={"/" + item.id} passHref key={item.id}>
        <motion.div className={styles.pageBtn}>
          <Image
            src={`${process.env.DB_URL}/api/files/categories/${item.id}/${item.icon}`}
            width={50}
            height={50}
            alt={item.display_name}
          />
          <a>{item.display_name}</a>
        </motion.div>
      </Link>
    );
  });

  return (
    <motion.div
      className="pagePanel"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {buttons}
    </motion.div>
  );
};

export default PagePanel;
