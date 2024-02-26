import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { logout } from "../utils/auth";
import { auth } from "../firebase/firebase.init";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setUser(null);

    const subscribe = onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setUser(userInfo);
      } else {
        logout();
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => subscribe();
  }, []);

  // console.log("Use auth", user);

  return {
    user,
    isLoading,
  };
};

export default useAuth;
