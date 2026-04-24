# Chatbot — GHL Setup Guide

This folder maps 1:1 to how both chatbots are built inside GoHighLevel.

There are **two AI Agents** — one for Aifyze, one for Watts Group. Both share the KB-General knowledge base. The Aifyze agent also has its own dedicated knowledge bases (KB1–KB4).

---

## Two Agents, One Shared KB

```
┌─────────────────────────────┐     ┌──────────────────────────────┐
│     Aifyze AI Agent         │     │   Watts Group AI Agent       │
│  (aifyze.com chatbot)       │     │  (wattsgroup.in chatbot)     │
│                             │     │                              │
│  Personality                │     │  Personality                 │
│  Goal                       │     │  Goal                        │
│  Additional Info            │     │  Additional Info             │
│  Actions                    │     │  (Actions — TBD)             │
│  Chat Widget                │     │                              │
│                             │     │                              │
│  KBs attached:              │     │  KBs attached:               │
│  ├── KB General ◄───────────┼─────┼──► KB General               │
│  ├── KB1 (Assessment)       │     │                              │
│  ├── KB2 (Services)         │     │                              │
│  ├── KB3 (Objections)       │     │                              │
│  └── KB4 (Company)          │     │                              │
└─────────────────────────────┘     └──────────────────────────────┘
```

---

## GHL Hierarchy — Aifyze AI Agent

```
AI Agent: Aifyze Assistant
│   ├── Personality          → AI-Agent/personality.md
│   ├── Goal                 → AI-Agent/goal.md
│   ├── Additional Info      → AI-Agent/additional-info.md
│   ├── Actions              → AI-Agent/actions.md
│   └── Chat Widget Config   → AI-Agent/chatwidget.md
│
└── Knowledge Bases (attached to agent)
    ├── KB General                       → KB-General/
    ├── KB1 — Assessment & Scoring       → Knowledge-Bases/KB1-Assessment-and-Scoring/
    ├── KB2 — Services & Pricing         → Knowledge-Bases/KB2-Services-and-Pricing/
    ├── KB3 — Objection Handling         → Knowledge-Bases/KB3-Objection-Handling/
    └── KB4 — Company & Contact          → Knowledge-Bases/KB4-Company-and-Contact/
```

---

## GHL Hierarchy — Watts Group AI Agent

```
AI Agent: Watts Group Assistant
│   ├── Personality          → Watts-Group-AI-Agent/personality.md
│   ├── Goal                 → Watts-Group-AI-Agent/goal.md
│   └── Additional Info      → Watts-Group-AI-Agent/additional-info.md
│
└── Knowledge Bases (attached to agent)
    └── KB General                       → KB-General/
```

---

## How to Set Up in GHL

### Step 1 — Create KB General (shared by both agents)

Go to **Settings → Knowledge Base → Create New**

| KB Name (use exactly) | Type |
|---|---|
| Watts Group — General | Rich Text (×5) + FAQ |

Add each file as a separate **Rich Text** entry inside this KB:

| Entry Name | Source File |
|---|---|
| Watts Group — Company Overview | `KB-General/wattsgroup-overview.md` |
| Watts Group — All Verticals | `KB-General/verticals.md` |
| Ritesh Watts — Personal Brand | `KB-General/riteshwatts.md` |
| Watts Community — Overview | `KB-General/wattscommunity.md` |
| Aifyze — General Overview | `KB-General/aifyze-overview.md` |

Then add `KB-General/faq.md` as individual **FAQ entries**.

Add the routing instruction from `KB-General/_instruction.md` into the KB description/instruction field.

---

### Step 2 — Create Aifyze Knowledge Bases (KB1–KB4)

Go to **Settings → Knowledge Base → Create New** for each:

| KB Name (use exactly) | Type | Source File | Routing Instruction |
|---|---|---|---|
| Aifyze — Assessment & Scoring | Rich Text + FAQ | KB1 folder | See `KB1/_instruction.md` |
| Aifyze — Services & Pricing | Rich Text + FAQ | KB2 folder | See `KB2/_instruction.md` |
| Aifyze — Objection Handling | FAQ only | KB3 folder | See `KB3/_instruction.md` |
| Aifyze — Company & Contact | Rich Text + FAQ | KB4 folder | See `KB4/_instruction.md` |

For each KB:
- Paste `rich-text.md` content into the **Rich Text** section (if file exists)
- Add each FAQ block from `faq.md` as individual **FAQ entries**
- Paste `_instruction.md` content into the KB description/instruction field

---

### Step 3 — Create the Aifyze AI Agent

Go to **Settings → AI Agents → Create Agent**

- Copy **personality.md** → paste into the **Personality** field
- Copy **goal.md** → paste into the **Goal** field
- Copy **additional-info.md** → paste into the **Additional Info** field
- Attach all 5 Knowledge Bases: KB General + KB1 + KB2 + KB3 + KB4
- Configure Actions from **actions.md**
- Configure Chat Widget from **chatwidget.md**

---

### Step 4 — Create the Watts Group AI Agent

Go to **Settings → AI Agents → Create Agent**

- Copy **Watts-Group-AI-Agent/personality.md** → paste into the **Personality** field
- Copy **Watts-Group-AI-Agent/goal.md** → paste into the **Goal** field
- Copy **Watts-Group-AI-Agent/additional-info.md** → paste into the **Additional Info** field
- Attach **KB General** only
- Actions: TBD (not yet configured)

---

## Full File Map

```
Chatbot/
├── README.md                                       ← This file — full setup guide
├── Knowledgebase.md                                ← Legacy single-file version (archived)
│
├── AI-Agent/                                       ← Aifyze chatbot configuration
│   ├── personality.md                              ← Bot persona + tone
│   ├── goal.md                                     ← 5-phase conversation goal
│   ├── additional-info.md                          ← Hard rules + contact capture
│   ├── actions.md                                  ← All 9 GHL actions + email templates
│   └── chatwidget.md                               ← Widget display settings
│
├── Watts-Group-AI-Agent/                           ← Watts Group chatbot configuration
│   ├── personality.md                              ← Bot persona + tone
│   ├── goal.md                                     ← 4-phase goal + vertical routing
│   └── additional-info.md                          ← Rules + KB routing + contact capture
│
├── KB-General/                                     ← Shared KB (used by BOTH agents)
│   ├── _instruction.md                             ← When each bot uses this KB
│   ├── wattsgroup-overview.md                      ← Rich Text: company, leadership, values
│   ├── verticals.md                                ← Rich Text: all 9 verticals + routing table
│   ├── riteshwatts.md                              ← Rich Text: personal brand, credentials
│   ├── wattscommunity.md                           ← Rich Text: community, membership, programs
│   ├── aifyze-overview.md                          ← Rich Text: Aifyze high-level (for WG bot)
│   └── faq.md                                      ← FAQ: 14 Q&As across all Watts Group entities
│
└── Knowledge-Bases/                                ← Aifyze-specific KBs
    ├── KB1-Assessment-and-Scoring/
    │   ├── _instruction.md                         ← Routing: use for assessment & scoring
    │   ├── rich-text.md                            ← 5 questions, scoring model, score bands
    │   └── faq.md                                  ← Assessment FAQs
    │
    ├── KB2-Services-and-Pricing/
    │   ├── _instruction.md                         ← Routing: use for services & pricing
    │   ├── rich-text.md                            ← Service descriptions + pricing
    │   └── faq.md                                  ← Service & pricing FAQs
    │
    ├── KB3-Objection-Handling/
    │   ├── _instruction.md                         ← Routing: use for objections
    │   └── faq.md                                  ← All objection responses
    │
    └── KB4-Company-and-Contact/
        ├── _instruction.md                         ← Routing: use for about/contact
        ├── rich-text.md                            ← About Aifyze + contact details
        └── faq.md                                  ← Company & contact FAQs
```

---

## Key Rules Summary

| Rule | Detail |
|---|---|
| KB General is shared | Attach to BOTH agents in GHL |
| Aifyze bot — KB General triggers | Only when user asks about Watts Group, other verticals, or Ritesh Watts |
| Watts Group bot — KB General | Primary and only KB for this agent |
| Contact fields (standard) | `{{contact.name}}`, `{{contact.email}}`, `{{contact.phone}}` — GHL captures automatically, no Add Contact Info action needed |
| Contact fields (custom) | `{{contact.aifyze_business_type}}`, `{{contact.aifyze_team_size}}`, `{{contact.aifyze_main_pain_point}}`, `{{contact.readiness_score}}` — require Add Contact Info actions in GHL |
| AI Readiness Score | Must be calculated as a number (0–100) + band label. Store as e.g. `74 — Strong Readiness`. Never store answer text. |
