import React from "react";
import { Button, Stack } from "@mui/material";
import { exportNotes } from "../api";
export default function ExportControls({notes}){
  const download = async (fmt)=>{
    const res = await exportNotes(notes, fmt);
    const blob = new Blob([res.data], {type: fmt==='pdf'? 'application/pdf':'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url;a.download=`notes.${fmt}`;a.click(); URL.revokeObjectURL(url);
  };
  return <Stack direction="row" spacing={1}><Button onClick={()=>download('txt')}>Download TXT</Button><Button onClick={()=>download('pdf')}>Download PDF</Button></Stack>;
}
