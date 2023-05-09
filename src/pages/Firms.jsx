import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";


const Firms = () => {

  const {getStockData} = useStockCall()
    useEffect(() => {
      // getfirms();

      getStockData("firms")
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
// };
export default Firms;
