import toast from "react-hot-toast";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const useGoogleAuth = () => {
  const { googleUserAuth, setLoading } = useAuthContext();
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    googleUserAuth()
      .then(() => {
        toast.success("Logged In Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  };



  return handleGoogleAuth;


};

export default useGoogleAuth;
