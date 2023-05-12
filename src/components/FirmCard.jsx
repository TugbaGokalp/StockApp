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

export default function FirmCard({ firm, setOpen, info, setInfo }) {
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
          {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
      </CardContent>
      <CardMedia sx={{ height: 140 }} image={firm?.image} title="fir-image  " />
      <Typography variant="body2" color="text.secondary">
        Phone: {firm?.phone}
      </Typography>
      <CardActions sx={flex}>
        <EditIcon sx={btnStyle} onClick={() => {setOpen(true)
        setInfo(firm)}
      } />
        <DeleteOutlineIcon sx={btnStyle} onClick={() => deleteStockData("firms", firm.id)} />
      </CardActions>
    </Card>
  );
}
