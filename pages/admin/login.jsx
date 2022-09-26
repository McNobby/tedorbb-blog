import React, { useRef, useEffect, useState } from "react";
import styles from "../../styles/Home.module.scss";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.3,
    transition: {
      duration: 0.2,
    },
  },
};

const item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 5,
    },
  },
};

const Login = () => {
  const email = useRef();
  const password = useRef();

  const router = useRouter();

  const [error, setError] = useState("");

  useEffect(() => {}, []);

  const login = () => {};

  return (
    <motion.div
      className={styles.login}
      variants={variants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className={styles.wrap}>
        <motion.h1 variants={item}>Login</motion.h1>
        <p>{error}</p>
        <motion.input
          variants={item}
          type="email"
          placeholder="email"
          ref={email}
        />
        <motion.input
          variants={item}
          type="password"
          placeholder="password"
          ref={password}
        />
        <button onClick={login}>Login</button>
      </div>
    </motion.div>
  );
};

export default Login;
