# Design System: Darkroom Index
**Skill:** stitch-design-taste
**Reference:** the look of [namelessproductions.org](https://namelessproductions.org/), a photography and videography portfolio. Values below were measured from the live site on 2026-10-05. This file describes design language only: use your own name, photos, videos and words.

---

## Configuration — Style Dials

| Dial | Level | Why |
|------|-------|-----|
| **Creativity** | `6` | One bold display face and a signature hover index; everything else steps aside for the photos |
| **Density** | `3` | Airy around text. Galleries themselves are tight mosaics with thin gutters |
| **Variance** | `5` | Even photo grids, broken up by zig-zag video rows and mixed-width gallery strips |
| **Motion Intent** | `4` | Background video and slow crossfades. No perpetual micro-loops: the footage is the motion |

### What differs from the reference
- Pure black `#000000` → **Darkroom Black** `#0A0A0A` (looks the same, follows the skill's no-pure-black rule)
- Body font "Interface" (an Adobe Fonts typeface) → **Geist**, which is free on Google Fonts
- **Ash Gray** and **Geist Mono** are optional additions; the reference has neither

---

## 1. Visual Theme & Atmosphere
A cinematic black-and-white frame for full-color photography. The interface is strictly monochrome so the work supplies every bit of color. Pages open on full-viewport dark media (a looping background video or a cover photo) with white type laid straight over it; everything below the fold sits on paper white. A squared, technical display face gives the brand an expedition-gear feel, like the readout on a drone controller or a camera's top screen. Category names carry a leading underscore (`_MOUNTAINS`, `_AUTOMOTIVE`) and read like folder names on a memory card. Chrome is minimal, photos are big, gutters are thin. The overall impression: a field photographer's contact sheet, cleaned up for a gallery wall.

## 2. Color Palette & Roles
- **Darkroom Black** (#0A0A0A) — Hero, header band and cinema surfaces; primary text on light backgrounds; lightbox backdrop
- **Paper White** (#FFFFFF) — Main canvas below the fold; all text on dark media; primary button fill on dark
- **Index White** (rgba(255,255,255,0.85)) — Resting state of hero index items. The hovered item goes to full Paper White
- **Photo Scrim** (rgba(10,10,10,0.15)) — Overlay on cover photos so white header type stays legible. Raise to 0.35 on very bright images, never higher
- **Frost Panel** (rgba(255,255,255,0.45)) — Translucent panel behind text blocks placed over a photograph (services accordion)
- **Haze Panel** (rgba(240,240,240,0.19)) — Lighter tint behind a single heading floating over a photograph
- **Ink Rule** (#0A0A0A, 1px) — Dividers between accordion rows and list items on light or frosted surfaces
- **Ash Gray** (#8A8A8A) — *Optional.* Captions, metadata, disabled states. Use sparingly

### Accent
None. The photography is the color. When a state needs emphasis, use an underline, a weight change, or black/white inversion.

### Banned Colors
- Any saturated UI accent on buttons, links or icons: it competes with the photos
- Purple/blue neon gradients and glows
- Pure black `#000000`: use Darkroom Black
- Tinted grays: every neutral stays true gray (equal R, G, B)

## 3. Typography Rules
- **Display: `Oxanium` 400** — Squared, technical letterforms. Track-tight `-0.02em`. Used for the wordmark, hero index, section headings, gallery titles and accordion titles. Never bolded; hierarchy comes from size and case
  - Wordmark: `2.64rem` (42px), UPPERCASE
  - Hero index items: `clamp(2.25rem, 3.3vw, 3rem)` (47px at 1440px), UPPERCASE, line-height `1.4`, leading underscore
  - Section headings: `clamp(2.25rem, 3.5vw, 3.25rem)`, line-height `1.2`. Sentence case or even lowercase ("who am I?") is welcome; the casual voice plays against the technical face
  - Sub-headings and accordion titles: `1.38rem` (22px), line-height `1.35`
- **Body: `Geist` 400** — `1.17rem` (18.7px), line-height `1.6`, tracking `0.01em`, max-width `65ch`, left-aligned
- **Navigation:** body font, UPPERCASE, `1.17rem`, tracking `0.01em`, regular weight
- **Buttons:** body font 700, UPPERCASE, `0.96rem` (15.4px), tracking `0.08em`
- **Mono (optional): `Geist Mono`** `0.8125rem` — Camera metadata captions only, e.g. `f/2.8 · 1/500s · ISO 200`
- **Loading:** `https://fonts.googleapis.com/css2?family=Oxanium:wght@400&family=Geist:wght@400;700&family=Geist+Mono&display=swap`

### Banned Fonts
- `Inter`; generic serifs (`Times New Roman`, `Georgia`, `Garamond`); default system stacks for headings
- A third family. Two families only, plus the optional mono

## 4. Component Stylings
* **Header (over dark media):** Transparent, one row with three zones: social chips on the left, wordmark with the nav stacked under it in the center, primary button on the right. About `2.5rem` top padding. All white, sitting on whatever media is behind it
* **Social chips:** `36px` Paper White circles holding `14px` Darkroom Black glyphs, `10px` apart. In the footer they invert to bare black glyphs (`22px`), centered
* **Nav links:** UPPERCASE body text, about `0.6em` apart. Active page: `1px` underline in `currentColor`, `2px` below the text. Hover: the underline draws in from the left (`scaleX` 0 → 1)
* **Primary button ("Hire me"):** Full pill (`border-radius: 9999px`), Paper White fill, Darkroom Black text, padding `18px 31px` (about 126×56px). No border, no shadow. Hover: fill shifts to `#E8E8E8`. Active: `scale(0.98)`. On light surfaces, invert to a black pill with white text
* **Photo CTA button ("Contact me"):** For a call to action placed directly on a photograph. Darkroom Black fill, white text, `2px` Paper White keyline, nearly square corners (`5px`), about 154×60px
* **Accordion (services list):** Sits inside a Frost Panel on a photo. Rows separated by Ink Rules top and bottom, Oxanium `1.38rem` titles, `15px` vertical padding, a thin chevron on the right that rotates 180° when open. No cards, no shadows
* **Photo tiles:** Sharp corners (`0` radius). No borders, shadows or captions on the grid. A click opens a full-screen lightbox on Darkroom Black
* **Circular portrait:** The one exception to sharp corners. `330px` circle on desktop, cropped to head and shoulders, on the About section only
* **Video row:** A 16:9 embed on one side; a section heading and a one-sentence description on the other. The sides alternate row to row
* **Previous / Next gallery nav:** At the end of every gallery. A small body-text label ("Previous" / "Next") above the Oxanium gallery name (`_AQUA`), aligned left and right
* **Footer:** White and centered: social glyphs, then `© COPYRIGHT {YEAR} | ALL RIGHTS RESERVED` in UPPERCASE body text. Nothing else
* **Loaders:** Image placeholders in `#F2F2F2` (or Darkroom Black on dark sections) at the image's exact aspect ratio; the photo fades in over them. No spinners
* **Forms (contact page):** Label above the field, a `1px` Ink Rule bottom border only, error text below. Submit uses the primary button

## 5. Hero Section — The Index
The signature move: a full-viewport list of portfolio categories over moving footage.
- `min-height: 100dvh`, Darkroom Black base, a muted, looping background video (`object-fit: cover`) under a Photo Scrim
- A left-aligned column starting about `9vw` from the left edge, vertically centered. One item per gallery, UPPERCASE Oxanium with a leading underscore: `_AQUA`, `_AUTOMOTIVE`, `_DESERT`
- Hover or keyboard focus on an item: the background crossfades (about 500ms) from the video to that gallery's cover photo, and the item brightens from Index White to Paper White. Leaving the list brings the video back
- Every item links to its gallery. No headline, tagline or extra button in the hero body; the header's pill is the only call to action
- 6–10 items, each one or two words
- Touch screens have no hover: a tap goes straight to the gallery, and the video plays on its own

## 6. Layout Principles
- **Full-bleed first:** Hero and cover sections span the whole viewport width. Content sections use `4vw` side margins (58px at 1440px); photo grids go wider, with about `1.2vw` (17px) margins
- **Rounded bottom edge:** Full-bleed photo sections that sit on white (the services backdrop, gallery covers) get a `40px` radius on the bottom corners only. Top corners stay square
- **Thin gutters:** `16px` between tiles in grids, `20px` in gallery strips. Photos nearly touch, so a grid reads as one mosaic
- **Grid-first:** CSS Grid for every tile layout; no percentage math with `calc()`
- **Section spacing:** `clamp(3rem, 8vw, 6rem)` between content sections. Photo sections sit one gutter apart
- **Page templates:**
  - *Home:* Index hero → services (full-bleed photo, Haze Panel heading and Frost Panel accordion on the right, photo CTA below) → a strip of four portrait photos (3:4) → About (circular portrait left, heading and body right, a second paragraph full width) → footer
  - *Gallery:* cover photo (about `66dvh`, rounded bottom) → justified strip gallery whose rows vary (two landscapes; five portraits; one portrait plus one wide) → previous/next → footer
  - *Video:* Darkroom Black header band → alternating zig-zag video rows on white, about `90px` apart
  - *Client gallery (e.g. real estate):* full-bleed cover with a scrim → 3-column 4:3 grid → footer

## 7. Responsive Rules
- **Below 768px:** The header becomes the wordmark on the left (Oxanium, about `1rem`, UPPERCASE) and a two-line menu icon on the right. The icon opens a full-screen Darkroom Black overlay with the nav in Oxanium, the pill button and the social chips
- **Hero index:** Stays left-aligned at `clamp(2rem, 9vw, 2.5rem)`. An item never wraps to two lines; shorten the name instead
- **Photo strips:** Four-up becomes a 2×2 grid with `4px` gutters. Three-column grids become one column
- **Gallery strips:** One image per row at full width, `8px` apart
- **Video rows:** Stack with the video on top and the text below. No alternating on mobile
- **About:** Portrait (`180px`) centered on top, heading centered, body left-aligned
- Body text at least `1rem`; touch targets at least `44px`; no horizontal scrolling
- Test at `375px`, `390px`, `768px`, `1024px` and `1440px`

## 8. Motion & Interaction
Restrained and photographic: dissolves, not bounces.
- **Crossfades:** Background swaps in the hero index and image loads use opacity over 400–600ms, easing `cubic-bezier(0.22, 1, 0.36, 1)`
- **Gallery reveal:** Tiles fade up `12px` the first time they enter the viewport, staggered 60ms per tile, once only
- **Tile hover:** `scale(1.02)` inside an `overflow: hidden` frame over 600ms. No overlays or sliding captions
- **Buttons:** Spring press (stiffness 100, damping 20) to `scale(0.98)`
- **Lightbox:** Fade plus `scale(0.98 → 1)` over 300ms; arrow keys and swipe to move between photos
- **Video:** `muted`, `loop`, `playsinline`, with a poster image. Under `prefers-reduced-motion: reduce`, show the poster only and make crossfades instant
- Animate only `transform` and `opacity`

## 9. Anti-Patterns (Banned)
- No accent colors, gradients or tinted UI: the chrome stays monochrome
- No rounded corners, borders, drop shadows or frames on photographs (the circular About portrait is the one exception)
- No text on a photo without a scrim or a frost panel. Text may sit on background media; content never overlaps other content
- No carousels or auto-advancing sliders: galleries are scrollable grids with a lightbox
- No captions, watermarks or hover overlays cluttering the grid
- No centered hero headline or tagline: the hero is the left-aligned index
- No emojis
- No `Inter`, no generic serifs, no more than two type families
- No pure black `#000000`
- No filler UI text ("Scroll to explore", bouncing chevrons)
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Capture your story"
- No custom mouse cursors
- No `h-screen` or `100vh`: always `100dvh`
- No stock or placeholder photos on the finished site. `picsum.photos/seed/{id}/1600/1067` is for drafts only
- No reuse of the reference site's name, wordmark, photos, videos or copy
