# Aifyze — Business & Site Overview

> **Purpose of this document:** A complete reference for brainstorming, editing, and expanding the Aifyze website. Use it to understand what each page contains, where to add sections, and how everything connects.

---

## 1. Business at a Glance

| | |
|---|---|
| **Company** | Aifyze (a division of Watts Group) |
| **Tagline** | "We AI-fy You" |
| **Website** | aifyze.com |
| **Email** | hello@aifyze.com |
| **Phone** | +1 (579) 569 9999 |
| **Address** | Suite 209, 120 Traders Blvd E, Mississauga, Ontario, L4Z 2H7, Canada |
| **Service Area** | Canada & United States |
| **Pricing Tier** | $$$$ (premium) |

### What Aifyze Does

Aifyze is a **premium B2B AI consulting firm** that helps businesses integrate AI into their existing processes without disrupting current operations. The core promise: measurable ROI layered on top of what you already use — no tech stack overhauls, no complexity, just smart innovation.

### Who They Serve

- Small to medium-sized businesses (SMBs)
- Coaches and consultants looking to scale
- Entrepreneurs and startups
- Growing enterprises with operational bottlenecks
- Any business that wants AI but fears disruption or complexity

### Four Core Differentiators (used on every page)

1. **Trusted Partnerships** — Strategic extension of your team, not a vendor
2. **Focused on Growth** — Every solution tied to measurable ROI
3. **White-Glove Experience** — Personalized, dedicated support start to finish
4. **No Disruption** — AI integrated into existing workflows seamlessly

### The 4-Step Process (used on every service page)

1. **Discovery** — Listen and understand current workflows
2. **Strategy** — Develop a tailored AI roadmap
3. **Implementation** — Build and deploy seamlessly
4. **Optimization** — Monitor, measure, and refine for growing ROI

### Key Stats Used in Copy

| Stat | Where Used |
|---|---|
| 50+ businesses transformed | Homepage, Contact |
| 3 core service lines | Homepage, Contact |
| 24/7 AI agent availability | Homepage, Contact, Service 1 |
| 100% client-first approach | Homepage, Contact |
| 60% reduction in manual work | Service 1, Homepage |
| 80% faster response times | Homepage testimonials |
| 35% increase in customer satisfaction | General copy |
| 90% resolution rates (e-commerce) | Blog content |

---

## 2. The Three Services

### Service 1 — AI-fy Your Business Processes
**Tagline:** Smarter Operations, Zero Disruption  
**URL:** `/services/ai-fy-your-business-processes`  
**Folder:** `Service1-Aify-your-business/s1.html`  
**Pricing:** Starts from $500 (Starter Package)

What it covers:
- Voice & Chat AI Agents (24/7 customer support, lead qualification, appointments)
- Process Mining & Optimization (finding bottlenecks and automation opportunities)
- Intelligent Document Processing (invoices, contracts, forms)
- Predictive Operations (demand forecasting, anomaly detection)
- Custom Automation Tools (bespoke AI software)
- Data Pipeline & Analytics (real-time dashboards)

Key outcomes: 60%+ reduction in manual work, 24/7 customer coverage, faster decision-making, seamless integration

---

### Service 2 — Hire Your AI CEO
**Tagline:** Expert AI Leadership, Without the Overhead  
**URL:** `/services/hire-your-ai-ceo`  
**Folder:** `Service2-Hire-your-ai-ceo/s2.html`  
**Pricing:** Starts from $1,500 (Executive Package)

What it covers:
- AI Executive Advisory (fractional C-suite level AI leadership)
- Managed AI Teams (pre-vetted engineers, data scientists, ML specialists)
- AI Project Management (milestones, reporting, transparency)
- AI Vendor Evaluation (independent tech assessment)
- AI Governance & Compliance (ethics, regulatory alignment)
- Ongoing AI Operations (continuous monitoring and optimization)

Key outcomes: Save 70% vs in-house hiring, zero recruitment hassle, accelerated time to value, full accountability

---

### Service 3 — AI Strategy Consulting
**Tagline:** Your Roadmap to AI-Powered Growth  
**URL:** `/services/ai-strategy-consulting`  
**Folder:** `Service3-AI-Strategy-Consulting/s3.html`  
**Pricing:** Starts from $7,500 (Strategy Package)

What it covers:
- AI Opportunity Identification (highest-impact use cases ranked by ROI)
- Data Strategy & Governance (infrastructure and quality planning)
- Technology Stack Evaluation (independent tool and platform review)
- ROI Modeling & Business Cases (board-ready financial models)
- AI Literacy Workshops (training for leadership and frontline staff)
- Implementation Support (advisory during rollout)

Key outcomes: Clarity before investment, board-ready business cases, team buy-in, actionable (not theoretical) recommendations

---

## 3. Site Structure — Every Page Explained

### Global Elements (appear on all pages)

**Header** — `global/header.html`
- Floating pill navbar (frosted glass, fixed to top)
- Logo → Home
- Nav links: About | Services (mega-dropdown) | Our Associations | Blog | Contact
- Services mega-dropdown shows all 3 services with icons, numbers, and descriptions + "Book a free call" footer link
- CTA button: "Free AI Audit" → `/contact`
- Mobile: Hamburger → slide-in drawer with same links + "Get Your Free AI Audit" CTA

**Footer** — `global/footer.html`
- Column 1: Brand description and social links (Facebook, LinkedIn, YouTube, Instagram)
- Column 2: Company links (About, Services, Associations, Blog, Contact)
- Column 3: Service links (each of the 3 service detail pages)
- Column 4: Contact info (email, phone, address)
- Bottom bar: Privacy Policy | Terms of Service | Copyright

---

### Home Page
**File:** `Home/home.html`  
**URL:** `/`

Sections (in order):
1. **Hero Carousel** — 3 rotating background images, headline "We AI-fy You", subtext, CTAs: "Book Your Free AI Audit" + "Explore Services"
2. **Stats Bar** — 4 animated counters: 50+ Businesses Transformed | 3 Core Service Lines | 24/7 AI Agent Availability | 100% Client-First Approach
3. **Services Grid** — "Three Ways We AI-fy Your Business" — 3 service cards with image, badge number, title, description, "Learn More" link. Bottom: "View All Services" button
4. **About Preview** — Image + text split: "Smart AI Innovation For Your Business" — 2-paragraph mission blurb + "Learn More About Us" button
5. **Partner Marquee** — "Businesses We Work With" — 3 rows of auto-scrolling logo strips (RTL / LTR / RTL) featuring 40+ partner brand logos. "See All Partners" button → Our Associations page
6. **Testimonials** — Rotating slider with 4 client quotes (Sarah Mitchell, David Chen, Rachel Torres, Marcus Johnson) with dots navigation
7. **FAQ** — 6 accordion questions: What is an AI audit? | How does engagement work? | Do I need to overhaul my tech stack? | What types of businesses do you work with? | What sets Aifyze apart? | How quickly can I expect results?
8. **CTA Banner** — Full-width dark section with background image: "Ready to AI-fy Your Business?" — 2 buttons: Book Free AI Audit + Explore Our Services

> **Where to add something on Home:** New sections could go between Stats and Services (e.g. a "Problem we solve" intro), between About Preview and Marquee (e.g. case study snapshots), or between Testimonials and FAQ (e.g. a "Featured Blog Post" strip).

---

### About Page
**File:** `About-us/aboutus.html`  
**URL:** `/about`

Sections (in order):
1. **Hero** — Background image, breadcrumb, label "About Aifyze", headline "We AI-fy Your Business", mission statement paragraph
2. **Brand Story** — Image + text split: "Our Story" / "Smart AI Innovation For Your Business" — 3 paragraphs covering mission, who they serve, and the approach (analyze → design → implement → you focus on business)
3. **Values Grid** — "What Sets Us Apart" — 4 value cards with vertical accent line: Trusted Partnerships | Focused on Growth | White-Glove Experience | No Disruption
4. **Internal Links Bar** — Simple text links: Discover services | Read blog | Get in touch
5. **CTA Banner** — "Ready to AI-fy Your Business?" + "Book Your Free AI Audit" button

> **Where to add something on About:** A "Meet the Team" or "Leadership" section could go after the Brand Story. A "Why Canada / Who We Are" section could go before the Values Grid. A timeline or milestones section could go between Brand Story and Values.

---

### Services Overview Page
**File:** `Services/services.html`  
**URL:** `/services`

Sections (in order):
1. **Hero** — Background image, breadcrumb, headline "Three Ways We AI-fy Your Business", descriptive paragraph
2. **Services (Alternating Layout)** — 3 service rows (Service 1 left/right, Service 2 reversed, Service 3 left/right). Each row: badge number, title, 1-line description, 4 bullet points, "Learn More" + "Book Free AI Audit" buttons
3. **Why Choose Aifyze** — Dark background section, 3-column cards: Trusted Partnerships | Focused on Growth | White-Glove Experience
4. **Our Process** — 4-step grid: Discovery → Strategy → Implementation → Optimization
5. **CTA Banner** — "Ready to AI-fy Your Business?" + "Book Your Free AI Audit"

> **Where to add something on Services:** A "Pricing Overview" strip could go between the service rows and the Why section. An "Industries We Serve" section (healthcare, legal, e-commerce, etc.) could go between Why and Process.

---

### Service 1 — AI-fy Your Business Processes
**File:** `Service1-Aify-your-business/s1.html`  
**URL:** `/services/ai-fy-your-business-processes`

Sections (in order):
1. **Hero** — Background image, breadcrumb, headline, tagline "Smarter Operations, Zero Disruption", "See Investment" button scrolls to pricing
2. **Core Capabilities** — 6-card grid: Voice & Chat AI Agents | Process Mining | Intelligent Document Processing | Predictive Operations | Custom Automation Tools | Data Pipeline & Analytics
3. **What We Deliver** — 4-item list with large numbered headings: Intelligent Workflow Automation | AI-Powered Customer Engagement | Smart Document & Data Processing | Custom AI Integrations
4. **Expected Outcomes** — 4-card grid: Reduce Manual Work 60%+ | 24/7 Customer Coverage | Faster Decision Making | Seamless Integration
5. **Investment** — Single pricing card "Starter Package — Starts from $500" with 7-point feature checklist + "Get a Custom Quote" CTA
6. **Other Services** — 2-card grid linking to Service 2 and Service 3 + internal links to /services, /blog, /contact
7. **CTA Banner** — "Ready to Get Started?" + "Book Your Free AI Audit"

> **Where to add something here:** A "Use Case Examples" or "Industry Applications" section could go between Core Capabilities and What We Deliver. A "Case Study" or "Before/After" section could go between Outcomes and Investment. A FAQ specific to this service could go between Investment and Other Services.

---

### Service 2 — Hire Your AI CEO
**File:** `Service2-Hire-your-ai-ceo/s2.html`  
**URL:** `/services/hire-your-ai-ceo`

Sections (in order):
1. **Hero** — Background image, breadcrumb, headline, tagline "Expert AI Leadership, Without the Overhead", "See Investment" scroll button
2. **Core Capabilities** — 6-card grid: AI Executive Advisory | Managed AI Teams | AI Project Management | AI Vendor Evaluation | AI Governance & Compliance | Ongoing AI Operations
3. **What We Deliver** — 4-item list: Fractional AI Executive | AI Team Staffing & Management | End-to-End Project Execution | Technology & Vendor Selection
4. **Expected Outcomes** — 4-card grid: Save 70% vs In-House Hiring | Zero Recruitment Hassle | Accelerate Time to Value | Full Accountability
5. **Investment** — Single pricing card "Executive Package — Starts from $1,500" with 7-point feature checklist + "Get a Custom Quote" CTA
6. **Other Services** — 2-card grid linking to Service 1 and Service 3 + internal links
7. **CTA Banner** — "Ready to Hire Your AI CEO?" + "Book Your Free AI Audit"

> **Where to add something here:** A "Who This Is For" section could go after the hero (e.g. "growing teams who can't afford a full-time CAO"). A comparison table (Fractional AI CEO vs In-House Hire vs DIY) could go between Outcomes and Investment.

---

### Service 3 — AI Strategy Consulting
**File:** `Service3-AI-Strategy-Consulting/s3.html`  
**URL:** `/services/ai-strategy-consulting`

Sections (in order):
1. **Hero** — Background image, breadcrumb, headline, tagline "Your Roadmap to AI-Powered Growth", "See Investment" scroll button
2. **Core Capabilities** — 6-card grid: AI Opportunity Identification | Data Strategy & Governance | Technology Stack Evaluation | ROI Modeling & Business Cases | AI Literacy Workshops | Implementation Support
3. **What We Deliver** — 4-item list: AI Readiness Assessment | Strategic Roadmapping | Team Training & Upskilling | Change Management
4. **Expected Outcomes** — 4-card grid: Clarity Before Investment | Board-Ready Business Cases | Team Buy-In | Actionable Not Theoretical
5. **Investment** — Single pricing card "Strategy Package — Starts from $7,500" with 7-point feature checklist + "Get a Custom Quote" CTA
6. **Other Services** — 2-card grid linking to Service 1 and Service 2 + internal links
7. **CTA Banner** — "Ready for a Clear AI Strategy?" + "Book Your Free AI Audit"

> **Where to add something here:** A "What You Get Delivered" tangibles list (e.g. "a written roadmap document", "workshop slides", "ROI model spreadsheet") could go after Investment to make it more concrete. A "Is This Right for You?" checklist could go between the hero and Core Capabilities.

---

### Blog Listing Page
**File:** `BlogListing/index.html`  
**URL:** `/blog`

Sections (in order):
1. **Hero** — Background image, breadcrumb, headline "AI Insights & Resources", descriptive paragraph
2. **Featured Post** — Large feature card: currently "AI for Real Estate Agents: How to Turn Cold Leads Into Closed Deals Without Extra Headcount" (Apr 17, 2026)
3. **Filters Bar** — Search input + Sort (Latest/Oldest) + Category filters + Tag filters + Results count / Clear filters
4. **Blog Grid** — All posts in card grid, filterable by category/tag/date, each card has: category badge, thumbnail, date, read time, title, excerpt, tags, "By Aifyze Team"

Categories available: AI Automation | AI Strategy | Business Growth | Industry Insights  
Tags available: Integration | Customer Support | AI Agents | Automation | Strategy | SEO | CRM | Analytics | Supply Chain | ROI

> **Where to add something here:** A "Subscribe to Newsletter" section could go between the Featured Post and Filters Bar. A "Popular Posts" sidebar could be added if the layout moves to a 2-column format. A "Topics" section above the grid with visual category cards could replace/enhance the filter bar.

---

### Blog Posts (12 published as of May 2026)

Each blog post lives in its own folder (`Blog1/` through `Blog12/`) with an `index.html`. All posts follow the same template structure.

| # | Title | Category | Date | URL |
|---|---|---|---|---|
| 1 | How AI Agents Are Transforming Customer Support in 2026 | AI Automation | Mar 20, 2026 | `/blog/how-ai-agents-are-transforming-customer-support-2026` |
| 2 | Building Your AI Strategy Roadmap: A Small Business Guide | AI Strategy | Mar 15, 2026 | `/blog/ai-strategy-roadmap-small-business-guide` |
| 3 | 5 Signs Your Business Needs AI Automation Right Now | Business Growth | Mar 10, 2026 | `/blog/signs-your-business-needs-ai-automation` |
| 4 | AI for Coaches and Consultants: Scale Your Practice Without Burning Out | Industry Insights | Feb 15, 2026 | `/blog/ai-for-coaches-consultants-scale-practice` |
| 5 | The 90-Day AI Roadmap | AI Strategy | Apr 10, 2026 | `/blog/90-day-ai-roadmap-integrate-ai-without-tech-overhaul` |
| 6 | How to Automate Your Business Workflows With AI | AI Automation | Apr 16, 2026 | `/blog/ai-workflow-automation-guide-small-business` |
| 7 | Do You Really Need an AI CEO? Fractional AI Leadership | AI Strategy | Apr 13, 2026 | `/blog/do-you-really-need-an-ai-ceo-fractional-ai-leadership` |
| 8 | AI for Real Estate Agents: Close More Deals Without Extra Headcount *(Featured)* | Industry Insights | Apr 17, 2026 | `/blog/ai-for-real-estate-agents-close-more-deals` |
| 9 | Why Hiring "AI Employees" Will Change Your Org Chart | Business Growth | Apr 22, 2026 | `/blog/ai-employees-org-chart-digital-labor` |
| 10 | How to Use AI Lead Generation Automation to Grow Your Coaching Practice | Industry Insights | Apr 24, 2026 | `/blog/ai-lead-generation-automation-coaching-practice` |
| 11 | 10 Reasons Your AI Workflow Automation Isn't Showing ROI | Business Growth | Apr 28, 2026 | `/blog/why-ai-workflow-automation-isnt-showing-roi` |
| 12 | Beyond the Lead Factory: Why "More" Is Your 2026 Revenue Killer | Business Growth | May 13, 2026 | `/blog/beyond-lead-factory-revenue-intelligence-2026` |

**Blog post template sections (same structure for every post):**
- Hero with background image, breadcrumb, category badge, date, read time, title, excerpt
- Article body (long-form HTML content with headings, subheadings, lists, pull-quotes)
- Author block — "By Aifyze Team / AI Consulting & Strategy Experts"
- Social share buttons — Facebook, LinkedIn, X (Twitter) in that order
- Related posts / "You Might Also Like" section
- CTA banner — Book Free AI Audit

---

### Contact Page
**File:** `Contactus/contact.html`  
**URL:** `/contact`

Sections (in order):
1. **Hero** — Background image, breadcrumb, headline "Your AI Journey Starts Here", paragraph, 2 CTAs: "Call: +1 (579) 569 9999" + "Book Your Free AI Audit" (scrolls to form)
2. **Why Reach Out** — 3-card grid (with icons): Trusted Partnerships | Focused on Growth | White-Glove Experience
3. **Form + Sidebar** — Two-column layout:
   - Left: GHL embedded form (`iframe` from leadconnectorhq.com) with "Start a Conversation" heading
   - Right sidebar: Contact Info card (email, phone, office address) | Business Hours card (Mon–Fri 9–5 EST, AI Agents 24/7) | Quick Stats card (50+, 3, 24/7, 100%)
4. **Who Is This For** — 4-card grid: Coaches & Consultants | Entrepreneurs & Startups | Growing Enterprises | Service Providers
5. **FAQ** — 6 accordion questions: Is audit really free? | What industries? | How quickly? | Do I need to change tech stack? | What makes Aifyze different? | How do I get started?
6. **Internal Links Bar** — Text links to /services, /about, /blog

> **Where to add something here:** A "What Happens After You Book" section could go between the form and "Who Is This For" — explaining the 3-step onboarding process. Social proof (client logos or a stat strip) could go right below the hero.

---

### Our Associations Page
**File:** `OurAssociation/ourassociation.html`  
**URL:** `/businesses-we-work-with`

This page showcases all the partner brands and tools that Aifyze works with or recommends. It mirrors the marquee section from the Homepage but in full detail. Partners span tiers:
- Tier 1 big brands: Zoho, GoHighLevel, Shopify, Amazon, Lenovo, Slack, Microsoft
- Tier 2 AI tools: Perplexity, HeyGen, InVideo, Crush AI, Wegic, Rita AI, AI Video Builder, ClickSites AI, Talking Photos AI, Video Express AI, Memorae, Marblism
- Tier 3 partners: AppSumo, Holo, Impact, Namecheap, SignNow, Spocket, WonderShare, EasyShip, Bayesian School, GamsGo, Hilton, Hyatt, Etihad, OnePlus, Airwallex, Dropbox, and more

> **Where to add something here:** A "Why We Partner" section at the top explaining the vetting process. Category groupings (AI Tools, CRM, E-commerce, Productivity, etc.) for easier scanning.

---

### Privacy Policy
**File:** `PrivacyPolicy/privacypolicy.html`  
**URL:** `/privacy-policy`

Standard legal page — privacy policy text. No marketing sections.

---

### Terms of Service
**File:** `Terms-of-service/tos.html`  
**URL:** `/terms-of-service`

Standard legal page — terms of service text. No marketing sections.

---

### 404 Page
**File:** `404page/index.html`  
**URL:** Triggered on any broken URL

Custom error page with Aifyze branding, headline, and links back to key pages.

---

## 4. Tech Stack Quick Reference

| Layer | Technology |
|---|---|
| Platform | GoHighLevel (GHL) — no-code website builder |
| Templating | Handlebars/Liquid — `{{custom_values.variable_name}}` for all images |
| Frontend | HTML5, CSS3 (custom design tokens), Vanilla JavaScript |
| Forms | GHL native form embed via iframe (`leadconnectorhq.com`) |
| Analytics | Custom scripts in `/globalscripts/` (GA4, pixel tracking) |
| Schema/SEO | JSON-LD in `ghl_schema.md`, metadata in `seo-ghl-values.md` |

**Important:** Every image on the site uses a GHL custom value variable, not a hardcoded URL. For example: `{{custom_values.aifyze_home_hero_1}}`. See `custom-values.md` for the full variable→image mapping.

---

## 5. Design System Quick Reference

### Colors
| Token | Value | Purpose |
|---|---|---|
| `--color-primary` | `#7C3AED` | Purple — main brand color, buttons, accents |
| `--color-secondary` | `#F97066` | Coral — secondary accents, CTA variation |
| `--color-bg` | `#F7F6FA` | Page background (light purple tint) |
| `--color-text` | `#1A1625` | Primary text |
| `--color-text-secondary` | `#4A4458` | Body text |
| `--color-border` | `#E6E1F0` | Borders, dividers |

**Gradient:** `135deg, #7C3AED → #C084FC → #F97066` (used on CTAs and hero overlays)

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### Key CSS Classes
| Class | Purpose |
|---|---|
| `.reveal` | Fade-in animation triggered on scroll |
| `.reveal-stagger` | Staggered fade-in for grid children |
| `.reveal-left` / `.reveal-right` | Directional slide-in animations |
| `.section--lg` | Large vertical padding section |
| `.section--sm` | Small vertical padding section |
| `.container` | Max-width 1280px, auto margins, 24px padding |
| `.btn--primary` | Purple button |
| `.btn--secondary` | Coral/gradient button |
| `.btn--outline` | Outlined button (dark) |
| `.btn--outline-light` | Outlined button (white, for dark backgrounds) |

---

## 6. Navigation Map

```
/                           → Home
/about                      → About Us
/services                   → Services Overview
  /services/ai-fy-your-business-processes   → Service 1
  /services/hire-your-ai-ceo               → Service 2
  /services/ai-strategy-consulting         → Service 3
/businesses-we-work-with    → Our Associations
/blog                       → Blog Listing
  /blog/[slug]              → Individual Blog Posts (12 published)
/contact                    → Contact
/privacy-policy             → Privacy Policy
/terms-of-service           → Terms of Service
```

---

## 7. Content Rules & Brand Voice

1. **Never overhaul, always layer** — AI integrates with existing tech, doesn't replace it
2. **Lead with the problem** — Headlines call out the pain point first, then offer the solution
3. **Measure everything** — Always tie benefits to ROI or measurable outcomes (percentages, timeframes)
4. **No AI hype** — Focus on practical business problems, not buzzwords
5. **Partnership language** — "Strategic extension of your team", not "vendor" or "tool"
6. **Author block** — Always "Aifyze Team / AI Consulting & Strategy Experts"
7. **Social share** — Always Facebook, LinkedIn, X (Twitter) in that order
8. **Primary CTA** — "Book Your Free AI Audit" → links to /contact
9. **Secondary CTAs** — "Explore Services", "Learn More", "See Investment", "Start a Conversation"
10. **Header CTA** — "Free AI Audit"

---

## 8. Suggested Gaps / Future Content Ideas

### New Pages to Consider
- **Case Studies page** — Detailed before/after stories for 3–5 client industries (e-commerce, coaching, real estate, professional services). High SEO value.
- **Industries page** — "AI Solutions by Industry" with cards for each vertical (healthcare, legal, real estate, coaching, e-commerce). Links to relevant blog posts and services.
- **Resources / Free Tools page** — AI Audit checklist download, ROI calculator, AI readiness quiz. Builds email list.
- **Pricing Overview page** — Side-by-side comparison of all 3 service packages (S1 $500+, S2 $1500+, S3 $7500+). Reduces pre-sales friction.
- **Testimonials / Social Proof page** — Dedicated page for all testimonials, logos, and results. Currently only 4 testimonials on Homepage.

### Sections to Add to Existing Pages
- **Homepage** — "Industries We Serve" strip between Services and About Preview
- **Homepage** — "Recent Blog Posts" strip above the CTA banner to drive blog traffic
- **About** — "Meet the Team" or "Our Leadership" section after Brand Story
- **Services Overview** — "Industries We Serve" grid between the service rows and Why section
- **Each Service Page** — "Real-World Use Cases" or "Who This Is For" section between Hero and Core Capabilities
- **Contact** — "What Happens After You Book" 3-step mini-process between the form and FAQ
- **Blog Listing** — Email newsletter subscribe section between Featured Post and Filters

### Blog Topics Not Yet Covered
- AI for healthcare / medical practices
- AI for legal firms
- AI for e-commerce operations
- AI and data privacy / compliance
- ROI calculator / how to measure AI success
- AI tools comparison articles (GoHighLevel vs competitors, etc.)
- "Ask the AI CEO" Q&A format posts
