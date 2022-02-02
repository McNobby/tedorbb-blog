import Link from "next/link";
import React from "react";
import LoginProtection from "../../components/admin/LoginProtection";
import styles from "../../styles/Home.module.scss";

const Admin = () => {
    return (
        <LoginProtection>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Admin</h1>
                </div>
                <Link href="/admin/WritePage">
                    <button>Write page</button>
                </Link>
                <Link href="/admin/WritePage">
                    <button>Edit page</button>
                </Link>
            </div>
        </LoginProtection>
    );
};

export default Admin;
