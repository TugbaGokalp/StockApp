import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnStyle, flex } from "../styles/globalStyle";
import useStockCall from "../hooks/useStockCall";

export default function ProductCard({ product, setOpen, info, setInfo }) {
  const {deleteStockData} = useStockCall()
  return (
    <Card
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.address}
        </Typography>
      </CardContent>
      <CardMedia sx={{ height: 140 }} image={product?.image} title="product-image  " />
      <Typography variant="body2" color="text.secondary">
        Phone: {product?.phone}
      </Typography>
      <CardActions sx={flex}>
        <EditIcon sx={btnStyle} onClick={() => {setOpen(true)
        setInfo(product)}
      } />
        <DeleteOutlineIcon sx={btnStyle} onClick={() => deleteStockData("products", product.id)} />
      </CardActions>
    </Card>
  );
}
