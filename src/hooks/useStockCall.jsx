import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";

import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  
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
   
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`)
      // toastSuccessNotify(`${url} successfuly deleted`)
      getStockData( url );
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      // toastErrorNotify(`${url} can not be deleted`)
    }
  };

  return { getStockData, deleteStockData,  };
};

export default useStockCall;
