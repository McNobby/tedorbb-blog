import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {}, []);

  return (
    <nav>
      <Link href="/">
        <a>
          <h1>Teobb.no</h1>
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
