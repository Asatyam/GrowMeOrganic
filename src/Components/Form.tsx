import { Box, Button, FormControl, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import CustomTextField from './CustomTextField';

export interface FormInput {
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

  const handleFormChange = (evt:ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [evt.target.name]: evt.target.value }));
    console.log(form)
  };

  const handleSubmit = (evt:React.FormEvent<HTMLFormElement>)=>{

    evt.preventDefault();
    localStorage.setItem('form',JSON.stringify(form));

  }


  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '8px',
        margin: 'auto',
        border: '2px solid black',
        flex:1,
        maxWidth:'400px'
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormControl
          sx={{
            width: '100%',
            padding: '30px',
            display: 'grid',
            gap: '25px',
          }}
        >
          <Typography variant="h4" sx={{border:'2px solid black',textAlign:'center',padding:'4px'}} component="h3">
            Login Form
          </Typography>

          <CustomTextField name='name' label='Name' form={form} handleFormChange={handleFormChange}/>
          <CustomTextField name='phone' label='Phone Number' form={form} handleFormChange={handleFormChange}/>
          <CustomTextField name='email' label='Email' form={form} handleFormChange={handleFormChange}/>

          <Button
            type="submit"
            color="secondary"
            sx={{ margin: '10px' }}
            variant="outlined"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}
