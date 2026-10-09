'use strict';

/* ── Your galleries ──────────────────────────────────────────────
   Links on the homepage with data-gallery="name" (the carousel
   captions and the "See photos" links) open that gallery full screen,
   in this order. To add a photo, put it in the matching photos/
   folder and list it here.
   ───────────────────────────────────────────────────────────────── */
const GALLERIES = {
  architecture: [
    'photos/architecture/ceiling.jpg',
    'photos/architecture/window-ivy.jpg',
  ],
  automotive: [
    'photos/automotive/bmw-front.jpg',
  ],
  aviation: [
    'photos/aviation/taxiway-sign.jpg',
    'photos/aviation/walk-sign.jpg',
    'photos/aviation/window-wipe.jpg',
    'photos/aviation/wing-windshield.jpg',
    'photos/aviation/canopy-wipe.jpg',
    'photos/aviation/underside-wipe.jpg',
    'photos/aviation/towel-closeup.jpg',
    'photos/aviation/pose-spray.jpg',
    'photos/aviation/portrait-white-tee.jpg',
    'photos/aviation/portrait-cap.jpg',
  ],
  engagements: [
    'photos/engagements/proposal-surprise.jpg',
    'photos/engagements/proposal-kneel.jpg',
    'photos/engagements/hug-kneeling.jpg',
    'photos/engagements/hug-film.jpg',
    'photos/engagements/ring-pinky.jpg',
    'photos/engagements/ring-hands.jpg',
    'photos/engagements/couple-portrait.jpg',
  ],
  fashion: [
    'photos/fashion/walk-away-reeds.jpg',
    'photos/fashion/walk-toward-cap.jpg',
    'photos/fashion/walk-glance.jpg',
  ],
  landscape: [
    'photos/landscape/sunset-sun.jpg',
    'photos/landscape/beach-panorama.jpg',
    'photos/landscape/sunset-clouds.jpg',
    'photos/landscape/marsh-boardwalk.jpg',
    'photos/landscape/meadow-fog.jpg',
  ],
  macro: [
    'photos/macro/fern-dark.jpg',
    'photos/macro/fern-drops.jpg',
    'photos/macro/fern-fronds.jpg',
    'photos/macro/fern-stem.jpg',
  ],
  portraits: [
    'photos/portraits/walk-toward.jpg',
    'photos/portraits/golden-closeup.jpg',
    'photos/portraits/golden-smile-river.jpg',
    'photos/portraits/golden-serious.jpg',
    'photos/portraits/golden-standing.jpg',
    'photos/portraits/laugh-green.jpg',
    'photos/portraits/friends-talking.jpg',
    'photos/portraits/swimmers.jpg',
    'photos/portraits/autumn-field.jpg',
    'photos/portraits/field-from-behind.jpg',
    'photos/portraits/backpack-profile.jpg',
    'photos/portraits/hand-grass.jpg',
    'photos/portraits/flowers-wide.jpg',
    'photos/portraits/flowers-pockets.jpg',
    'photos/portraits/flowers-side.jpg',
    'photos/portraits/flowers-closeup.jpg',
    'photos/portraits/hair-flip-lake.jpg',
    'photos/portraits/boardwalk-marsh-profile.jpg',
    'photos/portraits/boardwalk-seated-down.jpg',
    'photos/portraits/boardwalk-seated-close.jpg',
    'photos/portraits/boardwalk-seated-bw.jpg',
    'photos/portraits/head-back-smile.jpg',
    'photos/portraits/head-back-profile.jpg',
    'photos/portraits/over-shoulder-smile.jpg',
    'photos/portraits/boardwalk-rail-smile.jpg',
    'photos/portraits/sunlit-eyes-closed.jpg',
    'photos/portraits/boardwalk-rail-sun.jpg',
    'photos/portraits/tree-lean-pond.jpg',
    'photos/portraits/profile-backlit.jpg',
    'photos/portraits/hand-on-hip-profile.jpg',
    'photos/portraits/foliage-profile.jpg',
    'photos/portraits/trail-hands-on-hips.jpg',
  ],
  product: [
    'photos/product/front-print-walk.jpg',
    'photos/product/back-print-closeup.jpg',
    'photos/product/front-print-detail.jpg',
  ],
  sports: [
    'photos/sports/qb-run-color.jpg',
    'photos/sports/number-2-back.jpg',
    'photos/sports/line-of-scrimmage.jpg',
    'photos/sports/number-14.jpg',
    'photos/sports/number-24.jpg',
    'photos/sports/number-13-run.jpg',
    'photos/sports/team-line.jpg',
    'photos/sports/three-under-lights.jpg',
    'photos/sports/qb-run-bw.jpg',
    'photos/sports/ball-carrier.jpg',
    'photos/sports/qb-scramble.jpg',
    'photos/sports/number-21-back.jpg',
    'photos/sports/walk-to-line.jpg',
    'photos/sports/collage-trio.jpg',
    'photos/sports/collage-throw.jpg',
  ],
};

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

/* Hero carousel: rotates through the key photos. It starts paused for
   people who prefer reduced motion; the dots and swipes still work.
   Only the homepage has one. */
const hero = document.querySelector('.hero');
if (hero) {
  const SLIDE_MS = 6500;
  const slidesBox = hero.querySelector('.slides');
  const slides = [...hero.querySelectorAll('.slide')];
  const dots = [...hero.querySelectorAll('.dot')];
  const playToggle = hero.querySelector('.carousel-toggle');
  let currentSlide = 0;
  let playing = !reduceMotion.matches;
  let slideTimer;

  hero.style.setProperty('--slide-ms', `${SLIDE_MS}ms`);

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === currentSlide);
      slide.inert = i !== currentSlide;
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === currentSlide);
      if (i === currentSlide) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    scheduleNextSlide();
  }

  function scheduleNextSlide() {
    clearTimeout(slideTimer);
    hero.classList.remove('is-playing');
    if (!playing || document.hidden) return;
    void hero.offsetWidth; // restarts the progress bar on the active dot
    hero.classList.add('is-playing');
    slideTimer = setTimeout(() => showSlide(currentSlide + 1), SLIDE_MS);
  }

  function setPlaying(on) {
    playing = on;
    playToggle.classList.toggle('is-paused', !on);
    playToggle.setAttribute('aria-label', on ? 'Pause slideshow' : 'Play slideshow');
    // Screen readers announce slide changes only while it's paused
    slidesBox.setAttribute('aria-live', on ? 'off' : 'polite');
    scheduleNextSlide();
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => {
    if (i !== currentSlide) showSlide(i);
  }));
  playToggle.addEventListener('click', () => setPlaying(!playing));
  document.addEventListener('visibilitychange', scheduleNextSlide);

  // Keyboard focus in the carousel stops it, so nothing moves while someone uses it
  hero.addEventListener('focusin', (event) => {
    if (playing && event.target.matches(':focus-visible')) setPlaying(false);
  });

  // Swipe left or right on touch screens
  let heroSwipe = null;
  hero.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse') heroSwipe = { x: event.clientX, y: event.clientY };
  });
  hero.addEventListener('pointerup', (event) => {
    if (!heroSwipe) return;
    const dx = event.clientX - heroSwipe.x;
    const dy = event.clientY - heroSwipe.y;
    heroSwipe = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) showSlide(currentSlide + (dx < 0 ? 1 : -1));
  });
  hero.addEventListener('pointercancel', () => { heroSwipe = null; });

  setPlaying(playing);
}

/* Lightbox (homepage) */
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
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

  // Carousel captions and the services "See photos" links open their gallery
  function openGallery(event) {
    const name = event.currentTarget.dataset.gallery;
    const photos = GALLERIES[name];
    if (!photos || !photos.length) return;
    event.preventDefault();
    openLightbox(photos, 0, `_${name.toUpperCase()}`);
  }
  for (const link of document.querySelectorAll('[data-gallery]')) link.addEventListener('click', openGallery);

  // Mosaic tiles open in the same viewer
  const tiles = [...document.querySelectorAll('.tile')];
  const tilePhotos = tiles.map((tile) => tile.href);
  tiles.forEach((tile, position) => {
    tile.addEventListener('click', (event) => {
      event.preventDefault();
      openLightbox(tilePhotos, position, '_SELECTED');
    });
  });
}

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

/* Hero photos scroll a little slower than the page (parallax). Only while
   the hero is on screen, and not for people who prefer reduced motion. */
if (hero && !reduceMotion.matches) {
  const slidesBox = hero.querySelector('.slides');
  let ticking = false;
  const update = () => {
    ticking = false;
    const y = window.scrollY;
    if (y < hero.offsetHeight) slidesBox.style.setProperty('--parallax', `${Math.round(y * 0.3)}px`);
  };
  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
}

/* Fade images in as they load, and reveal sections on scroll */
for (const img of document.querySelectorAll('.tile img, .category img, .about__portrait')) {
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
  }, { rootMargin: '0px 0px -8% 0px' });

  for (const el of document.querySelectorAll('[data-reveal]')) {
    el.style.setProperty('--i', el.dataset.reveal);
    el.classList.add('reveal');
    observer.observe(el);
  }
}

for (const el of document.querySelectorAll('[data-year]')) {
  el.textContent = new Date().getFullYear();
}
