import {  useEffect, useState } from 'react';
import { formatName } from '../utilityFunction';

import { FormControlLabel, Checkbox } from '@mui/material';

interface Props {
  parent: boolean;
  sub: string;
  setParent: React.Dispatch<React.SetStateAction<boolean>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count:number,

}
export default function SubDepartment({ parent, sub, setParent,setCount,count }:Props) {
  const [selected, setSelected] = useState<boolean>(parent);

  useEffect(()=>{

    if (parent){
        setSelected(true);
    }
    if (count===0){
        setSelected(false);
    }
  },[parent,count])

  const handleInputChange = () => {

    if (parent && selected){
        setParent(false);
    }
    if(selected){
        setCount(c=>c-1);
    }
    else{
        setCount(c=>c+1);
    }
    setSelected((selected) => !selected);
  };

  return (
    <FormControlLabel
      sx={{
        fontWeight: 'bold',
      }}
      control={
        <Checkbox
          sx={{
            color: '#5eead4',
            '&.Mui-checked': {
              color: 'white',
            },
          }}
          checked={selected || parent}
          onChange={handleInputChange}
        />
      }
      label={formatName(sub)}
    />
  );
}
