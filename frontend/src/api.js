import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:8000/api"});
export const summarize = (text)=> api.post("/summarize", { text });
export const exportNotes = (notes, format)=> api.post("/export", { notes, format }, { responseType: format==="pdf"?"arraybuffer":"text" });
export default api;
