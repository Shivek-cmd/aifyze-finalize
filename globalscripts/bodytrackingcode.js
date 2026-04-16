<!-- Google Tag Manager (noscript) -->
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TP7QF9D9"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
<script>

// Run script multiple ways to ensure it executes
function initializeAifyzeScript() {
  // If this runs before DOMContentLoaded (common in some GoHighLevel placements),
  // bail out so the later DOMContentLoaded/load triggers can initialize correctly.
  if (document.readyState === 'loading') return;

  if (window.aifyzeScriptInitialized) return;
  window.aifyzeScriptInitialized = true;

  /* ── 1. Header: scroll class, mobile drawer, services toggle ── */
  const header = document.getElementById('site-header');
  const burger = document.querySelector('.header__burger');
  const drawer = document.querySelector('.header__drawer');
  const backdrop = document.querySelector('.header__backdrop');
  const drawerClose = document.querySelector('.header__drawer-close');
  const servicesToggle = document.querySelector('.header__drawer-services-toggle');
  const servicesPanel = document.querySelector('.header__drawer-services');

  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  function openDrawer() {
    if (!drawer) return;
    burger?.classList.add('active');
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    backdrop?.classList.add('open');
    burger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer) return;
    burger?.classList.remove('active');
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    backdrop?.classList.remove('open');
    burger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (burger) burger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  if (drawer) {
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  if (servicesToggle && servicesPanel) {
    servicesToggle.addEventListener('click', () => {
      const isOpen = servicesPanel.classList.toggle('open');
      servicesToggle.classList.toggle('active', isOpen);
      servicesToggle.setAttribute('aria-expanded', isOpen);
      servicesPanel.setAttribute('aria-hidden', !isOpen);
    });
  }

  /* ── 2. IntersectionObserver — Reveal on Scroll ── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ── 3. Counter Sweep ── */
  const counters = document.querySelectorAll('.counter[data-target]');

  const runCounter = (el) => {
    if (el.dataset.counted) return;
    el.dataset.counted = "true";

    const target = el.getAttribute('data-target');
    const suffix = el.getAttribute('data-suffix') || '';

    // 🔥 Skip animation for 24/7
    if (suffix === '/7') {
      el.textContent = target + suffix;
      return;
    }

    const numeric = parseInt(target, 10);

    let current = 0;
    const step = Math.max(1, Math.ceil(numeric / 60));

    const timer = setInterval(() => {
      current += step;
      if (current >= numeric) {
        current = numeric;
        clearInterval(timer);
      }
      el.textContent = current + suffix;
    }, 25);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(el => {
    observer.observe(el);
    if (el.getBoundingClientRect().top < window.innerHeight) {
      runCounter(el);
    }
  });

  /* ── 4. FAQ Accordion ── */
  const setFaqButtonDefaults = () => {
    document.querySelectorAll('.faq-btn, .faq-item__q').forEach((btn) => {
      if (!btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded', 'false');
      if (btn.tagName === 'BUTTON') btn.type = 'button';
    });
  };

  const toggleFaqItem = (btn) => {
    const item = btn.closest('.faq-item');
    if (!item) return;
    const wasOpen = item.classList.contains('open');
    const parent = item.closest('.faq-list, .contact-faq__list');
    parent?.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
    btn.setAttribute('aria-expanded', String(!wasOpen));
  };

  // Use a single delegated handler to avoid double-toggling (button + container listeners).
  setFaqButtonDefaults();
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const btn = target?.closest('.faq-btn, .faq-item__q');
    if (!btn) return;

    const item = btn.closest('.faq-item');
    if (!item) return;

    if (!btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded', 'false');
    if (btn.tagName === 'BUTTON') btn.type = 'button';

    event.preventDefault();
    toggleFaqItem(btn);
  });

  /* ── 5. Testimonial Slider ── */
  const testimonialWrapper = document.querySelector('.testimonial-wrapper');
  if (testimonialWrapper) {
    const slides = testimonialWrapper.querySelectorAll('.testimonial-slide');
    const dots = testimonialWrapper.querySelectorAll('.testimonial-dot');
    let current = 0;
    let autoTimer;

    function showSlide(index) {
      slides.forEach((s, i) => s.classList.toggle('active', i === index));
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
      current = index;
    }

    function nextSlide() {
      showSlide((current + 1) % slides.length);
    }

    function startAuto() {
      autoTimer = setInterval(nextSlide, 6000);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(autoTimer);
        showSlide(i);
        startAuto();
      });
    });

    showSlide(0);
    startAuto();
  }

  /* ── 6. Hero Carousel ── */
  const heroCarousel = document.querySelector('.hero-carousel');
  if (heroCarousel) {
    const heroSlides = heroCarousel.querySelectorAll('.hero-slide');
    const heroDots = heroCarousel.querySelectorAll('.hero-dot');
    let heroIndex = 0;
    let heroTimer;

    function showHeroSlide(index) {
      heroSlides.forEach((s, i) => s.classList.toggle('active', i === index));
      heroDots.forEach((d, i) => d.classList.toggle('active', i === index));
      heroIndex = index;
    }

    function nextHeroSlide() {
      showHeroSlide((heroIndex + 1) % heroSlides.length);
    }

    heroDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(heroTimer);
        showHeroSlide(i);
        heroTimer = setInterval(nextHeroSlide, 3000);
      });
    });

    showHeroSlide(0);
    heroTimer = setInterval(nextHeroSlide, 3000);
  }

  /* ── 7. Blog Listing: Search, Category, Tag Filters, Sort ── */
  const blogSearchInput = document.getElementById('blog-search');
  const blogSortButtons = document.querySelectorAll('.blog-filters__sort-btn');
  const blogCategoryButtons = document.querySelectorAll('.blog-filters__cat-btn');
  const blogTagButtons = document.querySelectorAll('.blog-filters__tag-btn');
  const blogClearFiltersBtn = document.getElementById('blog-clear-filters');
  const blogFilterStatus = document.getElementById('blog-filter-status');
  const blogFilterCount = document.getElementById('blog-filter-count');
  const blogCards = Array.from(document.querySelectorAll('.blog-card'));
  const blogGrid = document.querySelector('.blog-grid');

  const normalizeText = (value) => (value || '').toString().trim().toLowerCase();
  const parseTags = (value) => normalizeText(value).split(',').map(tag => tag.trim()).filter(Boolean);
  const parseCategory = (value) => normalizeText(value);
  const parseDate = (card) => {
    const dateValue = card.dataset.date;
    const parsed = new Date(dateValue);
    return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
  };

  const filterState = {
    search: '',
    category: 'all',
    tags: new Set(),
    sort: 'latest'
  };

  const updateFilterDisplay = () => {
    const total = blogCards.length;
    const visible = blogCards.filter(card => card.style.display !== 'none').length;
    const hasActiveFilters = filterState.search || filterState.category !== 'all' || filterState.tags.size > 0;

    if (!blogFilterStatus || !blogFilterCount) return;
    if (visible === total && !hasActiveFilters) {
      blogFilterStatus.style.display = 'none';
      return;
    }

    blogFilterStatus.style.display = 'flex';
    blogFilterCount.textContent = visible === 1 ? '1 article found' : `${visible} articles found`;
  };

  const sortCards = () => {
    if (!blogGrid) return;
    const sorted = [...blogCards].sort((a, b) => {
      const aDate = parseDate(a);
      const bDate = parseDate(b);
      return filterState.sort === 'oldest' ? aDate - bDate : bDate - aDate;
    });
    sorted.forEach(card => blogGrid.appendChild(card));
  };

  const applyBlogFilters = () => {
    const query = normalizeText(filterState.search);
    const category = filterState.category;
    const selectedTags = Array.from(filterState.tags);

    blogCards.forEach(card => {
      const title = normalizeText(card.querySelector('.blog-card__title')?.textContent);
      const excerpt = normalizeText(card.querySelector('.blog-card__excerpt')?.textContent);
      const tags = parseTags(card.dataset.tags);
      const cardCategory = parseCategory(card.dataset.category);
      const textContent = `${title} ${excerpt} ${tags.join(' ')}`;

      const matchesSearch = !query || textContent.includes(query);
      const matchesCategory = category === 'all' || cardCategory === category;
      const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => tags.includes(tag));

      const shouldShow = matchesSearch && matchesCategory && matchesTags;
      card.style.display = shouldShow ? '' : 'none';
    });

    sortCards();
    updateFilterDisplay();
  };

  const setActiveSortButton = (button) => {
    blogSortButtons.forEach(btn => btn.classList.toggle('active', btn === button));
  };

  const setActiveCategoryButton = (button) => {
    blogCategoryButtons.forEach(btn => btn.classList.toggle('active', btn === button));
  };

  if (blogSearchInput) {
    blogSearchInput.addEventListener('input', (event) => {
      filterState.search = event.target.value;
      applyBlogFilters();
    });
  }

  blogSortButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterState.sort = button.dataset.sort || 'latest';
      setActiveSortButton(button);
      applyBlogFilters();
    });
  });

  blogCategoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterState.category = button.dataset.category ? normalizeText(button.dataset.category) : 'all';
      setActiveCategoryButton(button);
      applyBlogFilters();
    });
  });

  blogTagButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tagValue = button.dataset.tag ? normalizeText(button.dataset.tag) : '';
      if (!tagValue) return;
      if (filterState.tags.has(tagValue)) {
        filterState.tags.delete(tagValue);
        button.classList.remove('active');
      } else {
        filterState.tags.add(tagValue);
        button.classList.add('active');
      }
      applyBlogFilters();
    });
  });

  if (blogClearFiltersBtn) {
    blogClearFiltersBtn.addEventListener('click', () => {
      filterState.search = '';
      filterState.category = 'all';
      filterState.tags.clear();
      filterState.sort = 'latest';

      if (blogSearchInput) blogSearchInput.value = '';
      setActiveSortButton(document.querySelector('.blog-filters__sort-btn[data-sort="latest"]'));
      setActiveCategoryButton(document.querySelector('.blog-filters__cat-btn[data-category="all"]'));
      blogTagButtons.forEach(btn => btn.classList.remove('active'));
      applyBlogFilters();
    });
  }

  if (blogCards.length && blogGrid) {
    setActiveSortButton(document.querySelector('.blog-filters__sort-btn[data-sort="latest"]'));
    setActiveCategoryButton(document.querySelector('.blog-filters__cat-btn[data-category="all"]'));
    applyBlogFilters();
  }

  /* ── 8. Table of Contents (Blog) ── */
  const tocElement = document.querySelector('.toc__list') || document.querySelector('#toc-nav');
  const articleContent = document.querySelector('.article-content') || document.querySelector('#article-content');
  if (tocElement && articleContent) {
    const tocContainer = tocElement.tagName === 'NAV'
      ? (() => {
          const list = document.createElement('ul');
          list.className = 'toc__list';
          tocElement.appendChild(list);
          return list;
        })()
      : tocElement;

    const headings = articleContent.querySelectorAll('h2, h3');
    headings.forEach((heading, i) => {
      if (!heading.id) heading.id = 'section-' + i;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + heading.id;
      a.className = 'toc__link' + (heading.tagName === 'H3' ? ' toc__link--sub' : '');
      a.textContent = heading.textContent;
      li.appendChild(a);
      tocContainer.appendChild(li);
    });

    const tocLinks = tocContainer.querySelectorAll('.toc__link');
    const tocObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          tocLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.2, rootMargin: '-80px 0px -60% 0px' });

    headings.forEach(h => tocObserver.observe(h));
  }

  /* ── 8. Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── 9. Contact Form Handler ── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      
      const successMsg = contactForm.querySelector('.form-success');
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.textContent = 'Thank you! We\'ll be in touch within 48 hours to schedule your free AI audit.';
        }
        if (submitBtn) {
          submitBtn.textContent = 'Sent!';
        }
        contactForm.reset();
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.textContent = 'Book Your Free AI Audit';
            submitBtn.disabled = false;
          }
          if (successMsg) successMsg.style.display = 'none';
        }, 5000);
      }, 1000);
    });
  }
}

// Multiple triggers to ensure script runs
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAifyzeScript);
} else {
  // DOM is already loaded
  initializeAifyzeScript();
}

// Fallback: Also run on window load
window.addEventListener('load', initializeAifyzeScript);

// Additional fallback for GoHighLevel timing issues
setTimeout(initializeAifyzeScript, 500);
</script>
