import { Button, Typography } from '@mui/material'
import React from 'react'

const Firms = () => {
  return (
    <div>
      <Typography variant='h4' color="error" mb={3}>
        Firm
      </Typography>
      <Button variant='contained'>
        New Firm 
      </Button>
    </div>
  )
}

export default Firms