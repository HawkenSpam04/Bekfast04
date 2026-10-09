#!/usr/bin/env python3
"""Builds the parts of the site that are made from the photos.

    python3 tools/build.py

1. Makes a small (800px) and a large (1600px) WebP copy of every photo in
   photos/ into img/, skipping ones that are already up to date. The pages
   show these copies, which are a fraction of the size of the originals.
2. Writes a gallery page for each entry in tools/galleries.json
   (portraits/index.html, sports/index.html, ...).

Needs Python 3 and Pillow (python3 -m pip install pillow).
"""
import json
import re
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
PHOTOS = ROOT / 'photos'
IMG = ROOT / 'img'
SIZES = (800, 1600)  # longest edge, in pixels
QUALITY = {800: 80, 1600: 82}


def build_images():
    made = 0
    for src in sorted(PHOTOS.rglob('*.jpg')):
        rel = src.relative_to(PHOTOS)
        for size in SIZES:
            out = IMG / rel.parent / f'{src.stem}-{size}.webp'
            if out.exists() and out.stat().st_mtime >= src.stat().st_mtime:
                continue
            out.parent.mkdir(parents=True, exist_ok=True)
            with Image.open(src) as im:
                im = ImageOps.exif_transpose(im).convert('RGB')
                im.thumbnail((size, size), Image.LANCZOS)
                im.save(out, 'WEBP', quality=QUALITY[size], method=6)
            made += 1
    print(f'images: {made} written')


def image_size(path):
    with Image.open(path) as im:
        return im.size


def humanize(stem):
    return stem.replace('-', ' ').capitalize()


HEAD = ROOT / 'tools' / 'gallery-template.html'


def build_pages():
    data = json.loads((ROOT / 'tools' / 'galleries.json').read_text())
    galleries = data['galleries']
    template = HEAD.read_text()
    for i, g in enumerate(galleries):
        slug, title = g['slug'], g['title']
        nxt = galleries[(i + 1) % len(galleries)]
        items = []
        for n, name in enumerate(g['photos']):
            stem = Path(name).stem
            small = f'../img/{slug}/{stem}-800.webp'
            large = f'../img/{slug}/{stem}-1600.webp'
            w, h = image_size(IMG / slug / f'{stem}-800.webp')
            items.append(
                f'        <li class="gallery__item" data-reveal="{n % 3}">'
                f'<a class="tile" href="{large}">'
                f'<img src="{small}" srcset="{small} 800w, {large} 1600w" '
                f'sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw" '
                f'alt="{humanize(stem)}" width="{w}" height="{h}" '
                f'loading="{"eager" if n < 3 else "lazy"}"></a></li>'
            )
        count = len(g['photos'])
        page = (template
                .replace('{{slug}}', slug)
                .replace('{{title}}', title)
                .replace('{{label}}', f'_{title.upper()}')
                .replace('{{text}}', g['text'])
                .replace('{{cover}}', f'img/{slug}/{Path(g["photos"][0]).stem}-1600.webp')
                .replace('{{count}}', f'{count} photo{"s" if count != 1 else ""}')
                .replace('{{next_slug}}', nxt['slug'])
                .replace('{{next_title}}', nxt['title'])
                .replace('{{items}}', '\n'.join(items)))
        out = ROOT / slug / 'index.html'
        out.parent.mkdir(exist_ok=True)
        out.write_text(page)
    print(f'pages: {len(galleries)} written')


if __name__ == '__main__':
    build_images()
    build_pages()
