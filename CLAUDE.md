# CLAUDE.md — Aifyze Project Guide

## Business Overview

**Company:** Aifyze (a division of Watts Group)
**Tagline:** "We AI-fy You"
**Website:** aifyze.com
**Contact:** hello@aifyze.com | +1 (579) 569 9999
**Address:** Suite 209, 120 Traders Blvd E, Mississauga, Ontario, L4Z 2H7, Canada
**Service Area:** Canada and United States

### What Aifyze Does
Aifyze is a **premium B2B AI consulting firm** that helps businesses integrate AI into their existing processes without disrupting current operations. The core value proposition is practical, ROI-focused AI adoption — no tech stack overhauls, no disruption, just measurable results layered on top of what businesses already use.

### Target Audience
- Small to medium-sized businesses (SMBs)
- Coaches and consultants looking to scale their practices
- Growing enterprises with repetitive operational bottlenecks
- Any business that wants AI but fears complexity or disruption

### Brand Voice & Tone
- **Professional but approachable** — not overly technical, not dumbed-down
- **Confident and results-oriented** — lead with outcomes (80% faster, 60% reduction, 3x more)
- **Partnership-first** — "strategic extension of your team", not a vendor
- **Practical and actionable** — guides and content should be immediately usable
- Avoid AI hype; focus on real business problems and measurable solutions

---

## Three Core Services

### 1. AI-fy Your Business Processes (`/Service1-Aify-your-business/`)
**Tagline:** "Smarter Operations, Zero Disruption"
- Workflow automation tailored to existing operations
- Voice & chat AI agents (24/7 customer engagement)
- Intelligent document processing (invoices, contracts, forms)
- Predictive operations & anomaly detection
- Custom automation tools & data pipelines
- **Key outcome:** 60% reduction in manual work, 24/7 coverage, faster decision-making

### 2. Hire Your AI CEO (`/Service2-Hire-your-ai-ceo/`)
**Tagline:** "Expert AI Leadership, Without the Overhead"
- Fractional AI executive oversight (dedicated AI leadership at a fraction of traditional cost)
- Expert team assembly and management
- End-to-end project execution (vision to deployment)
- Vendor selection & technology evaluation
- Ongoing operations management

### 3. AI Strategy Consulting (`/Service3-AI-Strategy-Consulting/`)
**Tagline:** "Your Roadmap to AI-Powered Growth"
- AI readiness assessments & gap analysis
- Custom roadmaps with milestones and ROI projections
- Team training and AI literacy programs
- Change management for organizational adoption

---

## Four Core Differentiators (Used Consistently Across All Pages)

1. **Trusted Partnerships** — Strategic extension of your team, not a distant vendor
2. **Focused on Growth** — Every solution tied to measurable ROI
3. **White-Glove Experience** — Personalized, dedicated support from start to finish
4. **No Disruption** — AI integrated seamlessly into existing workflows

---

## The Aifyze Process (Four Steps, Used in All Services)

1. **Discovery** — Listen & understand current workflows
2. **Strategy** — Develop a tailored AI roadmap
3. **Implementation** — Build & deploy solutions seamlessly
4. **Optimization** — Monitor, measure, and refine for growing ROI

---

## Key CTAs (Use These Exact Phrases)

- **Primary:** "Book Your Free AI Audit" (links to contact page / GHL form)
- **Secondary:** "Explore Services", "Learn More", "See Investment", "Start a Conversation"
- **Navigation CTA:** "Free AI Audit" (header button)

---

## Tech Stack

**Platform:** GoHighLevel (GHL) — no-code website builder
**Templating:** Handlebars/Liquid (GHL) — `{{custom_values.variable_name}}` for assets and dynamic values
**Frontend:** HTML5, CSS3 (custom design system), Vanilla JavaScript
**Analytics:** Custom tracking scripts in `/globalscripts/` (headtrackingcode.js, bodytrackingcode.js)
**Forms:** GHL native form embeds
**Pricing tier display:** `$$$$` (premium positioning)

### GHL Template Variables
All images/assets are referenced via GHL custom values:
```
{{custom_values.aifyze_blog_ai_agents_customer_support}}
{{custom_values.aifyze_blog_ai_strategy_roadmap}}
{{custom_values.aifyze_blog5_hero}}
```
See `custom-values.md` for the full asset mapping.

---

## Design System

### Colors
| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#F7F6FA` | Page background (light purple tint) |
| `--color-bg-secondary` | `#FCFBFF` | Cards, sections |
| `--color-bg-deep` | `#F0ECF8` | Alternating sections |
| `--color-text` | `#1A1625` | Primary text |
| `--color-text-secondary` | `#4A4458` | Body text, subtitles |
| `--color-text-tertiary` | `#7A748C` | Captions, meta text |
| `--color-border` | `#E6E1F0` | Borders, dividers |
| `--color-primary` | `#7C3AED` | Purple — main brand color |
| `--color-secondary` | `#F97066` | Coral — accent color |

**Gradient:** `135deg, #7C3AED → #C084FC → #F97066` (purple to coral)

### Typography
- **Headings:** `'Playfair Display', Georgia, serif`
- **Body:** `'Inter', system-ui, sans-serif`

### Spacing
8-point scale. Variables: `--sp-1` (4px) through `--sp-32` (128px). Common values:
- `--sp-4` = 16px, `--sp-6` = 24px, `--sp-8` = 32px, `--sp-12` = 48px, `--sp-16` = 64px

### Container
- Max width: `1280px` (80rem)
- Standard padding: `var(--sp-6)` (24px)

### Animation
- `.reveal` — fade-in on scroll
- `.reveal-stagger` — staggered children reveal
- `.reveal-left`, `.reveal-right` — directional reveals

---

## File & Folder Structure

```
/aifyze/
├── CLAUDE.md                       ← This file
├── blog.md                         ← Blog writing guide
├── seo-ghl-values.md               ← SEO metadata for all pages (GHL custom values)
├── ghl_schema.md                   ← JSON-LD structured data for all pages
├── custom-values.md                ← Asset/image variable mapping
│
├── global/
│   ├── header.html                 ← Global navigation (floating pill navbar, dropdown)
│   ├── footer.html                 ← Global footer (4-column layout)
│   ├── base.css                    ← Global reset and base styles
│   └── variable.css                ← Design tokens (colors, spacing, typography)
│
├── globalscripts/
│   ├── headtrackingcode.js         ← Analytics init (GA4, pixels)
│   └── bodytrackingcode.js         ← Event tracking, heatmaps
│
├── Home/                           ← Homepage (hero carousel, services overview, stats)
├── About-us/                       ← About page (mission, values, team)
├── Services/                       ← Services overview (all 3 services)
├── Service1-Aify-your-business/    ← AI process automation service detail
├── Service2-Hire-your-ai-ceo/      ← Fractional AI leadership service detail
├── Service3-AI-Strategy-Consulting/← AI strategy service detail
│
├── BlogListing/                    ← Blog index (featured post + filterable grid)
│   ├── index.html
│   └── index.css
├── Blog1/                          ← "How AI Agents Are Transforming Customer Support in 2026"
├── Blog2/                          ← "Building Your AI Strategy Roadmap: A Small Business Guide"
├── Blog3/                          ← "5 Signs Your Business Needs AI Automation Right Now"
├── Blog4/                          ← "AI for Coaches and Consultants"
├── Blog5/                          ← "The 90-Day AI Roadmap" (current Featured article)
│
├── Contactus/                      ← Contact form + GHL form embed
├── OurAssociation/                 ← Industry partnerships page
├── PrivacyPolicy/
├── Terms-of-service/
└── 404page/
```

---

## Blog System

5 published blogs as of April 2026. See `blog.md` for the full writing guide and HTML templates.

### Published Blogs
| # | Title | Category | Date | URL slug |
|---|---|---|---|---|
| 1 | How AI Agents Are Transforming Customer Support in 2026 | AI Automation | Mar 20, 2026 | `/blog/how-ai-agents-are-transforming-customer-support-2026` |
| 2 | Building Your AI Strategy Roadmap: A Small Business Guide | AI Strategy | Mar 15, 2026 | `/blog/ai-strategy-roadmap-small-business-guide` |
| 3 | 5 Signs Your Business Needs AI Automation Right Now | Business Growth | Mar 10, 2026 | `/blog/signs-your-business-needs-ai-automation` |
| 4 | AI for Coaches and Consultants: Scale Your Practice Without Burning Out | Industry Insights | Feb 15, 2026 | `/blog/ai-for-coaches-consultants-scale-practice` |
| 5 | The 90-Day AI Roadmap (FEATURED) | AI Strategy | Apr 10, 2026 | `/blog/90-day-ai-roadmap-integrate-ai-without-tech-overhaul` |
| 13 | The AI Tech Stack Purge: Consolidate Your 20-App Mess into One AI Brain | AI Strategy | May 14, 2026 | `/blog/ai-tech-stack-consolidation-one-ai-brain` |
| 14 | Beyond the Chatbot: Why Your Business Needs an AI Org Chart in 2026 | AI Strategy | May 18, 2026 | `/blog/ai-org-chart-ai-employees-teams-2026` |
| 15 | The 90-Day AI ROI Framework: A CEO's Guide to Measurable Automation Results | AI Strategy | May 20, 2026 | `/blog/90-day-ai-roi-framework-measurable-automation-results` |
| 16 | Ghosting Your Leads? How Agentic Lead Scoring Plugs the $50k 'Silent Leak' | Industry Insights | May 30, 2026 | `/blog/agentic-lead-scoring-silent-revenue-leak-coaches-consultants` |
| 18 | AI Cleanup: What Happens When You Automate Too Fast (And How to Fix It) | AI Strategy | Jun 9, 2026 | `/blog/ai-automation-too-fast-cleanup-fix-broken-workflows` |
| 19 | AI Hiring for Small Business: Screen Smarter, Make Better Hires, and Onboard Faster in 2026 | AI Automation | Jun 12, 2026 | `/blog/ai-hiring-small-business-screen-smarter-onboard-faster` |

### Blog Categories
`AI Automation` | `AI Strategy` | `Business Growth` | `Industry Insights`

### Blog Tags
`Integration` | `Customer Support` | `AI Agents` | `Automation` | `Strategy` | `SEO` | `CRM` | `Analytics` | `Supply Chain` | `ROI`

---

## Navigation Structure

**Header (global/header.html):**
- Logo → Home
- About
- Services (mega-dropdown with 3 service cards + "Book a free call" CTA)
- Our Associations
- Blog
- Contact
- CTA Button: "Free AI Audit"

**Footer (global/footer.html):**
- Column 1: Brand description
- Column 2: Company links (About, Services, Associations, Blog, Contact)
- Column 3: Service links (each service detail page)
- Column 4: Social links (Facebook, LinkedIn, YouTube, Instagram)
- Legal: Privacy Policy, Terms of Service

---

## SEO & Schema

- Full SEO metadata in `seo-ghl-values.md` (titles, descriptions, OG tags, Twitter cards for every page)
- JSON-LD schema in `ghl_schema.md`: `Organization`, `LocalBusiness`, `ProfessionalService`, `FAQPage`, `WebSite`
- Blog posts use Article schema
- Location-based keywords: Mississauga AI consulting, Ontario AI services
- Price range: `$$$$`

---

## Key Statistics Used in Copy

- 50+ businesses transformed
- 3 core service lines
- 24/7 AI agent availability
- 100% client-first approach
- 60% reduction in manual work (Service 1)
- 80% faster response times (customer support stat)
- 35% increase in customer satisfaction
- 90% resolution rates for common inquiries (e-commerce)

---

## Common Patterns to Follow

1. **Never overhaul, always layer** — AI solutions integrate with existing tech, not replace it
2. **Measure everything** — always tie suggestions to ROI or measurable outcomes
3. **Lead with the problem** — headlines and intros should call out the pain point first
4. **GHL templating** — all images use `{{custom_values.variable_name}}`, never hardcoded URLs
5. **Social share links** — always Facebook, LinkedIn, X (Twitter) in that order
6. **Author block** — always "Aifyze Team" / "AI Consulting & Strategy Experts"
7. **Reveal animations** — add `.reveal` to sections and `.reveal-stagger` to grids
