import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./authStorage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    console.log("AuthToken-", authToken);
    const userData = jwtDecode(authToken);

    // set the global context state variable as user details
    setUser(userData);
    // store user details in persistent storage
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logOut, logIn };
};
