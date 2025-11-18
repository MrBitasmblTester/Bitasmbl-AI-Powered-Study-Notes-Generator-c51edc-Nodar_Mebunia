def extract_keywords(text, max_k=10):
  words = [w.strip('.,()').lower() for w in text.split()]
  kws = []
  for w in words:
    if len(w)>5 and w not in kws: kws.append(w)
    if len(kws)>=max_k: break
  return kws
