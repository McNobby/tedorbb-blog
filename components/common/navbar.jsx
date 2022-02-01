import PagePanel from "../pagePanel";
import react, { useEffect, useState } from "react";
import Link from "next/link";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../lib/FirebaseConf";

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //user is logged in
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });
    }, []);

    return (
        <nav>
            <Link href="/">
                <a>
                    <h1>Tedorbb.com</h1>
                </a>
            </Link>
            {logout(loggedIn)}
        </nav>
    );
};

export const logout = (loggedIn) => {
    const signOutUser = () => {
        const auth = getAuth();

        signOut(auth)
            .then((e) => {})
            .catch((e) => {
                console.log(e.code);
            });
    };

    if (loggedIn) {
        return <button onClick={signOutUser}>logout</button>;
    }

    return <></>;
};

export default Navbar;
