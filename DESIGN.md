# Design System: Darkroom Index
**Skill:** stitch-design-taste
**Reference:** the look of [namelessproductions.org](https://namelessproductions.org/), a photography and videography portfolio. Values below were measured from the live site on 2026-10-05. This file describes design language only: use your own name, photos, videos and words.

---

## Configuration — Style Dials

| Dial | Level | Why |
|------|-------|-----|
| **Creativity** | `6` | One bold display face and a full-screen carousel of key photos; everything else steps aside for the photos |
| **Density** | `3` | Airy around text. Galleries themselves are tight mosaics with thin gutters |
| **Variance** | `5` | Even photo grids, broken up by zig-zag video rows and mixed-width gallery strips |
| **Motion Intent** | `4` | A slow, crossfading hero carousel. No perpetual micro-loops: the photos are the motion |

### What differs from the reference
- Pure black `#000000` → **Darkroom Black** `#141414` (looks the same, follows the skill's no-pure-black rule)
- Body font "Interface" (an Adobe Fonts typeface) → **Geist**, which is free on Google Fonts
- **Ash Gray** and **Geist Mono** are optional additions; the reference has neither
- The reference's hero lists every category; here the hero is a **carousel of four key photos** and the categories are listed once, in the services section (the client's choice)
- The reference's hero has no headline; here the **name and a "518 Photography" tagline sit centered over the carousel**, and About and booking are **pages of their own** rather than homepage sections, for search engines (the client's choice)

---

## 1. Visual Theme & Atmosphere
A cinematic dark frame for full-color photography. Every page sits on Darkroom Black from top to bottom, with white type and one blue accent, so the work supplies every bit of color and reads like a gallery wall at night. Pages open on full-viewport dark media (a slow carousel of key photos) with white type laid straight over it; everything below the fold stays on the same black. A squared, technical display face gives the brand an expedition-gear feel, like the readout on a drone controller or a camera's top screen. Category names carry a leading underscore (`_MOUNTAINS`, `_AUTOMOTIVE`) and read like folder names on a memory card. Chrome is minimal, photos are big, gutters are thin. The overall impression: a field photographer's contact sheet, cleaned up for a gallery wall.

## 2. Color Palette & Roles
- **Darkroom Black** (#141414) — The page, on every page: hero, header band, sections, lightbox backdrop
- **Surface** (#202020) — Cards and image placeholders, one step up from the page
- **Paper White** (#FFFFFF) — Headings, body text and icons; the booking embed's frame (Google's calendar is white)
- **Index White** (rgba(255,255,255,0.85)) — Secondary white text on dark, such as the photo viewer's counter
- **Track White** (rgba(255,255,255,0.35)) — The unfilled part of the carousel's progress bars
- **Title Shade** (rgba(10,10,10,0.55), fading to clear) — A soft oval of shade behind the name centered on the hero, full strength across its middle half, so the white title keeps at least 4.5:1 contrast on bright photos without boxing it in
- **Photo Scrim** (rgba(10,10,10,0.6), fading to clear) — Fades over the top third and bottom half of hero photos so the white header and caption stay readable while the middle stays untouched. The top fade holds full strength just under the top bar, behind the header, then fades out. On a cover photo with no fades, use a flat 0.15 and raise it on bright photos until white text keeps at least 3:1 contrast
- **Frost Panel** (rgba(255,255,255,0.45)) — Translucent panel behind text blocks placed over a photograph (gallery covers, if used). Over dark or moody photos raise it to 0.7, or it reads as a grey box
- **Haze Panel** (rgba(240,240,240,0.19)) — Lighter tint behind a single heading, only over a bright part of a photograph. Anywhere darker, use the Frost Panel so dark text stays readable
- **Soft Ink** (#A3A3A3) — Secondary copy (About text, section intros, page-link descriptions, footer), so headings carry the contrast
- **Hairline** (rgba(255,255,255,0.14)) — Dividers between list rows, page links and the footer
- **Ash Gray** (#8A8A8A) — *Optional.* Captions, metadata, disabled states. Use sparingly

### Accent
- **Studio Blue** (#1E40AF) — The one UI color, a semi-dark blue, for fills: the primary pill button, the contact card and the bar that draws in under a category name. Hover on blue fills: **Deep Blue** (#172F8A)
- **Sky Blue** (#7B96FF) — The same blue lifted for text and icons on black, where Studio Blue would be too dark to read: eyebrow labels, small arrow links, hover states on page links and the footer glyph, and the end of a display heading's gradient
- **Blue Glow** (rgba(30,64,175,0.35), fading to clear) — A soft radial glow behind inner-page titles, so the page head isn't a flat black slab
- It never goes on or over a photograph except as that short bar under a tile's name. Everything else stays monochrome so the photos keep the color

### Banned Colors
- Any second accent, or Studio Blue on text over a photo: one UI color only
- Purple/blue neon gradients and glows
- Pure black `#000000`: use Darkroom Black
- Tinted grays: every neutral stays true gray (equal R, G, B)
- White or light backgrounds behind content: the only white surface is Google's booking calendar

## 3. Typography Rules
- **Display: `Oxanium` 400 and 600** — Squared, technical letterforms. Track-tight `-0.02em`. 400 for the wordmark, carousel captions, tile names and page-link titles; 600 (`.display`) for the hero name, page titles and section headings, tracked `-0.03em`, with a gradient from Paper White at 30% into Sky Blue at the end (`linear-gradient(100deg)` clipped to the text)
  - Wordmark: `1.75rem`, UPPERCASE
  - Hero name: 600, `clamp(3.5rem, 10vw, 9rem)` (144px at 1440px), UPPERCASE, line-height `0.9`, plain white. The tagline under it is body font 700, UPPERCASE, `clamp(0.875rem, 1.2vw, 1.125rem)`, tracking `0.32em`
  - Page titles (inner pages): 600, `clamp(3rem, 7.5vw, 6.5rem)`, line-height `1`, gradient
  - Carousel captions: `clamp(1.5rem, 2.4vw, 2.25rem)` (36px at 1440px), UPPERCASE, leading underscore, a small trailing arrow
  - Section headings: 600, `clamp(2.5rem, 5vw, 4.5rem)`, line-height `1`, gradient, under an eyebrow. Sentence case is welcome; the casual voice plays against the technical face
  - Sub-headings and accordion titles: `1.38rem` (22px), line-height `1.35`
- **Body: `Geist` 400** — `1.0625rem` (17px), line-height `1.65`, no extra tracking, max-width `65ch`, left-aligned
- **Navigation:** Oxanium 400, the wordmark's face, UPPERCASE, `0.9375rem`, tracking `0.1em`, links `clamp(1.5rem, 3vw, 2.5rem)` apart
- **Buttons:** body font 700, UPPERCASE, `0.8125rem`, tracking `0.14em`
- **Eyebrow labels:** body font 700, UPPERCASE, `0.75rem`, tracking `0.2em`, 60% opacity, above section headings and as the contact card's label
- **Mono (optional): `Geist Mono`** `0.8125rem` — Camera metadata captions only, e.g. `f/2.8 · 1/500s · ISO 200`
- **Loading:** `https://fonts.googleapis.com/css2?family=Oxanium:wght@400&family=Geist:wght@400;700&family=Geist+Mono&display=swap`

### Banned Fonts
- `Inter`; generic serifs (`Times New Roman`, `Georgia`, `Garamond`); default system stacks for headings
- A third family. Two families only, plus the optional mono

## 4. Component Stylings
* **Top bar:** A thin Darkroom Black band across the very top, `40px` tall (`44px` on phones), above the header. The phone, then the two emails (Ian's, then Huntur's) in `0.8125rem` body text, Index White, each with a `13px` line icon, centered on one line and split by short Track White rules. Below `560px` wide it becomes two `40px` lines, the phone over both emails (`80px` in all); below `360px`, each email gets a line of its own too (`120px`). Each number and address is a `tel:`/`mailto:` link that goes Paper White and underlined on hover. It scrolls away with the page
* **Header (over dark media):** Transparent, one row with three zones: social chips on the left, the nav in the center, primary button on the right. About `2.5rem` top padding. All white, sitting on whatever media is behind it. On the homepage the wordmark is left out, since the name is centered on the carousel below
* **Header (inner pages):** The same three zones, with the wordmark back above the nav, linking home. The current page's nav link keeps its underline
* **Sticky glass bar:** Once the header scrolls off the top of the window it comes back as a slim fixed bar: Darkroom Black at 72% with `blur(18px)`, a Hairline underneath, the wordmark (`1.125rem`) beside the nav, a `36px` social chip and a `40px` pill. It slides down from above over 400ms. On phones it is the wordmark and the menu icon
* **Page head (inner pages):** Under the header, the page's display title centered on a Blue Glow, with an optional one-sentence intro in Soft Ink under it (`52ch` max)
* **Social chips:** `44px` outline circles (1px white at 40%) holding `16px` white glyphs; on hover they fill Paper White with a black glyph, `10px` apart. In the footer they invert to bare black glyphs (`22px`), centered
* **Nav links:** UPPERCASE body text, about `0.6em` apart. Hover and keyboard focus: a `1px` underline in `currentColor`, `2px` below the text, draws in from the left (`scaleX` 0 → 1)
* **Carousel controls:** Bottom right of the hero. One thin `2px` bar per photo in Track White inside a `44px`-tall button; the active bar fills with Paper White over the slide's display time. A pause/play icon button sits after the bars. No arrows, no numbered dots
* **Primary button ("Book a shoot"):** Full pill (`border-radius: 9999px`), Studio Blue fill, Paper White text, padding `15px 26px`. No border, no shadow. Hover: Deep Blue. Active: `scale(0.98)`. The same on dark and light surfaces
* **Contact card ("Contact us"):** The photo CTA style opened up into a short list. Studio Blue fill, Paper White text, `20px` corners. On the homepage it is a full-width band under the category tiles: the label on the left and the four links in one row (two per row on tablets, stacked on phones). On the booking page it is a card centered under the calendar. An uppercase "CONTACT US" label, then one row each for the phone, Ian's email, Huntur's email and the Instagram message: an `18px` line icon and body text, at least `48px` tall, split by Track White rules
* **Category tiles (services):** One cover photo per category in a 5-column grid of 4:5 tiles with `20px` corners (3 columns on tablets, 2 on phones). A dark fade over the bottom half carries the name in Oxanium (`_ARCHITECTURE`, uppercase, white). On hover the photo zooms to `1.05`, a `2rem` Studio Blue bar draws in under the name and a one-line description unfolds beneath it (phones show the name only). The tile opens that category's gallery in the lightbox
* **Photo tiles:** `20px` corners (`14px` on phones), no borders, shadows or captions. A click opens a full-screen lightbox on Darkroom Black
* **Mosaic (Selected work):** A 6-column grid of near-square cells (`grid-auto-rows` = cell width × 1.1, `grid-auto-flow: dense`). Items span cells: big (2×2), wide (2×1), tall (1×2) or single. Choose spans so the grid fills exactly with no holes (13 photos = 24 cells). Phones use 2 columns; tablets 4
* **Booking embed:** The site's one form of booking, on a page of its own (Book a shoot) under the page head. Google Calendar's booking page in a full-width iframe, white with `20px` corners on the black page. Its height follows its own width: about `690px`, and `1150px` below `600px` wide, where Google stacks it into one column. Underneath, centered to match Google's centered calendar: a text link to open the booking page in a new tab, then the contact card. The header's pill button links to this page
* **Page links:** At the end of every page, two links to the site's other pages, side by side (stacked on phones). Each is an Oxanium title (`clamp(1.75rem, 2.8vw, 2.5rem)`), a one-line body description (`1rem`) and a small arrow on the right, between Ink Rules. Hover: the title underlines and the arrow nudges right
* **Circular portrait:** The one exception to sharp corners. `330px` circle on desktop, cropped to head and shoulders, on the Behind the Lens page only
* **Video row:** A 16:9 embed on one side; a section heading and a one-sentence description on the other. The sides alternate row to row
* **Previous / Next gallery nav:** At the end of every gallery. A small body-text label ("Previous" / "Next") above the Oxanium gallery name (`_AQUA`), aligned left and right
* **Footer:** Centered under a Hairline: a white social glyph, then `© COPYRIGHT {YEAR} | ALL RIGHTS RESERVED` in small (`0.75rem`) tracked UPPERCASE Soft Ink. Nothing else
* **Section head:** Above each homepage section: an eyebrow ("Recent shoots") over a display heading ("Selected work") on the left, and a one-line intro or a small uppercase arrow link on the right. A Blue Glow sits behind the heading, like the inner-page titles
* **Loaders:** Image placeholders in Surface at the image's exact aspect ratio; the photo fades in over them. No spinners
* **Forms (contact page):** Label above the field, a `1px` Ink Rule bottom border only, error text below. Submit uses the primary button

## 5. Hero Section — Featured Carousel
The first impression: four key photos, one at a time, full screen.
- `min-height: 100dvh`, Darkroom Black base. Each photo fills the frame (`object-fit: cover`) under the Photo Scrim fades
- Four photos from four different categories, chosen so the subject stays in frame in both a wide desktop crop and a tall phone crop. The site's main cover photo goes first
- Each photo shows for 6.5 seconds, then crossfades (1.2s) to the next, looping. While it shows, it eases out of a slight zoom (`scale(1.06)` → `1` over 8s)
- Bottom left: the photo's category as a caption link (`_ENGAGEMENTS →`) that opens that gallery. Bottom right: the carousel controls
- Centered across the photos: the name in Oxanium with "518 PHOTOGRAPHY" under it, on the Title Shade. It is the page's `h1` and lets clicks and swipes through to the carousel. It sits a little above the middle (`36%` from the top, and never closer than `14rem`, or `10.75rem` on phones, so it clears the header on short screens) because the key photos' faces sit at or just below the middle. When choosing new key photos, keep faces out of that band
- No other headline, slogan or button in the hero body; the header's pill is the only call to action
- Clicking a bar jumps to that photo. On touch screens, swiping left or right changes photos. Keyboard focus inside the carousel pauses it until the play button is pressed

## 6. Layout Principles
- **Full-bleed first:** Hero and cover sections span the whole viewport width. Content sections use `4vw` side margins (58px at 1440px); photo grids go wider, with about `1.2vw` (17px) margins
- **Thin gutters:** `16px` between tiles in grids, `20px` in gallery strips. Photos nearly touch, so a grid reads as one mosaic
- **Grid-first:** CSS Grid for every tile layout; no percentage math with `calc()`
- **Section spacing:** `clamp(3rem, 8vw, 6rem)` between content sections. Photo sections sit one gutter apart
- **Page templates:**
  - *Home:* Top bar → carousel hero with the centered name → "Our Portfolio" section head and the 10 category tiles, with the contact band under them → "Selected work" section head and the mosaic → page links (Behind the Lens, Book a shoot) → footer
  - *Behind the Lens:* Top bar → header → page head → circular portrait left, body right → page links (Our Portfolio, Book a shoot) → footer
  - *Book a shoot:* Top bar → header → page head with a one-sentence intro → booking embed → new-tab link and contact card → page links (Our Portfolio, Behind the Lens) → footer
  - *Gallery:* cover photo (about `66dvh`) → justified strip gallery whose rows vary (two landscapes; five portraits; one portrait plus one wide) → previous/next → footer
  - *Video:* header → alternating zig-zag video rows, about `90px` apart
  - *Client gallery (e.g. real estate):* full-bleed cover with a scrim → 3-column 4:3 grid → footer

## 7. Responsive Rules
- **Below 768px:** The header becomes the wordmark on the left (Oxanium, about `1rem`, UPPERCASE; left out on the homepage, where the name is on the carousel) and a two-line menu icon on the right. The icon opens a full-screen Darkroom Black overlay with the nav in Oxanium (the current page underlined), the pill button and the social chips
- **Hero carousel:** The caption moves up to sit above the controls, both left-aligned; the progress bars shrink to `32px`. A caption never wraps to two lines; shorten the category name instead
- **Photo strips:** Four-up becomes a 2×2 grid with `4px` gutters. Three-column grids become one column
- **Gallery strips:** One image per row at full width, `8px` apart
- **Video rows:** Stack with the video on top and the text below. No alternating on mobile
- **Behind the Lens:** Portrait (`180px`) centered on top, body left-aligned under it
- **Page links:** One per row, full width
- Body text at least `1rem`; touch targets at least `44px`; no horizontal scrolling
- Test at `375px`, `390px`, `768px`, `1024px` and `1440px`

## 8. Motion & Interaction
Restrained and photographic: dissolves, not bounces.
- **Crossfades:** The hero carousel crossfades over 1.2s; image loads fade in over 400–600ms. Easing `cubic-bezier(0.22, 1, 0.36, 1)`
- **Hero intro:** On load the name rises `28px` and fades in over 1.1s, the tagline 180ms behind it; the header, caption and controls fade in after 400ms
- **Hero parallax:** As the page scrolls, the hero photos move at 0.3× the scroll distance (a `translate3d` on the slides, set by script on `requestAnimationFrame`), only while the hero is on screen
- **Scroll reveal:** Section heads, tiles, mosaic items and page links fade up `24px` the first time they enter the viewport, staggered 80ms per item, once only
- **Tile hover:** `scale(1.04)` inside an `overflow: hidden` frame over 900ms, plus a spotlight: a soft white radial light (`260px`) that follows the pointer across the tile and a 1px Sky Blue inner edge, on hover-capable devices only. Category tiles also unfold their one-line description
- **Buttons:** Spring press (stiffness 100, damping 20) to `scale(0.98)`
- **Lightbox:** Fade plus `scale(0.98 → 1)` over 300ms; each photo also eases in from `0.98`. On wide screens the previous and next photos peek in from the edges (`16vw`, dimmed to 45%, rounded) and a click on one steps to it; a thin Sky Blue progress bar under the photo shows the position in the gallery. Arrow keys and swipe move between photos
- **Carousel:** Pauses while the browser tab is hidden. Under `prefers-reduced-motion: reduce`, it starts paused, with no zoom, instant crossfades, no parallax and no intro animation
- **Video (if a reel is added):** `muted`, `loop`, `playsinline`, with a poster image. Under `prefers-reduced-motion: reduce`, show the poster only
- Animate only `transform` and `opacity`

## 9. Anti-Patterns (Banned)
- No second accent color and no gradients in the chrome: Studio Blue is the only color the UI adds
- No borders, drop shadows or frames on photographs. Tiles share the `20px` card radius; the circular About portrait is the one other shape
- No text on a photo without a scrim or a frost panel. Text may sit on background media; content never overlaps other content
- One carousel only, in the hero, always with a visible pause control. Galleries stay scrollable grids with a lightbox
- No captions, watermarks or hover overlays cluttering the grid
- One hero headline only: the name and its tagline. No slogans, extra buttons or text blocks over the photos
- No emojis
- No `Inter`, no generic serifs, no more than two type families; Oxanium 600 only on display headings, never on body or labels
- No pure black `#000000`
- No filler UI text ("Scroll to explore", bouncing chevrons)
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Capture your story"
- No custom mouse cursors
- No `h-screen` or `100vh`: always `100dvh`
- No stock or placeholder photos on the finished site. `picsum.photos/seed/{id}/1600/1067` is for drafts only
- No reuse of the reference site's name, wordmark, photos, videos or copy
