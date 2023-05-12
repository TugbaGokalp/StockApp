import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import { flex } from "../styles/globalStyle";
import FirmModal from "../components/modals/FirmModal";


const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // getfirms();

    getStockData("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>
      <Button
        variant="contained"
        style={{ marginBottom: "20px" }}
        onClick={handleOpen}
      >
        New Firm
      </Button>
      <FirmModal open={open} handleClose={handleClose} />

      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
// };
export default Firms;
