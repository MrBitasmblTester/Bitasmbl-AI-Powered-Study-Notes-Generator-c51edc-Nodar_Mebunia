import React from "react";
import { Button, Box } from "@mui/material";
export default function ReorderNotes({notes, onChange}){
  const parts = notes.split('\n\n');
  const move = (i,dir)=>{
    const a = [...parts]; if(i+dir<0||i+dir>=a.length) return; [a[i],a[i+dir]]=[a[i+dir],a[i]]; onChange(a.join('\n\n'));
  };
  return (<Box>{parts.map((p,i)=>(<Box key={i} sx={{mb:1}}><div dangerouslySetInnerHTML={{__html:p}}></div><Button onClick={()=>move(i,-1)}>Up</Button><Button onClick={()=>move(i,1)}>Down</Button></Box>))}</Box>);
}
