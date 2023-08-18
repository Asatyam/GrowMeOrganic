import { useState,useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';



interface Post{

    userId: number,
    id: number,
    title:string,
    body:string

}

export default function JsonTable(){

    const [posts,setPosts] = useState<Post[]>([]);
    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setPosts(res.data);
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err);
        })

    },[])




    return (
      <Box
        sx={{
          padding: '2em',
        }}
      >
        <DataGrid
          rowSpacingType="border"
          getRowHeight={() => 'auto'}
          sx={{
            '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
              py: '15px',
            },
            boxShadow: 2,
            backgroundColor: '#7dd3fc',
            fontSize: '1rem',
            border: 2,
            borderColor: 'primary.light',
          }}
          columns={[
            { field: 'userId', flex: 0.3 },
            { field: 'id', flex: 0.3 },
            { field: 'title', flex: 1 },
            { field: 'body', flex: 2 },
          ]}
          rows={posts}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
        />
      </Box>
    );
}
