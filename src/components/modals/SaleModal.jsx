import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import { modalStyle } from "../../styles/globalStyle"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import useStockCall from "../../hooks/useStockCall"
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function SaleModal({ open, handleClose, info, setInfo }) {
  const navigate = useNavigate()
  const { postStockData, putStockData } = useStockCall()
  const { products, brands } = useSelector((state) => state.stock)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInfo({ ...info, [name]: Number(value) })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (info.id) {
      putStockData("sales", info)
    } else {
      postStockData("sales", info)
    }

    handleClose()
    setInfo({})
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose()
          setInfo({})
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
            <FormControl>
              <InputLabel variant="outlined" id="brand-select-label">
                Brand
              </InputLabel>
              <Select
                labelId="brand-select-label"
                label="Brand"
                id="brand-select"
                name="brand_id"
                value={info?.brand_id || ""}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/brands/")}>
                  Add New Brand
                </MenuItem>
                <hr />
                {brands?.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel variant="outlined" id="product-select-label">
                Product
              </InputLabel>
              <Select
                labelId="product-select-label"
                label="Product"
                id="product-select"
                name="product_id"
                value={info?.product_id || ""}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/products")}>
                  Add New Product
                </MenuItem>
                <hr />
                {products?.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
            <TextField
              label="Quantity"
              id="quantity"
              name="quantity"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
              value={info?.quantity || ""}
              onChange={handleChange}
              required
            />
            <TextField
              label="Price"
              id="price"
              type="number"
              variant="outlined"
              name="price"
              InputProps={{ inputProps: { min: 0 } }}
              value={info?.price || ""}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              {info?.id ? "Update Sale" : "Add New Sale"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}