import React from "react";

const Footer = () => {
    return (
        <footer>
            <section>
                <h1>Teodor Berntsen Bøe</h1>
                <a href="https://tedorbb.com">
                    <h3>tedorbb.com</h3>
                </a>
            </section>
            <section>
                <h1>Kontakt info</h1>
                <div className="wrap">
                    <h3>Epost:</h3>
                    <a href="mailto:teodorbb@gmail.com">teodorbb@gmail.com</a>
                </div>
                <div className="wrap">
                    <h3>Github:</h3>
                    <a
                        href="https://github.com/McNobby"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github - McNobby
                    </a>
                </div>
            </section>
            <section>
                <h1></h1>
            </section>
        </footer>
    );
};

export default Footer;
