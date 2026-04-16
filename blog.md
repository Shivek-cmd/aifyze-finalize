# Blog Writing Guide — Aifyze

This guide covers everything needed to write and publish a new blog post: content strategy, HTML templates, blog listing card, and related articles format.

---

## Blog Strategy

### Voice & Tone
- **Practical, not preachy** — every post should give actionable takeaways
- **Problem-first** — open with the reader's pain point, not a definition
- **Stats-led** — use real numbers (percentages, time savings, cost reductions)
- **No fluff** — short paragraphs, clear headers, no filler sentences
- **Empathetic to fear** — many readers are skeptical of AI; acknowledge concerns before debunking them

### Content Pillars (match to categories)
| Category | Focus |
|---|---|
| **AI Automation** | How AI tools handle specific tasks (support, scheduling, document processing) |
| **AI Strategy** | Roadmaps, frameworks, planning, readiness assessments |
| **Business Growth** | Signs, triggers, ROI stories — "why now" content |
| **Industry Insights** | Niche audiences (coaches, consultants, e-commerce, real estate, healthcare) |

### Ideal Blog Structure
1. **Hook** — 1–2 sentences on the core problem (no "In today's world...")
2. **Context** — why this matters now, brief stat or trend
3. **H2 sections** (3–5) — each with a clear point, supporting detail, and example
4. **Bullet lists** — use for capabilities, tools, steps (bold the key term, colon, explanation)
5. **Blockquote** — one memorable pull quote per post
6. **CTA close** — end with a "getting started" section + implicit CTA to book an audit

### Read Time Targets
- **Short:** 5–6 min (~1,200–1,500 words)
- **Standard:** 7–8 min (~1,800–2,000 words)
- **Long-form:** 10+ min (~2,500+ words, only for comprehensive guides)

---

## Existing Blog Reference

| # | File | Title | Category | Date | Read Time | URL |
|---|---|---|---|---|---|---|
| 1 | `/Blog1/` | How AI Agents Are Transforming Customer Support in 2026 | AI Automation | March 20, 2026 | 7 min | `/blog/how-ai-agents-are-transforming-customer-support-2026` |
| 2 | `/Blog2/` | Building Your AI Strategy Roadmap: A Small Business Guide | AI Strategy | March 15, 2026 | 8 min | `/blog/ai-strategy-roadmap-small-business-guide` |
| 3 | `/Blog3/` | 5 Signs Your Business Needs AI Automation Right Now | Business Growth | March 10, 2026 | 5 min | `/blog/signs-your-business-needs-ai-automation` |
| 4 | `/Blog4/` | AI for Coaches and Consultants: Scale Your Practice Without Burning Out | Industry Insights | Feb 15, 2026 | 6 min | `/blog/ai-for-coaches-consultants-scale-practice` |
| 5 | `/Blog5/` | The 90-Day AI Roadmap (FEATURED) | AI Strategy | April 10, 2026 | 8 min | `/blog/90-day-ai-roadmap-integrate-ai-without-tech-overhaul` |
| 6 | `/Blog6/` | Do You Really Need an AI CEO? Here's the Truth About Scaling with Fractional AI Leadership | AI Strategy | April 13, 2026 | 9 min | `/blog/do-you-really-need-an-ai-ceo-fractional-ai-leadership` |
| 7 | `/Blog7/` | How to Automate Your Business Workflows With AI (No Tech Team Required) | AI Automation | April 16, 2026 | 8 min | `/blog/ai-workflow-automation-guide-small-business` |

---

## Publishing Checklist (for each new blog)

> **Complete every item before marking a blog as done. Missing SEO or the listing card are the two most common oversights.**

### 1. Files
- [ ] Create folder: `/Blog6/`, `/Blog7/`, etc.
- [ ] Create `index.html` using the Blog Page Template below
- [ ] Create `index.css` (copy from any existing blog — identical across all posts)

### 2. Blog Listing
- [ ] Add card to `BlogListing/index.html` inside `<div class="blog-grid reveal-stagger">` (Blog Card Template below)
- [ ] If making this the Featured Article, replace the featured block in `BlogListing/index.html`

### 3. SEO — REQUIRED, do not skip
- [ ] Add a new numbered section to `seo-ghl-values.md` with all fields below
- [ ] Verify character counts before saving — Google truncates anything over the limits

**`title`**
- Format: `{Short descriptive title} | Aifyze Blog`
- `| Aifyze Blog` must always be the last part, every single time
- Hard limit: **70 characters total** (including `| Aifyze Blog`)
- That leaves ~56 characters for the actual title text
- Count at: [charactercounter.com](https://charactercounter.com)

**`description`**
- Hard limit: **155 characters total**
- Style: problem-first, one punchy sentence, end with a value hook
- No em dashes at the start — Google may cut them off

**`og:title`** — same as `title` (identical value, same 70-char limit)
**`og:description`** — same as `description` (identical value, same 155-char limit)
**`twitter:title`** — same text as `title` but **without** `| Aifyze Blog` at the end
**`twitter:description`** — same as `description`

**Other required fields:**
- `keywords` (6–8 comma-separated terms, always include "Aifyze" as last term)
- `canonical` URL
- `og:url`, `og:type: article`, `og:site_name: Aifyze`, `og:image`, `og:image:width: 1200`, `og:image:height: 630`
- `twitter:card: summary_large_image`, `twitter:image`
- Full JSON-LD schema block (Article + BreadcrumbList — copy pattern from section 26)
- Notes section: date published, category, read time, hero image GHL variable name, TOC anchor IDs

### 4. Assets
- [ ] Add GHL custom value name for blog hero image in `custom-values.md`
- [ ] Replace Unsplash placeholder URL with `{{custom_values.variable_name}}` in `index.html` and the listing card once image is uploaded to GHL

### 5. Cross-links
- [ ] Add social share URLs with the correct blog URL slug in `index.html`
- [ ] Update related articles in 2–3 other relevant existing blog posts to link to the new post

---

## Blog Page Template (`index.html`)

Replace all `{{PLACEHOLDER}}` values before publishing.

```html
<section class="blog-detail-hero">
  <div class="blog-detail-hero__bg">
    <img src="{{custom_values.{{GHL_IMAGE_VARIABLE}}}}" alt="Blog post background" loading="eager">
  </div>
  <div class="container">
    <div class="reveal">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a><span class="separator">/</span><a href="/blog">Blog</a><span class="separator">/</span><span class="current">{{FULL TITLE}}</span>
      </nav>
      <span class="blog-detail__category">{{CATEGORY}}</span>
      <h1>{{FULL TITLE}}</h1>
      <div class="blog-detail__meta">
        <span>By Aifyze Team</span><span>&middot;</span><span>{{DATE}}</span><span>&middot;</span><span>{{X}} min read</span>
      </div>
      <div class="share-bar" style="margin-top:var(--sp-6);">
        <span class="share-bar__label">Share:</span>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://aifyze.com/blog/{{URL-SLUG}}" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" class="share-bar__icon">
          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://aifyze.com/blog/{{URL-SLUG}}" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" class="share-bar__icon">
          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href="https://twitter.com/intent/tweet?url=https://aifyze.com/blog/{{URL-SLUG}}" target="_blank" rel="noopener noreferrer" aria-label="Share on X" class="share-bar__icon">
          <svg fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="section--lg">
  <div class="container">
    <div class="blog-detail__layout">
      <aside class="toc" id="toc" aria-label="Table of Contents">
        <p class="label" style="margin-bottom:var(--sp-4);">In This Article</p>
        <nav id="toc-nav"></nav>
      </aside>
      <article class="blog-detail__article" id="article-content">

        <!-- ARTICLE BODY — Replace everything below with actual content -->

        <h2 id="{{section-1-id}}">{{Section 1 Heading}}</h2>
        <p>{{Opening paragraph — state the problem or context clearly. Use a stat if available.}}</p>

        <h2 id="{{section-2-id}}">{{Section 2 Heading}}</h2>
        <p>{{Body paragraph.}}</p>
        <ul>
          <li><strong>{{Term}}:</strong> {{Explanation}}</li>
          <li><strong>{{Term}}:</strong> {{Explanation}}</li>
          <li><strong>{{Term}}:</strong> {{Explanation}}</li>
        </ul>

        <h2 id="{{section-3-id}}">{{Section 3 Heading}}</h2>
        <p>{{Body paragraph.}}</p>
        <blockquote>{{One memorable, standalone insight — no attribution needed.}}</blockquote>

        <h2 id="{{section-4-id}}">{{Section 4 Heading}}</h2>
        <p>{{Body paragraph.}}</p>

        <h2 id="getting-started">Getting Started</h2>
        <p>{{Practical first steps. Keep it simple and actionable. Implied CTA — no hard sell here.}}</p>

        <!-- END ARTICLE BODY -->

      </article>
    </div>

    <div class="blog-author reveal">
      <div class="blog-author__avatar">AT</div>
      <div>
        <p class="blog-author__name">Aifyze Team</p>
        <p class="blog-author__role">AI Consulting &amp; Strategy Experts</p>
      </div>
    </div>
  </div>
</section>

<section class="blog-related section--lg">
  <div class="container">
    <div class="reveal">
      <p class="label">Related Articles</p>
      <h2 style="font-size:clamp(1.75rem,4vw,2.5rem);">Continue Reading</h2>
    </div>
    <div class="blog-grid reveal-stagger" style="margin-top:var(--sp-12);">

      <!-- RELATED CARD 1 -->
      <a href="/blog/{{related-url-slug}}" class="blog-card reveal" data-category="{{CATEGORY}}" data-tags="{{Tag1}},{{Tag2}}" data-date="{{Month DD, YYYY}}">
        <div class="blog-card__img">
          <span class="blog-card__img-category">{{CATEGORY}}</span>
          <img src="{{custom_values.{{GHL_IMAGE_VARIABLE}}}}" alt="{{Alt text}}" loading="lazy">
        </div>
        <div class="blog-card__body">
          <div class="blog-card__meta"><span>{{Date}}</span><span class="blog-card__meta-divider"></span><span>{{X}} min read</span></div>
          <h3 class="blog-card__title">{{Title}}</h3>
          <p class="blog-card__excerpt">{{One-sentence description of the article.}}</p>
          <div class="blog-card__tags"><span class="blog-card__tag">{{Tag1}}</span><span class="blog-card__tag">{{Tag2}}</span></div>
          <div class="blog-card__bottom"><span class="blog-card__author">By Aifyze Team</span></div>
        </div>
      </a>

      <!-- RELATED CARD 2 — add a second card the same way -->

    </div>
  </div>
</section>
```

---

## Inline Article Image Template

Add 2–3 images inside `<article class="blog-detail__article">` at natural section breaks (between an `</p>` and the next `<h2>`). Place them before sections that benefit from visual context — not after every single H2.

```html
<figure class="blog-article-img reveal">
  <img src="https://images.unsplash.com/photo-XXXXXXXXXX?w=1200&q=80" alt="{{Descriptive alt text for the image}}" loading="lazy">
  <figcaption>{{One sentence that adds context — not a caption of the obvious, but a framing insight.}}</figcaption>
</figure>
```

**Placement rules:**
- First image: after the intro paragraphs, before the first H2
- Second image: after the 2nd or 3rd H2 section
- Third image: after the 4th or 5th H2 section (before a results/closing section)
- Never place an image immediately before or after a blockquote
- Always use `loading="lazy"` on inline images (only the hero uses `loading="eager"`)

**Image sizing:** `w=1200&q=80` for inline images, `w=1600&q=80` for the hero

**CSS class:** `.blog-article-img` — defined in `index.css`. Styles: `border-radius`, `16/9` aspect ratio, subtle hover zoom, italic caption. This class must be present in `index.css` for every blog (copy from Blog6).

**Unsplash guidance:** Pick images that match the section topic, not generic stock. For an AI strategy article, prefer images of people in meetings, whiteboards, laptops with data, or planning sessions — not robots or glowing circuits.

---

## Blog Listing Card Template (`BlogListing/index.html`)

Add this inside the `<div class="blog-grid reveal-stagger">` block in `BlogListing/index.html`.

```html
<a href="/blog/{{URL-SLUG}}" class="blog-card reveal" data-category="{{CATEGORY}}" data-tags="{{Tag1}},{{Tag2}},{{Tag3}}" data-date="{{Month DD, YYYY}}">
  <div class="blog-card__img">
    <span class="blog-card__img-category">{{CATEGORY}}</span>
    <img src="{{custom_values.{{GHL_IMAGE_VARIABLE}}}}" alt="{{ALT TEXT}}" loading="lazy">
  </div>
  <div class="blog-card__body">
    <div class="blog-card__meta">
      <span>{{Month DD, YYYY}}</span>
      <span class="blog-featured__meta-divider"></span>
      <span>{{X}} min read</span>
    </div>
    <h3 class="blog-card__title">{{FULL TITLE}}</h3>
    <p class="blog-card__excerpt">{{One or two sentence excerpt — problem-first, ends with a hook.}}</p>
    <div class="blog-card__tags">
      <span class="blog-card__tag">{{Tag1}}</span>
      <span class="blog-card__tag">{{Tag2}}</span>
    </div>
    <div class="blog-card__bottom"><span class="blog-card__author">By Aifyze Team</span></div>
  </div>
</a>
```

**Note:** The `data-tags` attribute powers the tag filter buttons. Tags must exactly match the filter buttons defined in the `<div class="blog-filters__tags">` section. Currently available tags: `Integration`, `Customer Support`, `AI Agents`, `Automation`, `Strategy`, `SEO`, `CRM`, `Analytics`, `Supply Chain`, `ROI`.

---

## Featured Article Block

To make a blog the Featured Article, replace the featured block in `BlogListing/index.html`:

```html
<a href="/blog/{{URL-SLUG}}" class="blog-featured reveal" style="text-decoration:none;">
  <div class="blog-featured__img">
    <img src="{{custom_values.{{GHL_IMAGE_VARIABLE}}}}" alt="{{FULL TITLE}}" loading="lazy">
    <span class="blog-featured__img-category">{{CATEGORY}}</span>
  </div>
  <div class="blog-featured__body">
    <div class="blog-featured__meta">
      <span>{{Month DD, YYYY}}</span>
      <span class="blog-featured__meta-divider"></span>
      <span>{{X}} min read</span>
    </div>
    <h2 style="pointer-events:none;">{{FULL TITLE}}</h2>
    <p class="blog-featured__excerpt">{{2–3 sentence excerpt — make it compelling, problem-first, with a strong hook.}}</p>
    <div class="blog-featured__tags">
      <span class="blog-featured__tag">{{Tag1}}</span>
      <span class="blog-featured__tag">{{Tag2}}</span>
      <span class="blog-featured__tag">{{Tag3}}</span>
    </div>
    <div class="blog-featured__author">By Aifyze Team</div>
    <div class="blog-featured__bottom">
      <span class="blog-featured__link">Read Article &rarr;</span>
    </div>
  </div>
</a>
```

---

## Article ID Conventions for TOC

The `id` attributes on `<h2>` tags power the auto-generated Table of Contents (`#toc-nav`). Keep IDs:
- Lowercase, hyphenated (e.g., `id="getting-started"`, `id="key-capabilities"`)
- Short but descriptive
- Unique within the article

---

## Naming Conventions

| Thing | Format | Example |
|---|---|---|
| Blog folder | `/BlogN/` | `/Blog6/` |
| URL slug | `/blog/kebab-case-title` | `/blog/ai-crm-automation-guide` |
| GHL image variable | `aifyze_blog_{{descriptive_name}}` | `aifyze_blog_crm_automation` |
| HTML file | `index.html` | — |
| CSS file | `index.css` | (copy from any existing blog) |

---

## Content Ideas (Backlog)

Aligned with current service pillars and audience pain points:

### AI Automation
- How to Automate Your CRM With AI (Without Losing the Personal Touch)
- Voice AI Agents: What They Can Actually Do in 2026
- Automating Invoice Processing: A Real-World Use Case
- AI in E-Commerce: From Abandoned Carts to Loyal Customers

### AI Strategy
- How to Choose the Right AI Vendor (Without Getting Burned)
- The AI Readiness Assessment: 10 Questions Every Business Should Answer
- AI ROI Calculator: How to Justify the Investment to Your Stakeholders
- What a Fractional AI CEO Actually Does (Day in the Life)

### Business Growth
- 7 Repetitive Workflows You Should Have Automated Yesterday
- From Bottleneck to Breakthrough: Real Client AI Transformations
- Why Most AI Pilots Fail (And How to Run One That Doesn't)

### Industry Insights
- AI for Real Estate Agents: From Leads to Leases
- AI for Healthcare Clinics: Scheduling, Follow-ups, and Compliance
- How Retailers Are Using AI to Beat the Big Chains
- AI for Accountants and Financial Advisors: Client Automation That Scales
