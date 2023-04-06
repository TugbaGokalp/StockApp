import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";
import useAuthCall from "../hooks/useAuthCall";

function Dashboard() {
  const { currentUser } = useSelector((state) => state.auth);

  const {logout} = useAuthCall();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STOCK APP
          </Typography>
          {currentUser && <Button onClick={() => logout()} color="inherit">Logout</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Dashboard;
