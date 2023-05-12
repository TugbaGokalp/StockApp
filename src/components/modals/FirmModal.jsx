import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/globalStyle";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";

export default function FirmModal({ open, handleClose }) {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  const { postStockData } = useStockCall();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("firms", info);
    handleClose();
    setInfo({
      name: "",
      phone: "",
      address: "",
      image: "",
    });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="name"
              variant="outlined"
              value={info?.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info?.phone}
              onChange={handleChange}
              required
            />

            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              required
              value={info?.address}
              onChange={handleChange}
            />

            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              required
              value={info?.image}
              onChange={handleChange}
            />

            <Button type="submit" variant="contained">
              Submit Form
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
