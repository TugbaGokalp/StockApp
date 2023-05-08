import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import axios from "axios";

const Firms = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getFirms = async () => {
    const BASE_URL = "https://12312.fullstack.clarusway.com/";

    const url = "firms";
    try {
      dispatch(fetchStart());
      const { data } = await axios(`${BASE_URL}stock/firms/`, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }

    useEffect(() => {
      getfirms();
    }, []);

    return (
      <div>
        <Typography variant="h4" color="error" mb={3}>
          Firm
        </Typography>
        <Button variant="contained">New Firm</Button>
      </div>
    );
  };
};
export default Firms;
