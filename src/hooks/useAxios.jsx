import axios from "axios";

const useAxios = () => {
  const axiosCustom = axios.create({
    baseURL: "https://work-loom-server.vercel.app",
    withCredentials: true,
  });

  return axiosCustom;
};

export default useAxios;
