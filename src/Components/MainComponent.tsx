import { useState } from "react";
import { Box } from "@mui/material";
import Department from "./Department";

const data = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];



export default function MainComponent(){
    
    return (
      <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '8px',
        margin: '50px auto',
        border: '2px solid cyan',
        width:'fit-content',


      }}
    >
      
    {data.map((details)=><Department key={details.department} details={details}/>)}

    </Box>
      
    )

}