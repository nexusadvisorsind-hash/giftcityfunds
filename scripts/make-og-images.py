"""Generate a 1200x630 share card for every page in the built site.

Run after `npm run build`:  python3 scripts/make-og-images.py
Reads each dist/**/index.html <title>, writes public/og/<slug>.jpg
(home -> home.jpg, /insights/x -> insights--x.jpg). Rebuild afterwards so
the images are copied into dist. Needs Pillow (pip install pillow).
"""
import html, re, textwrap
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "scripts" / "fonts"
BOLD = ImageFont.truetype(str(FONTS / "SpaceGrotesk_700Bold.ttf"), 62)
LOGO = ImageFont.truetype(str(FONTS / "SpaceGrotesk_700Bold.ttf"), 34)
SMALL = ImageFont.truetype(str(FONTS / "DMSans_500Medium.ttf"), 26)
KICK = ImageFont.truetype(str(FONTS / "DMSans_500Medium.ttf"), 24)
INK, TEAL, AMBER, WHITE, SLATE = (11, 23, 54), (20, 184, 166), (245, 166, 35), (255, 255, 255), (186, 198, 216)
W, H = 1200, 630

skyline = Image.open(ROOT / "public/images/gift-city-skyline.jpg").convert("RGB")
skyline = skyline.resize((int(skyline.width * H / skyline.height), H))
skyline = skyline.crop((max(0, skyline.width - 520), 0, skyline.width, H))

def card(title: str, kicker: str) -> Image.Image:
    im = Image.new("RGB", (W, H), INK)
    # skyline on the right, fading into the navy
    sk = skyline.copy()
    mask = Image.linear_gradient("L").rotate(90).resize(sk.size)
    mask = mask.point(lambda v: int(v * 0.55))
    im.paste(sk, (W - sk.width, 0), mask)
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse([820, -260, 1380, 300], fill=TEAL + (70,))
    im.paste(glow.filter(ImageFilter.GaussianBlur(90)), (0, 0), glow.filter(ImageFilter.GaussianBlur(90)))
    d = ImageDraw.Draw(im)
    d.rectangle([70, 90, 150, 96], fill=AMBER)
    d.text((70, 112), kicker, font=KICK, fill=TEAL)
    lines = textwrap.wrap(title, width=26)[:4]
    y = 160
    for line in lines:
        d.text((70, y), line, font=BOLD, fill=WHITE)
        y += 76
    # footer
    d.rounded_rectangle([70, 520, 124, 574], radius=12, fill=TEAL)
    d.text((83, 522), "G", font=LOGO, fill=INK)
    d.ellipse([112, 512, 128, 528], fill=AMBER)
    d.text((142, 516), "giftcityfunds.in", font=SMALL, fill=WHITE)
    d.text((142, 548), "By Anup Vatyani · AMFI-registered MFD · ARN 106715", font=SMALL, fill=SLATE)
    return im

def kicker_for(path: str) -> str:
    if path.startswith("insights"): return "Insights"
    if path == "gift-city-route-checker": return "Free tool"
    return "GIFT City Funds guide"

out = ROOT / "public/og"
out.mkdir(exist_ok=True)
dist = ROOT / "dist"
count = 0
for f in sorted(dist.rglob("index.html")):
    rel = f.parent.relative_to(dist).as_posix()
    if rel in ("admin", "auth"): continue
    m = re.search(r"<title[^>]*>(.*?)</title>", f.read_text(encoding="utf8"), re.S)
    if not m: continue
    title = html.unescape(m.group(1)).strip()
    title = re.sub(r"\s*\((?:\d{4}[^)]*|[^)]*\d{4})\)\s*$", "", title)  # drop "(2026)" style suffixes
    title = re.sub(r"\s*[|—–-]\s*GIFT City Funds\s*$", "", title)
    slug = "home" if rel == "." else rel.replace("/", "--")
    card(title, kicker_for(rel)).save(out / f"{slug}.jpg", quality=86, optimize=True, progressive=True)
    count += 1
print(f"wrote {count} share images to {out}")
