# Aifyze — GHL Schema (JSON-LD) for All Pages

Paste each block into the corresponding GHL page's `<head>` as a `<script type="application/ld+json">` tag.

---

## Shared Company Reference

All schemas reference the same organisation identity:

- **Name:** Aifyze (a division of Watts Group)
- **URL:** https://aifyze.com
- **Email:** hello@aifyze.com
- **Phone:** +1 (579) 569 9999
- **Address:** Suite 209, 120 Traders Blvd E, Mississauga, Ontario, L4Z 2H7, CA
- **Social:** Facebook · LinkedIn · YouTube · Instagram

---

## 1. Home Page — `/`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aifyze.com/#organization",
      "name": "Aifyze",
      "legalName": "Aifyze",
      "url": "https://aifyze.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aifyze.com/assets/images/logo-circle.png",
        "width": 140,
        "height": 140
      },
      "image": "https://aifyze.com/assets/og/og-image.png",
      "description": "Premium AI consulting that transforms your business by unlocking AI-driven growth, efficiency, and innovation — without the complexity. We AI-fy You.",
      "email": "hello@aifyze.com",
      "telephone": "+15795699999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 209, 120 Traders Blvd E",
        "addressLocality": "Mississauga",
        "addressRegion": "Ontario",
        "postalCode": "L4Z 2H7",
        "addressCountry": "CA"
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "Watts Group"
      },
      "areaServed": [
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "United States" }
      ],
      "sameAs": [
        "https://facebook.com/aifyze",
        "https://linkedin.com/company/aifyze",
        "https://youtube.com/@aifyze",
        "https://instagram.com/aifyze"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://aifyze.com/#website",
      "url": "https://aifyze.com",
      "name": "Aifyze",
      "description": "Premium AI Consulting — We AI-fy You",
      "publisher": { "@id": "https://aifyze.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://aifyze.com/blog?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://aifyze.com/#localbusiness",
      "name": "Aifyze",
      "url": "https://aifyze.com",
      "telephone": "+15795699999",
      "email": "hello@aifyze.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 209, 120 Traders Blvd E",
        "addressLocality": "Mississauga",
        "addressRegion": "Ontario",
        "postalCode": "L4Z 2H7",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.5886,
        "longitude": -79.6416
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "priceRange": "$$$$",
      "serviceType": [
        "AI-fy Your Business Processes",
        "Hire Your AI CEO",
        "AI Strategy Consulting"
      ],
      "areaServed": [
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "United States" }
      ],
      "parentOrganization": { "@id": "https://aifyze.com/#organization" },
      "sameAs": [
        "https://facebook.com/aifyze",
        "https://linkedin.com/company/aifyze",
        "https://youtube.com/@aifyze",
        "https://instagram.com/aifyze"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://aifyze.com/#webpage",
      "url": "https://aifyze.com/",
      "name": "Aifyze — We AI-fy You | Premium AI Consulting",
      "description": "Aifyze empowers businesses with expert AI leadership, automation, and strategy consulting. We AI-fy your existing processes for growth and efficiency.",
      "isPartOf": { "@id": "https://aifyze.com/#website" },
      "about": { "@id": "https://aifyze.com/#organization" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does Aifyze do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aifyze is a premium AI consulting firm that helps businesses integrate AI into their existing processes. We provide three core services: AI-fy Your Business Processes (automation), Hire Your AI CEO (dedicated AI leadership), and AI Strategy Consulting (roadmaps and planning)."
          }
        },
        {
          "@type": "Question",
          "name": "How is Aifyze different from other AI consultants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Three things set us apart: we act as your AI CEO (not just advisors), we focus on measurable ROI (not just technology), and we provide white-glove support (not cookie-cutter solutions). We are a strategic extension of your team."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to change my existing tech stack?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Our approach integrates AI into your existing workflows and technology. We build solutions that work with your current tools — no expensive overhauls or migration headaches."
          }
        },
        {
          "@type": "Question",
          "name": "What industries does Aifyze work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We work across all industries including technology, healthcare, finance, e-commerce, professional services, education, and more. If your business has processes that could benefit from AI, we can help."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with Aifyze?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply book your free AI audit through our contact page or call us at +1 (579) 569 9999. We'll schedule a consultation within 48 hours and provide a personalized assessment of how AI can benefit your business."
          }
        }
      ]
    }
  ]
}
</script>
```

---

## 2. About Page — `/about`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aifyze.com/#organization",
      "name": "Aifyze",
      "url": "https://aifyze.com",
      "logo": "https://aifyze.com/assets/images/logo-circle.png",
      "description": "Premium AI consulting that transforms your business by unlocking AI-driven growth, efficiency, and innovation. We AI-fy You.",
      "email": "hello@aifyze.com",
      "telephone": "+15795699999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 209, 120 Traders Blvd E",
        "addressLocality": "Mississauga",
        "addressRegion": "Ontario",
        "postalCode": "L4Z 2H7",
        "addressCountry": "CA"
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "Watts Group"
      },
      "sameAs": [
        "https://facebook.com/aifyze",
        "https://linkedin.com/company/aifyze",
        "https://youtube.com/@aifyze",
        "https://instagram.com/aifyze"
      ]
    },
    {
      "@type": "WebPage",
      "url": "https://aifyze.com/about",
      "name": "About Aifyze — Our Mission, Values & Approach | AI Consulting",
      "description": "Learn about Aifyze — a premium AI consulting firm on a mission to make AI accessible for businesses of all sizes. Discover our values, approach, and what sets us apart.",
      "isPartOf": { "@id": "https://aifyze.com/#website" },
      "about": { "@id": "https://aifyze.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://aifyze.com/about" }
      ]
    }
  ]
}
</script>
```

---

## 3. Services (Overview) Page — `/services`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": "https://aifyze.com/services",
      "name": "Our Services — AI Automation, Leadership & Strategy | Aifyze",
      "description": "Explore Aifyze's three core AI services: AI-fy Your Business Processes, Hire Your AI CEO, and AI Strategy Consulting. Transform your operations with expert AI solutions.",
      "isPartOf": { "@id": "https://aifyze.com/#website" }
    },
    {
      "@type": "ItemList",
      "name": "Aifyze Core Services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "AI-fy Your Business Processes",
            "url": "https://aifyze.com/services/ai-fy-your-business-processes",
            "description": "Streamline and optimize operations with smart AI automation tailored to your workflows.",
            "provider": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
            "serviceType": "AI Automation"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Hire Your AI CEO",
            "url": "https://aifyze.com/services/hire-your-ai-ceo",
            "description": "Get a dedicated AI leader and team to drive AI adoption across your organization.",
            "provider": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
            "serviceType": "AI Leadership"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "AI Strategy Consulting",
            "url": "https://aifyze.com/services/ai-strategy-consulting",
            "description": "Get a customized AI roadmap and strategic guidance to integrate AI effortlessly.",
            "provider": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
            "serviceType": "AI Strategy"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://aifyze.com/services" }
      ]
    }
  ]
}
</script>
```

---

## 4. Service Detail — AI-fy Your Business Processes — `/services/ai-fy-your-business-processes`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://aifyze.com/services/ai-fy-your-business-processes/#service",
      "name": "AI-fy Your Business Processes",
      "url": "https://aifyze.com/services/ai-fy-your-business-processes",
      "description": "Streamline and optimize your operations with smart AI automation tailored to your workflows. Workflow automation, AI agents, digital dashboards, and more.",
      "provider": {
        "@type": "Organization",
        "@id": "https://aifyze.com/#organization",
        "name": "Aifyze",
        "url": "https://aifyze.com"
      },
      "serviceType": "AI Automation",
      "areaServed": [
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "United States" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI-fy Your Business Processes — Deliverables",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Workflow Automation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Agents" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Dashboards" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Process Automation" } }
        ]
      }
    },
    {
      "@type": "WebPage",
      "url": "https://aifyze.com/services/ai-fy-your-business-processes",
      "name": "AI-fy Your Business Processes — Smart Automation | Aifyze",
      "description": "Streamline and optimize your operations with smart AI automation tailored to your workflows.",
      "isPartOf": { "@id": "https://aifyze.com/#website" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://aifyze.com/services" },
        { "@type": "ListItem", "position": 3, "name": "AI-fy Your Business Processes", "item": "https://aifyze.com/services/ai-fy-your-business-processes" }
      ]
    }
  ]
}
</script>
```

---

## 5. Service Detail — Hire Your AI CEO — `/services/hire-your-ai-ceo`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://aifyze.com/services/hire-your-ai-ceo/#service",
      "name": "Hire Your AI CEO",
      "url": "https://aifyze.com/services/hire-your-ai-ceo",
      "description": "Get dedicated AI leadership and managed teams at a fraction of traditional costs. Fractional AI executive, managed AI teams, and executive decision-making support.",
      "provider": {
        "@type": "Organization",
        "@id": "https://aifyze.com/#organization",
        "name": "Aifyze",
        "url": "https://aifyze.com"
      },
      "serviceType": "AI Leadership",
      "areaServed": [
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "United States" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hire Your AI CEO — Deliverables",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fractional AI Executive" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed AI Teams" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Decision-Making Support" } }
        ]
      }
    },
    {
      "@type": "WebPage",
      "url": "https://aifyze.com/services/hire-your-ai-ceo",
      "name": "Hire Your AI CEO — Fractional AI Leadership | Aifyze",
      "description": "Get dedicated AI leadership and managed teams at a fraction of traditional costs.",
      "isPartOf": { "@id": "https://aifyze.com/#website" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://aifyze.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Hire Your AI CEO", "item": "https://aifyze.com/services/hire-your-ai-ceo" }
      ]
    }
  ]
}
</script>
```

---

## 6. Service Detail — AI Strategy Consulting — `/services/ai-strategy-consulting`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://aifyze.com/services/ai-strategy-consulting/#service",
      "name": "AI Strategy Consulting",
      "url": "https://aifyze.com/services/ai-strategy-consulting",
      "description": "Get tailored AI strategies and actionable roadmaps aligned with your business goals. Expert consulting, planning, analysis, and implementation support.",
      "provider": {
        "@type": "Organization",
        "@id": "https://aifyze.com/#organization",
        "name": "Aifyze",
        "url": "https://aifyze.com"
      },
      "serviceType": "AI Consulting",
      "areaServed": [
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "United States" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Strategy Consulting — Deliverables",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Roadmap Development" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strategic AI Planning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Implementation Support" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Readiness Analysis" } }
        ]
      }
    },
    {
      "@type": "WebPage",
      "url": "https://aifyze.com/services/ai-strategy-consulting",
      "name": "AI Strategy Consulting — Roadmaps & Planning | Aifyze",
      "description": "Get tailored AI strategies and actionable roadmaps aligned with your business goals.",
      "isPartOf": { "@id": "https://aifyze.com/#website" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://aifyze.com/services" },
        { "@type": "ListItem", "position": 3, "name": "AI Strategy Consulting", "item": "https://aifyze.com/services/ai-strategy-consulting" }
      ]
    }
  ]
}
</script>
```

---

## 7. Contact Page — `/contact`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "url": "https://aifyze.com/contact",
      "name": "Contact Aifyze | Book Your Free AI Audit",
      "description": "Get in touch with Aifyze for a free AI audit. Our team of AI consultants is ready to help transform your business with smart AI solutions.",
      "isPartOf": { "@id": "https://aifyze.com/#website" }
    },
    {
      "@type": "ProfessionalService",
      "name": "Aifyze",
      "url": "https://aifyze.com",
      "telephone": "+15795699999",
      "email": "hello@aifyze.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suite 209, 120 Traders Blvd E",
        "addressLocality": "Mississauga",
        "addressRegion": "Ontario",
        "postalCode": "L4Z 2H7",
        "addressCountry": "CA"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+15795699999",
          "contactType": "customer service",
          "email": "hello@aifyze.com",
          "availableLanguage": ["English"]
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://aifyze.com/contact" }
      ]
    }
  ]
}
</script>
```

---

## 8. Blog Index Page — `/blog`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://aifyze.com/blog/#blog",
      "name": "Aifyze Blog",
      "description": "Expert insights on AI automation, strategy, and business transformation. Practical guides, industry analysis, and actionable tips from the Aifyze team.",
      "url": "https://aifyze.com/blog",
      "publisher": {
        "@type": "Organization",
        "@id": "https://aifyze.com/#organization",
        "name": "Aifyze",
        "url": "https://aifyze.com"
      }
    },
    {
      "@type": "WebPage",
      "url": "https://aifyze.com/blog",
      "name": "Blog — AI Insights, Strategies & Automation Tips | Aifyze",
      "description": "Stay ahead with expert insights on AI automation, strategy, and business transformation.",
      "isPartOf": { "@id": "https://aifyze.com/#website" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" }
      ]
    }
  ]
}
</script>
```

---

## 9. Businesses We Work With — `/businesses-we-work-with`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": "https://aifyze.com/businesses-we-work-with",
      "name": "Businesses We Work With | Aifyze — Our Associations",
      "description": "Discover the businesses that trust Aifyze for AI consulting, automation, and strategic AI leadership across industries.",
      "isPartOf": { "@id": "https://aifyze.com/#website" },
      "about": { "@id": "https://aifyze.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Businesses We Work With", "item": "https://aifyze.com/businesses-we-work-with" }
      ]
    }
  ]
}
</script>
```

---

## 10. Privacy Policy — `/privacy-policy`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": "https://aifyze.com/privacy-policy",
      "name": "Privacy Policy | Aifyze",
      "description": "Aifyze Privacy Policy. Learn how we collect, use, and protect your personal information.",
      "isPartOf": { "@id": "https://aifyze.com/#website" },
      "publisher": { "@id": "https://aifyze.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://aifyze.com/privacy-policy" }
      ]
    }
  ]
}
</script>
```

---

## 11. Terms of Service — `/terms-of-service`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": "https://aifyze.com/terms-of-service",
      "name": "Terms of Service | Aifyze",
      "description": "Aifyze Terms of Service. Read the terms and conditions governing your use of our website and services.",
      "isPartOf": { "@id": "https://aifyze.com/#website" },
      "publisher": { "@id": "https://aifyze.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://aifyze.com/terms-of-service" }
      ]
    }
  ]
}
</script>
```

---

## 12. 404 Page — `/404`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "url": "https://aifyze.com/404",
      "name": "Page Not Found | Aifyze",
      "description": "The page you're looking for doesn't exist. Return to Aifyze to explore our AI consulting services.",
      "isPartOf": { "@id": "https://aifyze.com/#website" }
    }
  ]
}
</script>
```

---

## Blog Post Schemas

All blog posts use the `Article` type. Replace the values in `{{ }}` with the post-specific values listed under each post.

**Template:**

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "{{HEADLINE}}",
      "description": "{{DESCRIPTION}}",
      "image": {
        "@type": "ImageObject",
        "url": "{{IMAGE_URL}}",
        "width": 1200,
        "height": 630
      },
      "datePublished": "{{DATE_PUBLISHED}}",
      "dateModified": "{{DATE_PUBLISHED}}",
      "author": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aifyze.com/assets/images/logo-circle.png",
          "width": 140,
          "height": 140
        }
      },
      "mainEntityOfPage": "{{CANONICAL_URL}}",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "{{HEADLINE}}", "item": "{{CANONICAL_URL}}" }
      ]
    }
  ]
}
</script>
```

---

### 13. Blog: 5 Signs Your Business Needs AI Automation Right Now

- **URL:** `https://aifyze.com/blog/5-signs-your-business-needs-ai-automation`
- **Date Published:** `2026-03-10`
- **Headline:** `5 Signs Your Business Needs AI Automation Right Now`
- **Description:** `From bottlenecked operations to missed leads, these five indicators tell you it is time to integrate AI into your workflows.`
- **Image:** `https://aifyze.com/assets/og/og-image.png`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "5 Signs Your Business Needs AI Automation Right Now",
      "description": "From bottlenecked operations to missed leads, these five indicators tell you it is time to integrate AI into your workflows.",
      "image": {
        "@type": "ImageObject",
        "url": "https://aifyze.com/assets/og/og-image.png",
        "width": 1200,
        "height": 630
      },
      "datePublished": "2026-03-10",
      "dateModified": "2026-03-10",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/5-signs-your-business-needs-ai-automation",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "5 Signs Your Business Needs AI Automation Right Now", "item": "https://aifyze.com/blog/5-signs-your-business-needs-ai-automation" }
      ]
    }
  ]
}
</script>
```

---

### 14. Blog: AI for Coaches and Consultants: Scale Your Practice Without Burning Out

- **URL:** `https://aifyze.com/blog/ai-for-coaches-consultants-scale-practice`
- **Date Published:** `2026-02-15`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "AI for Coaches and Consultants: Scale Your Practice Without Burning Out",
      "description": "Coaches and consultants are leveraging AI to automate scheduling, client communication, and content creation.",
      "image": { "@type": "ImageObject", "url": "https://aifyze.com/assets/og/og-image.png", "width": 1200, "height": 630 },
      "datePublished": "2026-02-15",
      "dateModified": "2026-02-15",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/ai-for-coaches-consultants-scale-practice",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AI for Coaches and Consultants: Scale Your Practice Without Burning Out", "item": "https://aifyze.com/blog/ai-for-coaches-consultants-scale-practice" }
      ]
    }
  ]
}
</script>
```

---

### 15. Blog: AI-Powered SEO: The Future of Digital Marketing Is Here

- **URL:** `https://aifyze.com/blog/ai-powered-seo-future-of-digital-marketing`
- **Date Published:** `2026-03-05`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "AI-Powered SEO: The Future of Digital Marketing Is Here",
      "description": "Traditional SEO is evolving rapidly with AI. Learn how machine learning algorithms are changing keyword research and ranking strategies.",
      "image": { "@type": "ImageObject", "url": "https://aifyze.com/assets/og/og-image.png", "width": 1200, "height": 630 },
      "datePublished": "2026-03-05",
      "dateModified": "2026-03-05",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/ai-powered-seo-future-of-digital-marketing",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AI-Powered SEO: The Future of Digital Marketing Is Here", "item": "https://aifyze.com/blog/ai-powered-seo-future-of-digital-marketing" }
      ]
    }
  ]
}
</script>
```

---

### 16. Blog: AI Readiness Assessment: The Complete 2026 Checklist

- **URL:** `https://aifyze.com/blog/ai-readiness-assessment-checklist-2026`
- **Date Published:** `2026-02-05`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "AI Readiness Assessment: The Complete 2026 Checklist",
      "description": "Before implementing AI, you need to know where you stand. Use this comprehensive checklist to evaluate your readiness.",
      "image": { "@type": "ImageObject", "url": "https://aifyze.com/assets/og/og-image.png", "width": 1200, "height": 630 },
      "datePublished": "2026-02-05",
      "dateModified": "2026-02-05",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/ai-readiness-assessment-checklist-2026",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "AI Readiness Assessment: The Complete 2026 Checklist", "item": "https://aifyze.com/blog/ai-readiness-assessment-checklist-2026" }
      ]
    }
  ]
}
</script>
```

---

### 17. Blog: Building Your AI Strategy Roadmap: A Small Business Guide

- **URL:** `https://aifyze.com/blog/ai-strategy-roadmap-small-business-guide`
- **Date Published:** `2026-03-15`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Building Your AI Strategy Roadmap: A Small Business Guide",
      "description": "Most small businesses know AI can help but don't know where to start. This practical guide walks you through creating an actionable AI strategy.",
      "image": { "@type": "ImageObject", "url": "https://aifyze.com/assets/og/og-image.png", "width": 1200, "height": 630 },
      "datePublished": "2026-03-15",
      "dateModified": "2026-03-15",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/ai-strategy-roadmap-small-business-guide",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Building Your AI Strategy Roadmap: A Small Business Guide", "item": "https://aifyze.com/blog/ai-strategy-roadmap-small-business-guide" }
      ]
    }
  ]
}
</script>
```

---

### 18. Blog: CRM Automation: How to Boost Your Sales Team Productivity by 3x

- **URL:** `https://aifyze.com/blog/crm-automation-boost-sales-team-productivity`
- **Date Published:** `2026-02-28`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "CRM Automation: How to Boost Your Sales Team Productivity by 3x",
      "description": "Your sales team spends 65% of their time on non-selling activities. Here is how AI-driven CRM automation can flip that ratio.",
      "image": { "@type": "ImageObject", "url": "https://aifyze.com/assets/og/og-image.png", "width": 1200, "height": 630 },
      "datePublished": "2026-02-28",
      "dateModified": "2026-02-28",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/crm-automation-boost-sales-team-productivity",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "CRM Automation: How to Boost Your Sales Team Productivity by 3x", "item": "https://aifyze.com/blog/crm-automation-boost-sales-team-productivity" }
      ]
    }
  ]
}
</script>
```

---

### 19. Blog: How AI Agents Are Transforming Customer Support in 2026

- **URL:** `https://aifyze.com/blog/how-ai-agents-are-transforming-customer-support-2026`
- **Date Published:** `2026-03-20`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How AI Agents Are Transforming Customer Support in 2026",
      "description": "AI-powered customer support agents are handling complex inquiries with human-like understanding, cutting response times by 80%.",
      "image": { "@type": "ImageObject", "url": "https://aifyze.com/assets/og/og-image.png", "width": 1200, "height": 630 },
      "datePublished": "2026-03-20",
      "dateModified": "2026-03-20",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/how-ai-agents-are-transforming-customer-support-2026",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "How AI Agents Are Transforming Customer Support in 2026", "item": "https://aifyze.com/blog/how-ai-agents-are-transforming-customer-support-2026" }
      ]
    }
  ]
}
</script>
```

---

### 20. Blog: Operational Intelligence: Making Data-Driven Decisions That Matter

- **URL:** `https://aifyze.com/blog/operational-intelligence-data-driven-decisions`
- **Date Published:** `2026-02-20`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Operational Intelligence: Making Data-Driven Decisions That Matter",
      "description": "Most businesses collect data but few know how to act on it. Discover how operational intelligence transforms raw data into strategic advantages.",
      "image": { "@type": "ImageObject", "url": "https://aifyze.com/assets/og/og-image.png", "width": 1200, "height": 630 },
      "datePublished": "2026-02-20",
      "dateModified": "2026-02-20",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/operational-intelligence-data-driven-decisions",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Operational Intelligence: Making Data-Driven Decisions That Matter", "item": "https://aifyze.com/blog/operational-intelligence-data-driven-decisions" }
      ]
    }
  ]
}
</script>
```

---

### 21. Blog: Predictive Analytics for Supply Chain: A Practical Guide

- **URL:** `https://aifyze.com/blog/predictive-analytics-supply-chain-optimization`
- **Date Published:** `2026-01-20`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Predictive Analytics for Supply Chain: A Practical Guide",
      "description": "Supply chain disruptions cost billions annually. Learn how predictive analytics can help you anticipate issues and reduce costs.",
      "image": { "@type": "ImageObject", "url": "https://aifyze.com/assets/og/og-image.png", "width": 1200, "height": 630 },
      "datePublished": "2026-01-20",
      "dateModified": "2026-01-20",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/predictive-analytics-supply-chain-optimization",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Predictive Analytics for Supply Chain: A Practical Guide", "item": "https://aifyze.com/blog/predictive-analytics-supply-chain-optimization" }
      ]
    }
  ]
}
</script>
```

---

### 22. Blog: The ROI of AI: How to Measure Real Business Impact

- **URL:** `https://aifyze.com/blog/roi-of-ai-measuring-business-impact`
- **Date Published:** `2026-01-15`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "The ROI of AI: How to Measure Real Business Impact",
      "description": "AI investments should deliver measurable returns. This guide covers the frameworks and metrics you need to quantify AI impact.",
      "image": { "@type": "ImageObject", "url": "https://aifyze.com/assets/og/og-image.png", "width": 1200, "height": 630 },
      "datePublished": "2026-01-15",
      "dateModified": "2026-01-15",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/roi-of-ai-measuring-business-impact",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "The ROI of AI: How to Measure Real Business Impact", "item": "https://aifyze.com/blog/roi-of-ai-measuring-business-impact" }
      ]
    }
  ]
}
</script>
```

---

### 23. Blog: Voice AI Agents vs Chatbots: Which Is Right for Your Business?

- **URL:** `https://aifyze.com/blog/voice-ai-agents-vs-chatbots-which-is-right`
- **Date Published:** `2026-01-28`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Voice AI Agents vs Chatbots: Which Is Right for Your Business?",
      "description": "Both voice AI and chatbots have their place. Here is a practical comparison to guide your decision.",
      "image": { "@type": "ImageObject", "url": "https://aifyze.com/assets/og/og-image.png", "width": 1200, "height": 630 },
      "datePublished": "2026-01-28",
      "dateModified": "2026-01-28",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/voice-ai-agents-vs-chatbots-which-is-right",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Voice AI Agents vs Chatbots: Which Is Right for Your Business?", "item": "https://aifyze.com/blog/voice-ai-agents-vs-chatbots-which-is-right" }
      ]
    }
  ]
}
</script>
```

---

### 24. Blog: What Is an AI CEO and Why Your Business Needs One

- **URL:** `https://aifyze.com/blog/what-is-ai-ceo-why-your-business-needs-one`
- **Date Published:** `2026-02-10`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "What Is an AI CEO and Why Your Business Needs One",
      "description": "The concept of hiring an AI CEO is gaining traction. Learn what it means and how dedicated AI leadership can transform your operations.",
      "image": { "@type": "ImageObject", "url": "https://aifyze.com/assets/og/og-image.png", "width": 1200, "height": 630 },
      "datePublished": "2026-02-10",
      "dateModified": "2026-02-10",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/what-is-ai-ceo-why-your-business-needs-one",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "What Is an AI CEO and Why Your Business Needs One", "item": "https://aifyze.com/blog/what-is-ai-ceo-why-your-business-needs-one" }
      ]
    }
  ]
}
</script>
```

---

## Page Count Summary

| # | Page | Schema Types Used |
|---|------|-------------------|
| 1 | Home `/` | Organization, WebSite, ProfessionalService, WebPage, FAQPage |
| 2 | About `/about` | Organization, WebPage, BreadcrumbList |
| 3 | Services `/services` | WebPage, ItemList, BreadcrumbList |
| 4 | AI-fy Business Processes | Service, WebPage, BreadcrumbList |
| 5 | Hire Your AI CEO | Service, WebPage, BreadcrumbList |
| 6 | AI Strategy Consulting | Service, WebPage, BreadcrumbList |
| 7 | Contact `/contact` | ContactPage, ProfessionalService, BreadcrumbList |
| 8 | Blog Index `/blog` | Blog, WebPage, BreadcrumbList |
| 9 | Businesses We Work With | WebPage, BreadcrumbList |
| 10 | Privacy Policy | WebPage, BreadcrumbList |
| 11 | Terms of Service | WebPage, BreadcrumbList |
| 12 | 404 | WebPage |
| 13–24 | 12 Blog Posts (existing) | Article, BreadcrumbList |
| 25 | Blog — The 90-Day AI Roadmap | Article, BreadcrumbList |

---

### 25. Blog: The 90-Day AI Roadmap: Integrate AI Without Ripping Out Your Tech Stack

- **URL:** `https://aifyze.com/blog/90-day-ai-roadmap-integrate-ai-without-tech-overhaul`
- **Date Published:** `2026-04-10`

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "The 90-Day AI Roadmap: How to Integrate Custom AI Solutions Without Ripping Out Your Tech Stack",
      "description": "A proven 90-day framework to integrate custom AI solutions into your existing tech stack — no system overhaul, no downtime, and measurable ROI within weeks.",
      "image": {
        "@type": "ImageObject",
        "url": "https://aifyze.com/assets/og/og-image.png",
        "width": 1200,
        "height": 630
      },
      "datePublished": "2026-04-10",
      "dateModified": "2026-04-10",
      "author": { "@type": "Organization", "name": "Aifyze", "url": "https://aifyze.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Aifyze",
        "url": "https://aifyze.com",
        "logo": { "@type": "ImageObject", "url": "https://aifyze.com/assets/images/logo-circle.png", "width": 140, "height": 140 }
      },
      "mainEntityOfPage": "https://aifyze.com/blog/90-day-ai-roadmap-integrate-ai-without-tech-overhaul",
      "isPartOf": { "@id": "https://aifyze.com/blog/#blog" },
      "keywords": ["AI integration", "AI roadmap", "tech stack", "AI automation", "business AI", "AI strategy"]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aifyze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://aifyze.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "The 90-Day AI Roadmap: Integrate AI Without Ripping Out Your Tech Stack", "item": "https://aifyze.com/blog/90-day-ai-roadmap-integrate-ai-without-tech-overhaul" }
      ]
    }
  ]
}
</script>
```
