import { Box, Typography,Alert,AlertTitle } from '@mui/material';
import Form from './Components/Form';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {

  const [searchParams] = useSearchParams();
  const [showMessage,setShowMessage] = useState<boolean>(false);

  useEffect(()=>{

    const loggedIn = searchParams.get('login');
    if (loggedIn==='false'){
      setShowMessage(true);
    }

  },[setShowMessage,searchParams])


  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#4ade80',
        padding: '20px',
      }}
    >
      <Typography
        sx={{
          backgroundColor: 'white',
          padding: '10px',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
        variant="h2"
      >
        GrowMeOrganic Assessment
      </Typography>
      {showMessage && (
        <Alert severity="error"
        sx = {{
          margin:'10px auto',
          width:'fit-content',
          
        }}>
          <AlertTitle>Error</AlertTitle>
          You must submit the form to continue further
        </Alert>
      )}
      <Box
        sx={{
          backgroundColor: '#4ade80',
          padding: '2em',
          display: 'flex',
          marginTop: '20px',
        }}
      >
        <Form />
      </Box>
    </Box>
  );
}
