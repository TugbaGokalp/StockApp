import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import { flex } from "../styles/globalStyle";
import BrandModal from "../components/modals/BrandModal";

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands } = useSelector((state) => state.stock); // get brands from redux with useSelector() for usage of management of state

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    // This part runs only once and is called after the component is loaded.
    getStockData("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Brand
      </Typography>
      <Button variant="contained" style={{ marginBottom: "20px" }} onClick={handleOpen}>
        New Brand
      </Button>

      <BrandModal open={open} handleClose={handleClose}/>

      <Grid container sx={flex}>
        {brands?.map((brand) => (
          <Grid item key={brand.id}>
            <BrandCard brand={brand} />
            {/* Each BrandCard component can access all properties of the brand object in the current loop through the brand prop sent to it. In this way, the information of different companies can be displayed in each card. */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
// };
export default Brands;
