import React, {useState,useEffect} from "react";
import { Paper, Typography, TextField, Box } from "@mui/material";
export default function NoteViewer(){
  const [data,setData]=useState({notes:'',keywords:[]});
  useEffect(()=>{
    const h = e=> setData(e.detail);
    window.addEventListener('notesGenerated',h);
    return ()=>window.removeEventListener('notesGenerated',h);
  },[]);
  const highlighted = (text, kws)=> kws.reduce((t,k)=> t.split(k).join(`<strong>${k}</strong>`), text);
  return (
    <Paper sx={{p:2,mt:2}}>
      <Typography variant="h6">Generated Notes</Typography>
      <Box dangerouslySetInnerHTML={{__html: highlighted(data.notes||'', data.keywords||[])}} />
    </Paper>
  );
}
