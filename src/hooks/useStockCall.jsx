import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import axios from "axios";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios(); // take axiosWithToken from useAxios

  const getStockData = async (url) => {
    // const BASE_URL = "https://12312.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      // const { data } = await axios(`${BASE_URL}stock/${url}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });

      const { data } = await axiosWithToken(`stock/${url}/`);
      // get the data from axiosWithToken. don't have to write .get because it's process of get
      // base url + stock/${url}/
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    const BASE_URL = "https://12312.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/ `, {
        
      });
      getStockData({ url });
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { getStockData };
};

export default useStockCall;