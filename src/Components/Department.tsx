import { useEffect, useState } from "react";
import { Box,Checkbox,FormControlLabel } from "@mui/material";

import { formatName } from "../utilityFunction";
import SubDepartment from "./SubDepartment";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

interface Props{
    details:{
    department:string,
    sub_departments:string[],
    }
}

export default function Department({details} : Props){


    const [selected, setSelected] = useState<boolean>(false);
    const [expanded, setExpanded] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);

    useEffect(()=>{
        console.log(count);
        if (count === details.sub_departments.length){
            setSelected(true);
        }
    },[count,details])
    
    const handleSelection = ()=>{

        if (!selected){
            setCount(details.sub_departments.length);
        }
        else{
            setCount(0);
        }
        setSelected(selected=>!selected);
    }

    return (
      <Box
        sx={{
          display: 'flex',

          borderBottom: '1px solid black',
          padding: '10px 5em',
          width: '100%',
          backgroundColor: '#5b21b6',
          color: 'white',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Checkbox
            sx={{
              color: 'pink',
              '&.Mui-checked': {
                color: 'white',
              },
            }}
            icon={<ExpandCircleDownOutlinedIcon />}
            checkedIcon={<ExpandCircleDownIcon />}
            checked={expanded}
            onChange={() => setExpanded((expanded) => !expanded)}
          />
          <FormControlLabel
            sx={{
              fontWeight: 'bold',
              flex: 1,
            }}
            control={
              <Checkbox
                sx={{
                  color: 'pink',
                  '&.Mui-checked': {
                    color: 'white',
                  },
                }}
                checked={selected}
                onChange={handleSelection}
              />
            }
            label={formatName(details.department)}
          />
        </Box>
        {expanded && (
          <Box
            sx={{
              position: 'relative',
              left: '5em',
            }}
          >
            {details.sub_departments.map((sub: string) => {
              return (
                <Box
                  sx={{
                    fontSize: '1rem',
                    fontFamily: 'Roboto',
                    color: 'lightblue',
                  }}
                >
                  <SubDepartment key={sub} parent={selected} sub={sub} setParent = {setSelected} count={count} setCount = {setCount} />
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    );
    
}

