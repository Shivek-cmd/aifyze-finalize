# GHL Snapshot — Setup Guide

This folder maps 1:1 to how the chatbots, forms, pipelines, and workflows are built inside GoHighLevel. Everything you need to configure is documented here — paste each file into its corresponding GHL field.

---

## System Overview

Two AI Agents share one KB (KB General). The Aifyze agent has 4 additional dedicated knowledge bases, 15 actions, and 4 automated workflows. The website Contact Form and the chatbot both feed the same single CRM pipeline — **Aifyze - Client Acquisition** — distinguished by tag and Opportunity Source rather than separate pipelines.

```
┌──────────────────────────────────┐     ┌──────────────────────────────┐
│       Aifyze AI Agent            │     │   Watts Group AI Agent       │
│    (aifyze.com chatbot)          │     │  (wattsgroup.in chatbot)     │
│                                  │     │                              │
│  Personality / Goal /            │     │  Personality / Goal /        │
│  Additional Info / Actions (×15) │     │  Additional Info             │
│                                  │     │                              │
│  KBs attached:                   │     │  KBs attached:               │
│  ├── KB General ◄────────────────┼─────┼──► KB General               │
│  ├── KB1 — Assessment & Scoring  │     │                              │
│  ├── KB2 — Services & Pricing    │     │                              │
│  ├── KB3 — Objection Handling    │     │                              │
│  └── KB4 — Company & Contact     │     │                              │
└──────────────────────────────────┘     └──────────────────────────────┘
```

---

## Conversation Flow (5 Phases)

| Phase | What Happens | Key Rule |
|---|---|---|
| **Phase 1** | Help with user's question. One follow-up. | No mention of score or services |
| **Phase 2** | Learn their pain. Max 2 questions. | Pain only — NO tools, team size, or AI usage questions |
| **Phase 3** | Offer the assessment — MANDATORY gate. | Must get explicit YES before Phase 4 |
| **Phase 4** | Ask Q1–Q5 in order, one at a time. | Q4 and Q5 always asked; Q1 skipped only if both type AND size stated |
| **Phase 5** | Deliver AI Readiness Report in chat. | Email captured first (optional), then full report in chat |

**Phase 5 delivery order:**
1. Ask name → calculate score → store all fields
2. Ask for email casually — it's optional. If skipped, proceed immediately.
3. Deliver the full **AI Readiness Report in chat** (score, business snapshot, opportunities, recommended service, next step)
4. The report is delivered in chat — no email report is sent
5. Ask about booking a free AI audit

---

## Assessment Scoring

| Question | Max Points | What It Measures |
|---|---|---|
| Q1 — Business type + team size | 20 | Business scale |
| Q2 — Biggest pain point | 25 | Workflow pain / automation opportunity |
| Q3 — Current tools | 20 | Integration readiness |
| Q4 — Current AI usage *(reverse scored)* | 15 | Less AI = more opportunity |
| Q5 — Readiness to act | 20 | Decision timeline |
| **Total** | **100** | |

**Score bands:** 0–29 Very Early | 30–49 Emerging | 50–69 Ready to Pilot | 70–84 Strong Readiness | 85–100 High-Leverage Ready

**Service mapping:** 0–49 = AI Strategy Consulting | 50–84 = AI-fy Your Business Processes | 85–100 = Hire Your AI CEO

---

## Industries Page Knowledge

The new Aifyze Industries We Serve page is documented in:

- `Knowledge-Bases/KB4-Company-and-Contact/` for direct company and industry questions
- `Knowledge-Bases/KB2-Services-and-Pricing/` for industry-specific service examples
- `Knowledge-Bases/KB1-Assessment-and-Scoring/rich-text.md` for assessment personalization after Q1
- `AI-Agent/additional-info.md` for routing rules when users ask about specific industries
- `KB-General/aifyze-overview.md` and `KB-General/faq.md` so the Watts Group agent can also route Aifyze industry questions correctly

Primary URL: `aifyze.com/industries-we-serve`

---

## GHL Hierarchy — Aifyze AI Agent

```
AI Agent: Aifyze Assistant
│
├── Personality          → AI-Agent/personality.md
├── Goal                 → AI-Agent/goal.md
├── Additional Info      → AI-Agent/additional-info.md
├── Actions (×15)        → AI-Agent/actions.md
└── Chat Widget          → AI-Agent/chatwidget.md

Knowledge Bases (all attached to this agent):
├── KB General                     → KB-General/
├── KB1 — Assessment & Scoring     → Knowledge-Bases/KB1-Assessment-and-Scoring/
├── KB2 — Services & Pricing       → Knowledge-Bases/KB2-Services-and-Pricing/
├── KB3 — Objection Handling       → Knowledge-Bases/KB3-Objection-Handling/
└── KB4 — Company & Contact        → Knowledge-Bases/KB4-Company-and-Contact/
```

---

## GHL Hierarchy — Watts Group AI Agent

```
AI Agent: Watts Group Assistant
│
├── Personality          → Watts-Group-AI-Agent/personality.md
├── Goal                 → Watts-Group-AI-Agent/goal.md
└── Additional Info      → Watts-Group-AI-Agent/additional-info.md

Knowledge Bases:
└── KB General           → KB-General/
```

### Watts Group Agent — Deployment Context

The Watts Group AI Agent is connected to **all Watts Group social media channels** (Instagram, Facebook, WhatsApp Business). Every DM that comes in from any of these platforms is handled by this agent.

Because Watts Group is the parent company and Aifyze is one of its verticals, users arriving from social media may ask about Aifyze specifically — including the **AI Readiness Score** and the **AI Readiness Assessment**. The agent cannot run that assessment itself. It routes the user to aifyze.com where the Aifyze chatbot handles the full assessment.

**Routing rule for AI Readiness Score / Assessment:**
> "Head over to aifyze.com and chat with the Aifyze AI assistant — it'll walk you through a free AI Readiness Assessment and deliver your personalised score right in the chat."

This prevents the Watts Group agent from attempting to replicate the 5-question scoring system (which it does not have access to) and ensures users get the full personalised experience on the Aifyze site.

---

## Full File Map

```
GHL_SNAPSHOT/
├── README.md                                        ← This file
├── document.md                                      ← Original requirements document
│
├── AI-Agent/                                        ← Aifyze chatbot config (paste into GHL)
│   ├── personality.md                               ← Bot persona + tone
│   ├── goal.md                                      ← 5-phase conversation + scoring + delivery
│   ├── additional-info.md                           ← Hard rules + contact capture + fields table
│   ├── actions.md                                   ← All 15 GHL actions + email templates
│   └── chatwidget.md                                ← Widget display settings
│
├── Watts-Group-AI-Agent/                            ← Watts Group chatbot config
│   ├── personality.md
│   ├── goal.md
│   └── additional-info.md
│
├── KB-General/                                      ← Shared KB — attach to BOTH agents
│   ├── _instruction.md                              ← When each bot uses this KB
│   ├── wattsgroup-overview.md                       ← Company, leadership, values
│   ├── verticals.md                                 ← All 9 verticals + routing table
│   ├── riteshwatts.md                               ← Personal brand + credentials
│   ├── wattscommunity.md                            ← Community, membership, programs
│   ├── aifyze-overview.md                           ← Aifyze overview (for Watts Group bot)
│   └── faq.md                                       ← 14 Q&As across all entities
│
├── Knowledge-Bases/                                 ← Aifyze-specific KBs
│   ├── KB1-Assessment-and-Scoring/
│   │   ├── _instruction.md                          ← When to use this KB
│   │   ├── rich-text.md                             ← 5 questions, scoring model, report template
│   │   └── faq.md                                   ← Assessment FAQs
│   │
│   ├── KB2-Services-and-Pricing/
│   │   ├── _instruction.md
│   │   ├── rich-text.md                             ← Service descriptions + pricing
│   │   └── faq.md
│   │
│   ├── KB3-Objection-Handling/
│   │   ├── _instruction.md
│   │   └── faq.md                                   ← All objection responses
│   │
│   └── KB4-Company-and-Contact/
│       ├── _instruction.md
│       ├── rich-text.md                             ← About Aifyze + contact details
│       └── faq.md
│
├── Workflows/                                       ← GHL workflows to build manually
│   ├── chatbot-lead-notify-workflow.md              ← Fires when chat ends (tag + opportunity + admin email)
│   ├── book-appointment-workflow.md                 ← Fires when audit is booked (tag + opportunity + confirmation emails)
│   ├── post-conversation-workflow.md                ← Fires on AI summary update (routing + tagging + pipeline)
│   └── contact-form-lead-workflow.md                ← Fires on Contact Form submit (tag + opportunity in Client Acquisition pipeline)
│
├── Forms/
│   └── aifyze-contact-form.md                       ← Website Contact Form fields + custom field mapping
│
├── Email-Templates/                                 ← Premium HTML email templates (paste into GHL Send Email actions)
│   ├── ET-01-contact-form-internal-notification.md  ← Sent to Ritesh when the contact form is submitted
│   └── ET-02-contact-form-ack-contact.md             ← Sent to the contact who submitted the form
│
└── Opportunities/
    └── aifyze-client-acquisition-pipeline.md        ← Single CRM pipeline: Lead Submitted → Lead Contacted → Qualified → Discovery Scheduled → No-Show → Proposal Sent (chatbot + form leads both land here)
```

---

## GHL Setup Instructions

### Step 1 — Create KB General (shared by both agents)

**Settings → Knowledge Base → Create New**

Name: `Watts Group — General`

| Entry Name | Type | Source File |
|---|---|---|
| Watts Group — Company Overview | Rich Text | `KB-General/wattsgroup-overview.md` |
| Watts Group — All Verticals | Rich Text | `KB-General/verticals.md` |
| Ritesh Watts — Personal Brand | Rich Text | `KB-General/riteshwatts.md` |
| Watts Community — Overview | Rich Text | `KB-General/wattscommunity.md` |
| Aifyze — General Overview | Rich Text | `KB-General/aifyze-overview.md` |
| FAQs | FAQ entries | `KB-General/faq.md` |

Paste `KB-General/_instruction.md` into the KB description/instruction field.

---

### Step 2 — Create Aifyze Knowledge Bases (KB1–KB4)

**Settings → Knowledge Base → Create New** for each:

| KB Name | Source Files |
|---|---|
| Aifyze — Assessment & Scoring | `KB1/rich-text.md` + `KB1/faq.md` |
| Aifyze — Services & Pricing | `KB2/rich-text.md` + `KB2/faq.md` |
| Aifyze — Objection Handling | `KB3/faq.md` only |
| Aifyze — Company & Contact | `KB4/rich-text.md` + `KB4/faq.md` |

For each KB: paste the `_instruction.md` into the KB description field.

---

### Step 3 — Create the Aifyze AI Agent

**Settings → AI Agents → Create Agent**

1. Paste `AI-Agent/personality.md` → **Personality** field
2. Paste `AI-Agent/goal.md` → **Goal** field
3. Paste `AI-Agent/additional-info.md` → **Additional Info** field
4. Attach all 5 KBs: KB General + KB1 + KB2 + KB3 + KB4
5. Configure all 15 actions from `AI-Agent/actions.md`
6. Configure Chat Widget from `AI-Agent/chatwidget.md`

---

### Step 4 — Create the Watts Group AI Agent

**Settings → AI Agents → Create Agent**

1. Paste `Watts-Group-AI-Agent/personality.md` → **Personality**
2. Paste `Watts-Group-AI-Agent/goal.md` → **Goal**
3. Paste `Watts-Group-AI-Agent/additional-info.md` → **Additional Info**
4. Attach **KB General** only

---

### Step 5 — Create the CRM Pipeline

**CRM → Pipelines → Add Pipeline**

Name: `Aifyze - Client Acquisition` — the single pipeline for every Aifyze lead, chatbot or Contact Form.

Stages (in order):
1. **Lead Submitted** — created automatically when a chat conversation ends OR the website Contact Form is submitted
2. **Lead Contacted** — moved manually once outreach is made
3. **Qualified** — moved manually once the lead is confirmed a fit
4. **Discovery Scheduled** — moved automatically on Appointment Created (Free AI Audit calendar, shared by both sources)
5. **No-Show** — moved manually if the contact misses their Discovery call
6. **Proposal Sent** — moved manually once a proposal is sent

Full setup: see `Opportunities/aifyze-client-acquisition-pipeline.md`

---

### Step 6 — Build the Workflows

Build each workflow manually in **Automation → Workflows**:

| Workflow Name | Trigger | What It Does | Source File |
|---|---|---|---|
| Aifyze — Chatbot Lead Tag & Notify | Conversation Status → Closed | Tags `aifyze-chatbot-lead` + creates opportunity in **Aifyze - Client Acquisition**, stage **Lead Submitted** + emails admin with summary | `Workflows/chatbot-lead-notify-workflow.md` |
| Aifyze — Book an Appointment | Appointment Created | Tags `aifyze-chatbot-audit-booked` + moves opportunity to **Discovery Scheduled** + sends confirmation to user + admin | `Workflows/book-appointment-workflow.md` |
| Aifyze — Post-Conversation Intelligence | Conversation AI Summary Updated | Classifies lead priority (AI Decision Maker) + applies service/pain/industry/urgency tags + routes to CRM pipeline stage | `Workflows/post-conversation-workflow.md` |
| Aifyze — Contact Form Lead & Client Acquisition | Form Submitted | Tags `aifyze-new-lead` + creates opportunity in **Aifyze - Client Acquisition** pipeline, stage **Lead Submitted** | `Workflows/contact-form-lead-workflow.md` |

> Chatbot and Contact Form workflows both write into the same **Aifyze - Client Acquisition** pipeline — there is no separate chatbot pipeline anymore.

---

### Step 7 — Create Custom Contact Fields in GHL

**Settings → Custom Fields → Contacts**

| Field Label | Key | Type |
|---|---|---|
| AI Readiness Score | `readiness_score` | Number |
| Business Type | `aifyze_business_type` | Single Line Text |
| Team Size | `aifyze_team_size` | Single Line Text |
| Main Pain Point | `aifyze_main_pain_point` | Single Line Text |
| Current Tools | `aifyze_current_tools` | Single Line Text |
| AI Usage Level | `aifyze_ai_usage_level` | Single Line Text |
| Readiness to Act | `aifyze_readiness_to_act` | Single Line Text |
| Score Band | `aifyze_score_band` | Single Line Text |
| Suggested Service | `aifyze_suggested_service` | Single Line Text |
| Urgency Level | `aifyze_urgency_level` | Single Line Text |
| Stage of AI in your Business *(typo is intentional — matches the live field)* | `style_of_business_mangement` | Single Options |

> `{{contact.name}}`, `{{contact.email}}`, `{{contact.phone}}`, `{{contact.organization}}` (Business Name), and `{{contact.country}}` are all GHL standard fields — do not create custom fields for these. See `Forms/aifyze-contact-form.md` for the full field-mapping note, including the two similarly-named decoy fields already in this GHL account (`business_name`/`businss_name` and `style_of_business_management`) that are **not** used by this form.

---

### Step 8 — Create Tags in GHL

**Settings → Tags → Add**

**Chatbot lifecycle:**
`aifyze-chatbot-lead` | `aifyze-chatbot-audit-booked`

**Contact form lifecycle:**
`aifyze-new-lead`

**Service fit:**
`process-automation-fit` | `strategy-fit` | `ai-ceo-fit`

**Pain:**
`missed-leads` | `repetitive-admin` | `customer-support-load` | `reporting-manual` | `fragmented-tools` | `no-ai-strategy`

**Urgency:**
`exploring` | `90-day-interest` | `ready-now` | `wants-callback` | `high-intent`

**Industry:**
`real-estate` | `ecommerce` | `healthcare` | `agency` | `coaching-consulting` | `professional-services` | `general-business`

**Business size:**
`small-business-fit` | `growth-stage-fit` | `agency-fit` | `consultant-fit` | `enterprise-light-fit`

---

## Key Rules Reference

| Rule | Detail |
|---|---|
| KB General | Attach to BOTH agents |
| Aifyze bot — when to use KB General | Only when user asks about Watts Group, other verticals, or Ritesh Watts |
| Watts Group bot — KB | KB General is the only KB |
| Score storage | Plain integer only e.g. `74` — never store `/100`, band label, or text alongside the number |
| Score field type | Number — GHL Add Contact Info can be unreliable for this field |
| Score calculation | Q1+Q2+Q3+Q4+Q5 must equal 0–100. If above 100, recalculate. Never use a number the user mentioned as the score |
| Email | Optional — ask once, casually. Deliver the report regardless. The report is in chat, not email |
| Report delivery | Full AI Readiness Report delivered in chat after email step (given or skipped) |
| Q4 and Q5 | Always ask in Phase 4 — never skip, never ask in Phase 2 |
| Phase 3 gate | Mandatory — cannot enter Phase 4 without explicit yes |
| Contact fields — standard | `{{contact.name}}`, `{{contact.email}}`, `{{contact.phone}}` — GHL captures automatically |
| Contact fields — custom | Require Add Contact Info actions (Actions 4–13) |
