# Premier Schools Exhibition — Landing Page

A pixel-faithful, fully responsive landing page for the **Premier Schools Exhibition**, built as a frontend coding assignment for SRV Media.

**Live:** https://frontend-task-aditya-hongal.netlify.app
**Repo:** https://github.com/adityahongal/SRV-media-frontend-adityahongal

---

## Stack

- Semantic **HTML5**
- Custom **CSS3** (Grid, Flexbox, `clamp()`, `aspect-ratio`, `scroll-snap`, custom properties)
- Vanilla **JavaScript** (ES6+, no frameworks, no build step)
- **BEM** naming convention throughout

No bundler, no preprocessor — just files served as-is.

---

## Highlights

- **Two-state header** — in-hero header that scrolls away, sticky header that fades in (via IntersectionObserver).
- **Hero dual-axis pebble marquee** — independent vertical scroll columns on desktop, horizontal track on mobile.
- **Participating schools marquee** — infinite-scroll logo strip with edge fade-out.
- **Choose-the-School slider** — grid on desktop, scroll-snap carousel with pagination dots on mobile.
- **Pinwheel layout** for Other Attractions with arrow-key-navigable tabs (Left / Right / Home / End).
- **Exhibition slider** — keyboard accessible (`ArrowLeft` / `ArrowRight`).
- **Parents' Choice video cards** — click-to-play with controls reveal.
- **Curved gallery strip** — concave lens shape via `border-radius: 40% / 60px`.
- **5-column footer** with lavender icon tiles, gradient background, white copyright strip.

---

## Accessibility (WCAG 2.2 AA targeted)

- Skip-to-content link (first focusable element)
- All sliders / tabs have ARIA roles, labels, and keyboard support
- Sticky header uses `inert` + `aria-hidden` when not visible
- All decorative SVGs marked `aria-hidden="true"`
- `prefers-reduced-motion` honoured globally
- Heading hierarchy preserved; section landmarks labelled via `aria-labelledby`
- Form is a real `<form>` with `<button type="submit">` and `required` validation

---

## Responsive breakpoints

| Range | Notes |
| --- | --- |
| `≥ 1280px` | Full desktop layout |
| `1024–1279px` | Tablet-landscape adjustments |
| `768–1023px` | Tablet — sliders activate |
| `< 768px` | Mobile — single-column, scroll-snap carousels |
| `< 430px` | Compact mobile — stacked grids |

---

## Project structure

```
.
├── index.html
├── css/                    # one stylesheet per section
├── js/                     # one script per interactive section
└── assets/                 # images, video, logo (originals gitignored)
```

---

## Run locally

```bash
# Any static server works
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Asset compression

All raw assets were compressed before commit:

| Folder | Before | After |
| --- | --- | --- |
| `assets/img/hero` | 26 MB | 397 KB |
| `assets/why-parents-choose` | 228 MB | 12 MB |
| `assets/gallery` | 6.6 MB | 1.3 MB |
| `assets/ChooseSchoolsSection` | 3.4 MB | 384 KB |
| `assets/other-attractions` | 1.95 MB | 337 KB |
| `assets/preschedule-parents` | 8.6 MB | 321 KB |

Tools: `ffmpeg` (`libx264`, CRF 28, scale 720p, `+faststart`) for video, `sips` for images.

---

## Author

**Aditya Hongal** — Frontend Developer
[GitHub](https://github.com/adityahongal) · reachme.adityah@gmail.com
