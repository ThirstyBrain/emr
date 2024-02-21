import React from 'react'
import Layout from '../../props/layout/layout'
import { Box, Paper } from '@mui/material'

const Appointment: React.FC = () => {
  return (
    <Layout>
    <Box>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "default",
          p: 1,
          backgroundColor: "#10141f",
          border: "none",
        }}
      >
       
      </Paper>
    </Box>
    
  </Layout>
  )
}

export default Appointment