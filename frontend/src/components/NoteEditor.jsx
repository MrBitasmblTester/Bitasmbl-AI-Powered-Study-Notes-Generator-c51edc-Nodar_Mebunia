import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { summarize } from "../api";
export default function NoteEditor(){
  const [text, setText] = useState("");
  const handleSummarize = async ()=>{
    const res = await summarize(text);
    // dispatch event for viewer (simple global event)
    window.dispatchEvent(new CustomEvent('notesGenerated',{detail:res.data}));
  };
  return (
    <Box>
      <TextField fullWidth multiline minRows={6} value={text} onChange={e=>setText(e.target.value)} label="Paste lecture or article" />
      <Button variant="contained" sx={{mt:1}} onClick={handleSummarize}>Generate Notes</Button>
    </Box>
  );
}
