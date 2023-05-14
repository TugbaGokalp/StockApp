import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

import { modalStyle } from "../../styles/globalStyle"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import useStockCall from "../../hooks/useStockCall"
import { useSelector } from "react-redux"

export default function ProductModal({ open, handleClose, info, setInfo }) {
  const { postStockData } = useStockCall()
  const { categories, brands } = useSelector((state) => state.stock)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postStockData("products", info)
    handleClose()
    setInfo({
      category_id: "",
      brand_id: "",
      name: "",
    })
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose()
          setInfo({ category_id: "", brand_id: "", name: "" })
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="category"
                id="category"
                name="category_id"
                value={info?.category_id}
                label="Category"
                onChange={handleChange}
              >
                {categories?.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel variant="outlined" id="brand-select">
                Brands
              </InputLabel>
              <Select
                labelId="brand-select"
                label="Brand"
                id="brand-select"
                name="brand_id"
                value={info?.brand_id}
                onChange={handleChange}
                required
              >
                {brands?.map((brand) => {
                  return (
                    <MenuItem key={brand.id} value={brand.id}>
                      {brand.name}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>

            <TextField
              margin="dense"
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info?.name}
              onChange={handleChange}
              required
            />

            <Button type="submit" variant="contained">
              Add New Product
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}