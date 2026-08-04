"""Recorta telas individuais do composite trampofeito.webp."""
from pathlib import Path

from PIL import Image

SRC = Path(__file__).resolve().parent.parent / "public" / "assets" / "trampofeito.webp"
OUT = Path(__file__).resolve().parent.parent / "public" / "assets" / "trampofeito"
OUT.mkdir(parents=True, exist_ok=True)

img = Image.open(SRC)
w, h = img.size

# Quatro dispositivos em linha — recorte da área útil da tela (sem moldura dourada)
crops = {
    "screen-login": (0.04, 0.07, 0.21, 0.93),
    "screen-search": (0.27, 0.07, 0.48, 0.93),
    "screen-profile": (0.53, 0.07, 0.74, 0.93),
    "screen-favorites": (0.77, 0.07, 0.97, 0.93),
}

for name, (left, top, right, bottom) in crops.items():
    box = (int(w * left), int(h * top), int(w * right), int(h * bottom))
    cropped = img.crop(box)
    cropped.save(OUT / f"{name}.png", optimize=True)
    print(f"{name}: {cropped.size}")
