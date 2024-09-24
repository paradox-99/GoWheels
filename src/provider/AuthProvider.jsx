import { createContext, useState } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const authInfo = { user, setUser, loader, setLoader };
  return (
    <AuthContext.Provider value={authInfo}>{Children}</AuthContext.Provider>
  );
};

export default AuthProvider;
