import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import DeleteIcon from "@mui/icons-material/Delete"
import useStockCall from "../hooks/useStockCall"

import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import { btnStyle } from "../styles/globalStyle"
import SaleModal from "../components/modals/SaleModal"
import EditIcon from "@mui/icons-material/Edit"

const Sales = () => {
  const { getStockData, deleteStockData, getProCatBrand } = useStockCall()
  const { sales } = useSelector((state) => state.stock)
  const [open, setOpen] = useState(false)

  const [info, setInfo] = useState({
    brand_id: "",
    product_id: "",
    quantity: "",
    price: "",
  })

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const columns = [
    {
      field: "createds",
      headerName: "Date",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "brand",
      headerName: "Brand",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "product",
      headerName: "Product",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "price_total",
      headerName: "Amount",
      minWidth: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 40,
      headerAlign: "center",
      align: "center",
      renderCell: ({ id, row: { brand_id, product_id, quantity, price } }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              setOpen(true)
              setInfo({ id, brand_id, product_id, quantity, price })
            }}
            sx={btnStyle}
          />,
          <GridActionsCellItem
            key={"delete"}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteStockData("sales", id)}
            sx={btnStyle}
          />,
        ]
      },
    },
  ]

  useEffect(() => {
    getProCatBrand()
    getStockData("sales")
  }, []) // eslint-disable-line

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Sales
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        New Sale
      </Button>

      <SaleModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <Box
        sx={{
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <DataGrid
          autoHeight
          rows={sales}
          columns={columns}
          pageSize={10}
          slots={{
            toolbar: GridToolbar,
          }}
          sx={{
            boxShadow: 4,
          }}
        />
      </Box>
    </div>
  )
}

export default Sales