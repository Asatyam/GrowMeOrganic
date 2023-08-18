import { Box, Button } from "@mui/material";
import Form from "./Form";

export default function Home(){



    return  (
        <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'primary.dark',
        display:'grid',
        justifyContent:'center',
        alignItems:'center',
      }}
    >
        <Form/>
        </Box>
    )
    
    

}

