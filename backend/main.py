from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from summarizer import summarize_text
from export import router as export_router
app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
app.include_router(export_router, prefix="/api")
@app.post("/api/summarize")
async def summarize(req: Request):
  body = await req.json()
  text = body.get('text','')
  notes, keywords = summarize_text(text)
  return {"notes": notes, "keywords": keywords}
