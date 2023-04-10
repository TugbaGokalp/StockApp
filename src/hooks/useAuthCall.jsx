import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const BASE_URL = "https://12312.fullstack.clarusway.com/";

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data)); // burada data payload'dur
      console.log(data);
      toastSuccessNotify("Login performed")
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const logout = async () => {

    dispatch(fetchStart());

    try {
      const { data } = await axios.post(`${BASE_URL}account/auth/logout/`);
      dispatch(logoutSuccess(data));
      console.log(data);
      toastSuccessNotify("Logout performed")
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const register = async (userInfo) => {

    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${BASE_URL}account/register/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      console.log(data);
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { login, register, logout };
};

export default useAuthCall;
