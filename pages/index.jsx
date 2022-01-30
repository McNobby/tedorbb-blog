import PagePanel from "../components/pagePanel";
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
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        scale: 1.3,
        transition: {
            duration: 0.8,
        },
    },
};

export default function Home() {
    return (
        <div>
        <div className="Mainpage">
            <motion.h1
                variants={variants}
                initial="hidden"
                animate="show"
                exit="exit"
            >
                Teodor Berntsen Bøe
            </motion.h1>
            <PagePanel />
        <img src="/bolger.svg" alt="" id="waves" />

        </div>

        </div>
    );
}
