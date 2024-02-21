import React from 'react'
import Layout from '../../props/layout/layout';
import { Box, Paper, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Layout>
    <Box>
      {/* <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "default",
          p: 1,
          backgroundColor: "#fff",
          border: "none",
        }}
      >
       
      </Paper> */}
      <Box py={2} px={4} sx={{backgroundColor: "#fff"}}>
        
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400} sx={{color:'#2BBBAD'}}>
                Dashboard
              </Typography>
             
            </Box>
            <Box width="100%">
              {/* <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                
              </Typography> */}
            </Box>
          </Box>
       
          <Box width="100%" sx={{backgroundColor: "#fff"}}>
           
            
          </Box>
      
      </Box>

      <Box py={64} px={3} sx={{backgroundColor: "#fff"}}>
        
        <Box width="100%">
          <Box width="100%">
          
           
          </Box>
          <Box width="100%">
            {/* <Typography variant="h5" component="h1" my={6} fontWeight={400}>
              
            </Typography> */}
          </Box>
        </Box>
     
        <Box width="100%" sx={{backgroundColor: "#fff"}}>
         
          
        </Box>
    
    </Box>

    </Box>
    
  </Layout>
  );
};

export default Home