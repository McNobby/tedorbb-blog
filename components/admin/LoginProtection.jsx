import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../lib/FirebaseConf";

const LoginProtection = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
            } else {
                router.push("/admin/login");
            }
        });
    }, [router.isReady]);

    return <>{children}</>;
};

export default LoginProtection;
