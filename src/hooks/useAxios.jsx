import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosPublic = axios.create({
    baseURL: "https://10001.fullstack.clarusway.com/",
  });

  const axiosWithToken = axios.create({
    baseURL: "https://12312.fullstack.clarusway.com/",
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosWithToken, axiosPublic }; // send useAxios with axiosWithToken function. axiosWithToken function in useAxios.
};

export default useAxios;
