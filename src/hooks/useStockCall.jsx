import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import axios from "axios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const getStockData = async (url) => {
    const BASE_URL = "https://12312.fullstack.clarusway.com/";

    try {
      dispatch(fetchStart());
      const { data } = await axios(`${BASE_URL}stock/${url}/`, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };


  const deleteStockData = async (url, id) => {
    const BASE_URL = "https://12312.fullstack.clarusway.com/";

    try {
      dispatch(fetchStart());
      await axios.delete(`${BASE_URL}stock/${url}/${id}/ `, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(getSuccess());
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };




  return { getStockData };
};

export default useStockCall;
