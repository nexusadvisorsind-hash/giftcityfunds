"""Check each target keyword against the built page it should rank on.
Run after `npm run build`: python3 scripts/check-keywords.py [keywords.json | keywords-tiered.json]
Reports where the keyword is found: title, h1, h2/h3, or body, or MISSING."""
import html, json, re, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
STOP = {"in","to","for","of","the","a","an","vs","can","are","from","is","what","how","who","through","on","and","with"}
def norm(t): return re.sub(r"\s+"," ",re.sub(r"[^a-z0-9()₹ ]"," ",html.unescape(t).lower()))
def strip(h): return norm(re.sub(r"<[^>]+>"," ",re.sub(r"<(script|style)[\s\S]*?</\1>"," ",h)))
kws = json.loads((ROOT/"scripts"/(sys.argv[1] if len(sys.argv) > 1 else "keywords.json")).read_text())
missing = 0
for kw, path in kws:
    f = ROOT/"dist"/(path.strip("/") or ".")/"index.html"
    h = f.read_text(encoding="utf8")
    title = norm(re.search(r"<title[^>]*>(.*?)</title>", h, re.S).group(1))
    h1 = strip(" ".join(re.findall(r"<h1[\s\S]*?</h1>", h)))
    hx = strip(" ".join(re.findall(r"<h[23][\s\S]*?</h[23]>", h)))
    body = strip(re.search(r'<div id="root"[\s\S]*', h).group(0))
    k = norm(kw).strip()
    toks = [t for t in k.split() if t not in STOP]
    def has(text, phrase=False): return (k in text) if phrase else all(re.search(r"(?<![a-z0-9])"+re.escape(t), text) for t in toks)
    where = ("title(exact)" if has(title, True) else "title" if has(title) else
             "h1(exact)" if has(h1, True) else "h1" if has(h1) else
             "heading(exact)" if has(hx, True) else "heading" if has(hx) else
             "body" if has(body) else "MISSING")
    if where in ("body", "MISSING"): missing += 1
    print(f"{where:15} {kw:50} {path}")
print("weak or missing:", missing)
