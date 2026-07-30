from pathlib import Path

from PIL import Image

SRC = Path(
    r"C:\Users\rafap\.cursor\projects\c-Users-rafap-OneDrive-Documentos-raffertec-site\assets\c__Users_rafap_AppData_Roaming_Cursor_User_workspaceStorage_388d1625c45023e554897c4c60c3e3b4_images_5022b892-a77e-498a-9fa2-f03722d9909a-91703ae2-12b8-4a31-8bf4-7b670e58d2bc.png"
)
OUT = Path(__file__).resolve().parent.parent / "public" / "assets" / "portfolio" / "restaurant"
OUT.mkdir(parents=True, exist_ok=True)

img = Image.open(SRC)
w, h = img.size

crops = {
    "desktop-hero": (0.24, 0.07, 0.99, 0.41),
    "desktop-menu": (0.24, 0.41, 0.52, 0.69),
    "desktop-reviews": (0.50, 0.41, 0.99, 0.69),
    "mobile-hero": (0.02, 0.70, 0.26, 0.98),
    "mobile-menu": (0.25, 0.70, 0.49, 0.98),
    "mobile-reviews": (0.49, 0.70, 0.73, 0.98),
    "mobile-nav": (0.72, 0.70, 0.98, 0.98),
}

for name, (left, top, right, bottom) in crops.items():
    box = (int(w * left), int(h * top), int(w * right), int(h * bottom))
    cropped = img.crop(box)
    cropped.save(OUT / f"{name}.png", optimize=True)
    print(f"{name}: {cropped.size}")

hero = Image.open(OUT / "desktop-hero.png")
m1 = Image.open(OUT / "mobile-hero.png")
m2 = Image.open(OUT / "mobile-menu.png")

target_w = 560
hero_resized = hero.resize(
    (target_w, int(hero.height * target_w / hero.width)),
    Image.Resampling.LANCZOS,
)
phone_w = 84
m1_r = m1.resize(
    (phone_w, int(m1.height * phone_w / m1.width)),
    Image.Resampling.LANCZOS,
)
m2_r = m2.resize(
    (phone_w, int(m2.height * phone_w / m2.width)),
    Image.Resampling.LANCZOS,
)

composite = Image.new("RGB", (target_w, hero_resized.height), (250, 245, 238))
composite.paste(hero_resized, (0, 0))
composite.paste(
    m1_r,
    (target_w - phone_w * 2 - 24, hero_resized.height - m1_r.height - 8),
)
composite.paste(
    m2_r,
    (target_w - phone_w - 12, hero_resized.height - m2_r.height - 8),
)
composite.save(OUT / "card-preview.png", optimize=True)
print(f"card-preview: {composite.size}")
