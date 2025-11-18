def summarize_text(text):
  if not text: return ("","[]")
  sents = [s.strip() for s in text.replace('\n',' ').split('.') if s.strip()]
  notes = '. '.join(sents[:3])
  words = [w.strip('.,()').lower() for w in text.split()]
  keywords = []
  for w in words:
    if len(w)>5 and w not in keywords:
      keywords.append(w)
    if len(keywords)>=10: break
  return notes, keywords
