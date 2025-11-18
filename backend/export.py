from fastapi import APIRouter, Response
router = APIRouter()
@router.post('/export')
async def export_notes(payload: dict):
  fmt = payload.get('format','txt')
  notes = payload.get('notes','')
  if fmt=='txt':
    return Response(content=notes, media_type='text/plain')
  pdf_bytes = b"%PDF-1.4\n%placeholder pdf\n"
  return Response(content=pdf_bytes, media_type='application/pdf')
