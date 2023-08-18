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

    const [posts,setPosts] = useState<Post[]>();
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
          height: '100vh',
          backgroundColor: '#38bdf8',
        }}
      />
    );
}
