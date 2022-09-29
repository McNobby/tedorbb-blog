import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav>
      <Link href="/">
        <a>
          <h1>{process.env.PAGE_NAME}</h1>
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
