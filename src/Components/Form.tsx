import { Box, Button, FormControl, TextField } from '@mui/material';
import { useState } from 'react';

interface FormInput {
  name: string;
  phone: string;
  email: string;
}

export default function Form() {
  const initialState: FormInput = {
    name: '',
    phone: '',
    email: '',
  };

  const [form, setForm] = useState<FormInput>(initialState);

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius:'8px',

      }}
    >
        <form>
      <FormControl sx={{
        display:'grid',
        gap:'10px',
        padding:'20px',
      }}>

      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      </FormControl>
      </form>
    </Box>
  );
}
