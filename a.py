from PIL import Image
import os

root = "public/products"

for folder, _, files in os.walk(root):
    for file in files:
        if file.endswith(".png"):
            png_path = os.path.join(folder, file)
            jpg_path = os.path.join(folder, "main.jpg")

            img = Image.open(png_path).convert("RGB")
            img.save(jpg_path, "JPEG", quality=95)

            print("Converted:", jpg_path)

print("Done!")
