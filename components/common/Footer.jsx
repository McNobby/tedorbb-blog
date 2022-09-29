import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();

  const sendToAdmin = () => {
    router.push("/admin");
  };

  return (
    <footer>
      <section>
        <h1>Teodor Berntsen Bøe</h1>
        <a href={"https://" + process.env.PAGE_NAME}>
          <h3>{process.env.PAGE_NAME}</h3>
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
      <section onDoubleClick={sendToAdmin}>{/* Empty for now */}</section>
    </footer>
  );
};

export default Footer;
