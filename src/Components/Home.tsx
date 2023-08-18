import { Box, Typography } from "@mui/material";
import Form from "./Form";

export default function Home(){



    return (
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#4ade80',
          padding:'20px',
        }}
      >
        <Typography sx={{
          backgroundColor:'white',
          padding:'10px',
          textAlign:'center',
          fontWeight:'bold',


        }} variant="h2">GrowMeOrganic Assessment</Typography>
        <Box
          sx={{
            backgroundColor: '#4ade80',
            padding: '2em',
            display: 'flex',
            marginTop:'20px',
          }}
        >
          <Form />
        </Box>
      </Box>
    );
    
    

}

