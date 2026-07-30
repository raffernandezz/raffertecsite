from pathlib import Path

from PIL import Image

SRC = Path(
    r"C:\Users\rafap\.cursor\projects\c-Users-rafap-OneDrive-Documentos-raffertec-site\assets\c__Users_rafap_AppData_Roaming_Cursor_User_workspaceStorage_388d1625c45023e554897c4c60c3e3b4_images_5022b892-a77e-498a-9fa2-f03722d9909a-91703ae2-12b8-4a31-8bf4-7b670e58d2bc.png"
)
OUT = Path(__file__).resolve().parent.parent / "public" / "assets" / "portfolio" / "restaurant"
OUT.mkdir(parents=True, exist_ok=True)

img = Image.open(SRC)
w, h = img.size

# Recortes focados no conteúdo das telas (sem bordas do mockup)
crops = {
    "desktop-hero": (0.27, 0.11, 0.96, 0.39),
    "desktop-menu": (0.27, 0.43, 0.50, 0.67),
    "desktop-reviews": (0.52, 0.43, 0.96, 0.67),
    "mobile-hero": (0.05, 0.72, 0.24, 0.96),
    "mobile-menu": (0.27, 0.72, 0.47, 0.96),
    "mobile-reviews": (0.52, 0.72, 0.71, 0.96),
    "mobile-nav": (0.74, 0.72, 0.95, 0.96),
}

for name, (left, top, right, bottom) in crops.items():
    box = (int(w * left), int(h * top), int(w * right), int(h * bottom))
    cropped = img.crop(box)
    cropped.save(OUT / f"{name}.png", optimize=True)
    print(f"{name}: {cropped.size}")
