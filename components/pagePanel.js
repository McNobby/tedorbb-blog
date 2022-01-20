import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";

const PagePanel = () => {
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

    return (
        <motion.div
            className="pagePanel"
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <Link href="/interesser">
                <motion.div className={styles.pageBtn}>
                    <Image src="/heart.svg" width={50} height={50} />
                    <a>Interesser</a>
                </motion.div>
            </Link>

            <Link href="/prosjekter">
                <motion.div className={styles.pageBtn}>
                    <Image src="/folder.svg" width={50} height={50} />
                    <a>Prosjekter</a>
                </motion.div>
            </Link>
        </motion.div>
    );
};

export default PagePanel;
