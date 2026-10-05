'use strict';

/* ── Your galleries ──────────────────────────────────────────────
   Each hero item in index.html has data-gallery="name". Clicking it
   opens that gallery's photos full screen, in this order. To add a
   photo, put it in the matching photos/ folder and list it here.
   ───────────────────────────────────────────────────────────────── */
const GALLERIES = {
  architecture: [
    'photos/architecture/ceiling.jpg',
  ],
  fashion: [
    'photos/fashion/walk-away-reeds.jpg',
    'photos/fashion/back-print-field.jpg',
    'photos/fashion/walk-toward-cap.jpg',
    'photos/fashion/walk-look-right.jpg',
    'photos/fashion/walk-glance.jpg',
    'photos/fashion/back-print-walk.jpg',
    'photos/fashion/walk-wide.jpg',
  ],
  portraits: [
    'photos/portraits/standing-reeds.jpg',
    'photos/portraits/smile.jpg',
    'photos/portraits/walk-toward.jpg',
    'photos/portraits/standing-meadow.jpg',
  ],
  product: [
    'photos/product/front-print-walk.jpg',
    'photos/product/front-print-closeup.jpg',
    'photos/product/back-print-closeup.jpg',
    'photos/product/front-print-detail.jpg',
  ],
};

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const canHover = matchMedia('(hover: hover)');

/* Background video: only loads when data-src is set and motion is allowed */
const video = document.querySelector('.hero__video');
if (video && video.dataset.src && !reduceMotion.matches) {
  video.muted = true;
  video.src = video.dataset.src;
  video.addEventListener('playing', () => video.classList.add('is-playing'), { once: true });
  video.play().catch(() => {});
}

/* Hero index: hovering an item crossfades its cover in behind the list */
const media = document.querySelector('.hero__media');
const scrim = document.querySelector('.hero__scrim');
const index = document.querySelector('.index');
const items = [...document.querySelectorAll('.index__item')];
const covers = new Map();

function buildCovers() {
  if (covers.size) return;
  for (const item of items) {
    if (!item.dataset.cover) continue;
    const img = new Image();
    img.className = 'hero__cover';
    img.alt = '';
    img.decoding = 'async';
    img.src = item.dataset.cover;
    media.insertBefore(img, scrim);
    covers.set(item, img);
  }
}

function showCover(active) {
  for (const item of items) item.classList.toggle('is-active', item === active);
  for (const [item, img] of covers) img.classList.toggle('is-active', item === active);
}

if (canHover.matches) {
  // Covers load after the page, or on the first hover if that comes sooner
  addEventListener('load', buildCovers, { once: true });
  index.addEventListener('pointerenter', buildCovers, { once: true });
}

// A short delay on leave stops the background flickering between items
let resetTimer;
for (const item of items) {
  item.addEventListener('pointerenter', () => { clearTimeout(resetTimer); showCover(item); });
  item.addEventListener('pointerleave', () => { resetTimer = setTimeout(() => showCover(null), 120); });
  item.addEventListener('focus', () => { buildCovers(); showCover(item); });
  item.addEventListener('click', (event) => {
    const photos = GALLERIES[item.dataset.gallery];
    if (!photos || !photos.length) return;
    event.preventDefault();
    openLightbox(photos, 0, item.textContent.trim());
  });
}
index.addEventListener('focusout', (event) => {
  if (!index.contains(event.relatedTarget)) showCover(null);
});

/* Lightbox */
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('.lightbox__img');
const lightboxCount = lightbox.querySelector('.lightbox__count');
const viewer = { photos: [], position: 0, label: '' };

const pad = (n) => String(n).padStart(2, '0');

function renderLightbox() {
  const { photos, position, label } = viewer;
  lightboxImg.classList.remove('is-loaded');
  lightboxImg.onload = () => lightboxImg.classList.add('is-loaded');
  lightboxImg.src = photos[position];
  lightboxImg.alt = `${label} photo ${position + 1} of ${photos.length}`.trim();
  lightboxCount.textContent = `${label} ${pad(position + 1)} / ${pad(photos.length)}`.trim();
  lightbox.classList.toggle('is-single', photos.length < 2);
  // Warm up the next photo so stepping through feels instant
  new Image().src = photos[(position + 1) % photos.length];
}

function openLightbox(photos, position = 0, label = '') {
  Object.assign(viewer, { photos, position, label });
  renderLightbox();
  if (!lightbox.open) lightbox.showModal();
}

function step(delta) {
  const total = viewer.photos.length;
  if (total < 2) return;
  viewer.position = (viewer.position + delta + total) % total;
  renderLightbox();
}

lightbox.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox__prev').addEventListener('click', () => step(-1));
lightbox.querySelector('.lightbox__next').addEventListener('click', () => step(1));

lightbox.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') step(-1);
  if (event.key === 'ArrowRight') step(1);
});

// Swipe (or drag) left/right to change photos
let swipeStart = null;
let justSwiped = false;
lightbox.addEventListener('pointerdown', (event) => {
  swipeStart = event.clientX;
  justSwiped = false;
});
lightbox.addEventListener('pointerup', (event) => {
  if (swipeStart === null) return;
  const distance = event.clientX - swipeStart;
  swipeStart = null;
  if (Math.abs(distance) > 50) {
    justSwiped = true;
    step(distance < 0 ? 1 : -1);
  }
});

// A click on the empty area around the photo closes the viewer
lightbox.addEventListener('click', (event) => {
  if (justSwiped) { justSwiped = false; return; }
  if (event.target === lightbox || event.target.classList.contains('lightbox__stage')) lightbox.close();
});

lightbox.addEventListener('close', () => {
  lightboxImg.removeAttribute('src');
});

// Photo strip tiles open in the same viewer
const tiles = [...document.querySelectorAll('.tile')];
const tilePhotos = tiles.map((tile) => tile.href);
tiles.forEach((tile, position) => {
  tile.addEventListener('click', (event) => {
    event.preventDefault();
    openLightbox(tilePhotos, position, '_SELECTED');
  });
});

/* Phone menu */
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu-toggle');
const headerSocials = document.querySelector('.site-header .socials');

menu.querySelector('.menu__bottom').append(headerSocials.cloneNode(true));

menuToggle.addEventListener('click', () => {
  menu.showModal();
  menuToggle.setAttribute('aria-expanded', 'true');
});
menu.addEventListener('close', () => menuToggle.setAttribute('aria-expanded', 'false'));
menu.querySelector('.menu__close').addEventListener('click', () => menu.close());
for (const link of menu.querySelectorAll('a')) link.addEventListener('click', () => menu.close());

matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
  if (event.matches && menu.open) menu.close();
});

/* Fade images in as they load, and reveal the strip on scroll */
for (const img of document.querySelectorAll('.tile img, .services__bg, .about__portrait')) {
  if (img.complete) continue;
  img.classList.add('fade');
  img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
  img.addEventListener('error', () => img.classList.add('is-loaded'), { once: true });
}

if (!reduceMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -10% 0px' });

  for (const el of document.querySelectorAll('[data-reveal]')) {
    el.style.setProperty('--i', el.dataset.reveal);
    el.classList.add('reveal');
    observer.observe(el);
  }
}

for (const el of document.querySelectorAll('[data-year]')) {
  el.textContent = new Date().getFullYear();
}
