# HI STUDIOS

The hi-studios.org site: plain HTML, CSS and JavaScript, no framework.

- `index.html`, `about/`, `book/`: the hand-written pages
- `portraits/`, `sports/`, ...: one page per gallery, generated
- `photos/`: the original photos, by category
- `img/`: web-size WebP copies of the photos (800px and 1600px), generated
- `tools/galleries.json`: which photos each gallery shows, in order
- `DESIGN.md`: the design system the pages follow

## Adding photos

1. Put the photo in `photos/<gallery>/` and add its file name to that
   gallery in `tools/galleries.json`.
2. Run `python3 tools/build.py` (needs Pillow: `python3 -m pip install pillow`).
   It writes the copies into `img/` and rewrites the gallery pages.
3. Commit `photos/`, `img/`, `tools/galleries.json` and the gallery pages.
