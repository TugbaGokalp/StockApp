import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { amber, deepPurple, pink } from "@mui/material/colors";
import { useSelector } from "react-redux";

const KpiCards = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const totalSales = sales
    .map((item) => Number(item.price_total))
    .reduce((acc, val) => acc + val, 0);

  const totalPurchases = purchases
    .map((item) => Number(item.price_total))
    .reduce((acc, val) => acc + val, 0);

  const totalProfit = totalSales - totalPurchases;

  const data = [
    {
      id: 1,
      title: "sales",
      value: `$${totalSales}`,
      icon: <MonetizationOnIcon sx={{ fontSize: "2.3rem" }} />,
      color: deepPurple[600],
      bgColor: deepPurple[100],
    },
    {
      id: 2,
      title: "profit",
      value: `$${totalProfit}`,
      icon: <ShoppingCartIcon sx={{ fontSize: "2.3rem" }} />,
      color: pink[600],
      bgColor: pink[100],
    },
    {
      id: 3,
      title: "purchases",
      value: `$${totalPurchases}`,
      icon: <PaymentsIcon sx={{ fontSize: "2.3rem" }} />,
      color: amber[600],
      bgColor: amber[100],
    },
  ];

  return (
    <Grid container justifyContent={"center"} alignItems={"center"} spacing={3}>
      {data.map((item) => {
        return (
          <Grid
            item
            key={item.id}
            
            xs={12}
            sm={10}
            md={6}
            lg={4}
            sx={{ minWidth: "250px" }}
          >
            <Paper sx={{ p: 2 }} elevation={8}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Avatar
                  sx={{
                    backgroundColor: item.bgColor,
                    color: item.color,
                    width: 70,
                    height: 70,
                    ml: 4,
                  }}
                >
                  {item.icon}
                </Avatar>
                <Box>
                  <Typography variant="button">{item.title}</Typography>
                  <Typography variant="h4">{item.value}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default KpiCards;
