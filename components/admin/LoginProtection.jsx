import React, { useEffect } from "react";
import { useRouter } from "next/router";

const LoginProtection = ({ children }) => {
  const router = useRouter();

  useEffect(() => {}, [router.isReady]);

  return <>{children}</>;
};

export default LoginProtection;
