import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";

const useAuthContext = () => {
  const contextInfo = useContext(AuthContext);
  
  return contextInfo;
};

export default useAuthContext;
