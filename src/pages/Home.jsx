import { Typography } from "@mui/material"
import { useEffect } from "react"

import KpiCards from "../components/KpiCards"
import useStockCall from "../hooks/useStockCall"
import Charts from "../components/Charts"


const Home = () => {
  const {getStockData} = useStockCall()

  useEffect(() => {
    getStockData("sales")
    getStockData("purchases")
  
  }, [])
  return (
    <div>
      <Typography variant='h4' color="error" mb={3}>DASHBOARD</Typography>
      <KpiCards/>
      <Charts/>
      
    </div>
  )
}

export default Home