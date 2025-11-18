import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import NoteEditor from "./components/NoteEditor";
import NoteViewer from "./components/NoteViewer";
export default function App(){
  return (
    <>
      <AppBar position="static"><Toolbar><Typography>AI Study Notes</Typography></Toolbar></AppBar>
      <Container sx={{mt:3}}>
        <NoteEditor />
        <NoteViewer />
      </Container>
    </>
  );
}
