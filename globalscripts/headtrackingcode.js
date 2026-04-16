<!-- Google Tag Manager (HEAD - TOP PRIORITY) -->
<script>
(function(w,d,s,l,i){
  w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TP7QF9D9');
</script>
<!-- End Google Tag Manager -->

<!-- Basic Meta -->
<meta charset="UTF-8">
<meta name="robots" content="index, follow">

<!-- Favicons (Standard) -->
<link rel="icon" type="image/x-icon" href="/assets/icons/favicon.ico">

<!-- PNG Favicons -->
<link rel="icon" type="image/png" sizes="16x16" href="{{custom_values.favicon16x16}}">
<link rel="icon" type="image/png" sizes="32x32" href="{{custom_values.favicon32x32}}">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="{{custom_values.favicon_appletouchicon}}">

<!-- Android / Chrome Icons -->
<link rel="icon" type="image/png" sizes="192x192" href="{{custom_values.favicon_androidchrome192x192}}">
<link rel="icon" type="image/png" sizes="512x512" href="{{custom_values.favicon_androidchrome512x512}}">

<!-- Open Graph Meta (Social Sharing) -->
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">

<!-- Favicon -->
<link rel="icon" type="image/png" sizes="16x16" href="{{custom_values.favicon16x16}}">
<link rel="icon" type="image/png" sizes="32x32" href="{{custom_values.favicon32x32}}">
<link rel="apple-touch-icon" href="{{custom_values.favicon_appletouchicon}}">

<!-- Android / Chrome -->
<link rel="icon" type="image/png" sizes="192x192" href="{{custom_values.favicon_androidchrome192x192}}">
<link rel="icon" type="image/png" sizes="512x512" href="{{custom_values.favicon_androidchrome512x512}}">
<style>
/* ============================================================
   AIFYZE — Design Tokens (variables.css)
   Single source of truth for every colour, size & motion value.
   ============================================================ */

:root {
  /* ── Backgrounds (slight purple tint) ── */
  --bg:            #F7F6FA;
  --bg-secondary:  #FCFBFF;
  --bg-depth:      #F0ECF8;

  /* ── Text ── */
  --foreground:    #1A1625;
  --body:          #4A4458;
  --muted:         #7A748C;

  /* ── Border ── */
  --border:        #E6E1F0;

  /* ── Accent ── */
  --accent:        #7C3AED;
  --accent-coral:  #F97066;

  /* ── Gradient ── */
  --gradient-primary: linear-gradient(135deg, #7C3AED 0%, #A78BFA 40%, #F97066 100%);

  /* ── Fonts ── */
  --font-heading:  'Playfair Display', Georgia, serif;
  --font-body:     'Inter', system-ui, sans-serif;

  /* ── Spacing Scale (8-pt) ── */
  --sp-1:  0.25rem;   /*  4px */
  --sp-2:  0.5rem;    /*  8px */
  --sp-3:  0.75rem;   /* 12px */
  --sp-4:  1rem;      /* 16px */
  --sp-5:  1.25rem;   /* 20px */
  --sp-6:  1.5rem;    /* 24px */
  --sp-8:  2rem;      /* 32px */
  --sp-10: 2.5rem;    /* 40px */
  --sp-12: 3rem;      /* 48px */
  --sp-14: 3.5rem;    /* 56px */
  --sp-16: 4rem;      /* 64px */
  --sp-20: 5rem;      /* 80px */
  --sp-24: 6rem;      /* 96px */
  --sp-32: 8rem;      /* 128px */

  /* ── Shadows ── */
  --shadow-sm:  0 1px 2px rgba(26,22,37,.05);
  --shadow-md:  0 4px 12px rgba(26,22,37,.08);
  --shadow-lg:  0 12px 32px rgba(26,22,37,.12);
  --shadow-xl:  0 24px 48px rgba(26,22,37,.16);

  /* ── Radii ── */
  --radius-sm:   0.375rem;  /*  6px */
  --radius-md:   0.5rem;    /*  8px */
  --radius-lg:   0.75rem;   /* 12px */
  --radius-xl:   1rem;      /* 16px */
  --radius-2xl:  1.25rem;   /* 20px */
  --radius-full: 9999px;

  /* ── Transitions ── */
  --ease-out:    cubic-bezier(.16,1,.3,1);
  --duration-sm: 200ms;
  --duration-md: 300ms;
  --duration-lg: 500ms;

  /* ── Z-index ── */
  --z-dropdown:  100;
  --z-sticky:    200;
  --z-overlay:   300;
  --z-modal:     400;
  --z-toast:     500;

  /* ── Container ── */
  --container-max: 80rem;  /* 1280px */
  --container-px:  1.5rem; /* 24px  */
}
/* ============================================================
   AIFYZE — Base Styles (base.css)
   Reset, utilities, animations, and shared patterns.
   ============================================================ */

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  color: var(--body);
  background: var(--bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

img, video, svg { display: block; max-width: 100%; height: auto; }

a { color: inherit; text-decoration: none; }

button {
  font: inherit;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
}

ul, ol { list-style: none; }

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--foreground);
  line-height: 1.2;
  font-weight: 500;
}

p { line-height: 1.7; }

/* ── Skip Navigation ── */
.skip-nav {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: var(--z-toast);
  background: var(--foreground);
  color: var(--bg-secondary);
  padding: var(--sp-3) var(--sp-6);
  font-size: 0.875rem;
}
.skip-nav:focus {
  left: var(--sp-4);
  top: var(--sp-4);
}

/* ── Container ── */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding-left: var(--container-px);
  padding-right: var(--container-px);
}

/* ── Section Spacing ── */
.section       { padding: var(--sp-24) 0; }
.section--sm   { padding: var(--sp-16) 0; }
.section--lg   { padding: var(--sp-32) 0; }

/* ── Background Utilities ── */
.bg-primary    { background: var(--bg); }
.bg-secondary  { background: var(--bg-secondary); }
.bg-depth      { background: var(--bg-depth); }

/* ── Text Utilities ── */
.text-foreground { color: var(--foreground); }
.text-body       { color: var(--body); }
.text-muted      { color: var(--muted); }

.label {
  display: block;
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: var(--sp-4);
}

/* ── Section Heading ── */
.section-heading {
  text-align: center;
  margin-bottom: var(--sp-16);
}
.section-heading .label { margin-bottom: var(--sp-4); }
.section-heading h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
}
.section-heading p {
  margin-top: var(--sp-4);
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
  color: var(--body);
  font-size: 0.9375rem;
}

/* ── Breadcrumbs ── */
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  font-size: 0.8125rem;
  font-family: var(--font-body);
}
.breadcrumbs a {
  color: rgba(252,251,255,.6);
  transition: color var(--duration-md);
}
.breadcrumbs a:hover { color: rgba(252,251,255,.9); }
.breadcrumbs span.separator { color: rgba(252,251,255,.3); }
.breadcrumbs span.current   { color: rgba(252,251,255,.9); }

/* ── Buttons ── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-2);
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  padding: 0.875rem 2rem;
  border-radius: var(--radius-full);
  transition: all var(--duration-md) var(--ease-out);
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid transparent;
}
.btn--primary {
  background: var(--foreground);
  color: var(--bg-secondary);
}
.btn--primary:hover { background: var(--body); }

.btn--secondary {
  background: var(--bg-secondary);
  color: var(--foreground);
}
.btn--secondary:hover { background: var(--bg); }

.btn--outline {
  border-color: var(--foreground);
  color: var(--foreground);
  background: transparent;
}
.btn--outline:hover {
  background: var(--foreground);
  color: var(--bg-secondary);
}

.btn--outline-light {
  border-color: rgba(252,251,255,.3);
  color: var(--bg-secondary);
  background: transparent;
}
.btn--outline-light:hover {
  border-color: rgba(252,251,255,.6);
  background: rgba(252,251,255,.1);
}

.btn--light {
  background: var(--bg-secondary);
  color: var(--foreground);
}
.btn--light:hover { background: var(--bg); }

/* ── Cards ── */
.card {
  background: var(--bg-secondary);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  transition: box-shadow var(--duration-md) var(--ease-out);
}
.card:hover { box-shadow: var(--shadow-md); }

/* ── Grid ── */
.grid { display: grid; gap: var(--sp-8); }
.grid--2 { grid-template-columns: repeat(2, 1fr); }
.grid--3 { grid-template-columns: repeat(3, 1fr); }
.grid--4 { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 1024px) {
  .grid--4 { grid-template-columns: repeat(2, 1fr); }
  .grid--3 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .grid--2, .grid--3, .grid--4 { grid-template-columns: 1fr; }
}

/* ── Reveal Animation ── */
.reveal {
  opacity: 1;
  transform: translateY(30px);
  transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.reveal-stagger > .reveal:nth-child(1) { transition-delay: 0ms; }
.reveal-stagger > .reveal:nth-child(2) { transition-delay: 80ms; }
.reveal-stagger > .reveal:nth-child(3) { transition-delay: 160ms; }
.reveal-stagger > .reveal:nth-child(4) { transition-delay: 240ms; }
.reveal-stagger > .reveal:nth-child(5) { transition-delay: 320ms; }
.reveal-stagger > .reveal:nth-child(6) { transition-delay: 400ms; }

/* ── Counter Sweep ── */
.counter[data-target] {
  font-variant-numeric: tabular-nums;
}

/* ── Marquee ── */
.marquee-track {
  display: flex;
  width: max-content;
}
.marquee-track:hover {
  animation-play-state: paused !important;
}
.marquee-rtl {
  animation: scroll-rtl 40s linear infinite;
}
.marquee-ltr {
  animation: scroll-ltr 40s linear infinite;
}

@keyframes scroll-rtl {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes scroll-ltr {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
/* ── Custom Tooltip ── */
[data-tooltip] {
  position: relative;
}
[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: var(--foreground, #1a1625);
  color: var(--bg-secondary, #fff);
  padding: 6px 12px;
  font-size: 0.75rem;
  font-family: var(--font-body);
  border-radius: var(--radius-lg, 8px);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: var(--z-toast, 100);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
[data-tooltip]:hover::after {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* ── FAQ Accordion ── */
.faq-item { border-bottom: 1px solid var(--border); }
.faq-btn {
  width: 100%;
  padding: var(--sp-6) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-family: var(--font-heading);
  font-size: 1.125rem;
  color: var(--foreground);
}
.faq-btn__title {
  display: block;
  padding-right: var(--sp-8);
  transition: color var(--duration-md);
}
.faq-btn:hover .faq-btn__title { color: var(--body); }
.faq-icon {
  font-size: 1.5rem;
  color: var(--muted);
  flex-shrink: 0;
  transition: transform var(--duration-sm);
  line-height: 1;
}
.faq-item.open .faq-icon { transform: rotate(45deg); }
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--duration-md) var(--ease-out), padding var(--duration-md);
}
.faq-item.open .faq-answer {
  max-height: 500px;
  padding-bottom: var(--sp-6);
}
.faq-answer p {
  font-size: 0.9375rem;
  color: var(--body);
  line-height: 1.7;
}

/* ── Testimonial Slider ── */
.testimonial-slide {
  opacity: 0;
  position: absolute;
  top: 0; left: 0; right: 0;
  transition: opacity var(--duration-lg);
  pointer-events: none;
}
.testimonial-slide.active {
  opacity: 1;
  position: relative;
  pointer-events: auto;
}

.testimonial-dots {
  display: flex;
  justify-content: center;
  gap: 0.625rem;
  margin-top: var(--sp-8);
}
.testimonial-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: var(--radius-full);
  background: var(--border);
  transition: all var(--duration-lg);
  cursor: pointer;
  border: none;
}
.testimonial-dot.active {
  background: var(--foreground);
  width: 2rem;
}

/* ── Hero Carousel ── */
.hero-slide {
  opacity: 0;
  position: absolute;
  inset: 0;
  transition: opacity 1s ease;
}
.hero-slide.active { opacity: 1; }
.hero-dots {
  display: flex;
  gap: 0.5rem;
}
.hero-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: var(--radius-full);
  background: rgba(252,251,255,.3);
  border: none;
  cursor: pointer;
  transition: all var(--duration-lg);
}
.hero-dot.active {
  background: var(--bg-secondary);
  width: 2rem;
}

/* ── Image Cover ── */
.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.aspect-4-3 {
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: var(--radius-2xl);
}
.aspect-16-10 {
  aspect-ratio: 16/10;
  overflow: hidden;
}

/* ── Hero Section Base ── */
.hero {
  position: relative;
  padding: 10rem 0 5rem;
  overflow: hidden;
}
.hero__overlay {
  position: absolute;
  inset: 0;
}
.hero__bg {
  position: absolute;
  inset: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.hero__gradient-lr {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(26,22,37,.8), rgba(26,22,37,.6) 50%, rgba(26,22,37,.3));
}
.hero__gradient-bt {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26,22,37,.5), transparent);
}
.hero__content {
  position: relative;
  z-index: 2;
}
.hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--bg-secondary);
  max-width: 48rem;
  line-height: 1.15;
}
.hero .label { color: rgba(252,251,255,.6); }
.hero p.hero__desc {
  margin-top: var(--sp-6);
  font-size: clamp(0.9375rem, 2vw, 1.125rem);
  color: rgba(252,251,255,.8);
  max-width: 40rem;
  line-height: 1.7;
}

/* ── Form Styles ── */
.form-group { margin-bottom: var(--sp-6); }
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--sp-6);
}
@media (max-width: 640px) {
  .form-row { grid-template-columns: 1fr; }
}
.form-label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--foreground);
  margin-bottom: var(--sp-2);
}
.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--foreground);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color var(--duration-md), box-shadow var(--duration-md);
  outline: none;
}
.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(124,58,237,.1);
}
.form-textarea { resize: vertical; min-height: 120px; }
.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%237A748C' d='M6 8.825L.175 3l.85-.85L6 7.125 10.975 2.15l.85.85z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.form-checkbox-wrap {
  display: flex;
  align-items: flex-start;
  gap: var(--sp-3);
}
.form-checkbox-wrap input[type="checkbox"] {
  margin-top: 0.25rem;
  accent-color: var(--accent);
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
.form-checkbox-wrap label {
  font-size: 0.8125rem;
  color: var(--body);
  line-height: 1.5;
}

/* ── Blog Card ── */
.blog-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  transition: box-shadow var(--duration-md), transform var(--duration-md);
}
.blog-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.blog-card__img {
  aspect-ratio: 16/10;
  overflow: hidden;
}
.blog-card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s var(--ease-out);
}
.blog-card:hover .blog-card__img img { transform: scale(1.05); }
.blog-card__body { padding: var(--sp-6) var(--sp-6) var(--sp-8); flex: 1; display: flex; flex-direction: column; }
.blog-card__meta {
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: var(--sp-3);
}
.blog-card__category {
  background: var(--bg-depth);
  padding: 0.125rem 0.5rem;
  border-radius: var(--radius-full);
  font-weight: 500;
}
.blog-card__title {
  font-family: var(--font-heading);
  font-size: 1.125rem;
  color: var(--foreground);
  margin-bottom: var(--sp-3);
  line-height: 1.35;
}
.blog-card__excerpt {
  font-size: 0.875rem;
  color: var(--body);
  flex: 1;
  line-height: 1.6;
}
.blog-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--foreground);
  margin-top: var(--sp-4);
  transition: gap var(--duration-md);
}
.blog-card:hover .blog-card__link { gap: var(--sp-3); }

/* ── TOC (Table of Contents) ── */
.toc {
  position: sticky;
  top: 6rem;
  align-self: flex-start;
  z-index: 1;
}
.toc__title {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: var(--sp-4);
}
.toc__list { list-style: none; }
.toc__link {
  display: block;
  padding: var(--sp-2) 0;
  font-size: 0.8125rem;
  color: var(--muted);
  border-left: 2px solid transparent;
  padding-left: var(--sp-4);
  transition: all var(--duration-md);
}
.toc__link:hover,
.toc__link.active {
  color: var(--foreground);
  border-left-color: var(--foreground);
}

/* ── Utility ── */
.text-center { text-align: center; }
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .hero { padding: 8rem 0 3rem; }
  .section { padding: var(--sp-16) 0; }
  .section--lg { padding: var(--sp-24) 0; }
  :root {
    --container-px: 1.25rem;
  }
}



</style>