# Aifyze Chatbot — GHL Setup Guide

This folder maps 1:1 to how the bot is built inside GoHighLevel.

---

## GHL Hierarchy

```
AI Agent (one)
│   ├── Personality          → AI-Agent/personality.md
│   ├── Goal                 → AI-Agent/goal.md
│   ├── Additional Info      → AI-Agent/additional-info.md
│   ├── Actions              → AI-Agent/actions.md
│   └── Chat Widget Config   → AI-Agent/chatwidget.md
│
└── Knowledge Bases (attached to agent)
    ├── KB1 — Assessment & Scoring       → Knowledge-Bases/KB1-Assessment-and-Scoring/
    ├── KB2 — Services & Pricing         → Knowledge-Bases/KB2-Services-and-Pricing/
    ├── KB3 — Objection Handling         → Knowledge-Bases/KB3-Objection-Handling/
    └── KB4 — Company & Contact          → Knowledge-Bases/KB4-Company-and-Contact/
```

---

## How to Set Up in GHL

### Step 1 — Create Knowledge Bases
Go to **Settings → Knowledge Base → Create New** for each KB below.

| KB Name (use exactly) | Type | Source File | Routing Instruction |
|---|---|---|---|
| Aifyze — Assessment & Scoring | Rich Text + FAQ | KB1 folder | See `KB1/_instruction.md` |
| Aifyze — Services & Pricing | Rich Text + FAQ | KB2 folder | See `KB2/_instruction.md` |
| Aifyze — Objection Handling | FAQ only | KB3 folder | See `KB3/_instruction.md` |
| Aifyze — Company & Contact | Rich Text + FAQ | KB4 folder | See `KB4/_instruction.md` |

For each KB:
- Paste the contents of `rich-text.md` into the **Rich Text** section (if file exists)
- Add each FAQ block from `faq.md` as individual **FAQ entries**
- Add the routing instruction from `_instruction.md` into the KB description/instruction field

### Step 2 — Create the AI Agent
Go to **Settings → AI Agents → Create Agent**

- Copy **personality.md** → paste into the **Personality** field
- Copy **goal.md** → paste into the **Goal** field
- Copy **additional-info.md** → paste into the **Additional Info** field
- Attach all 4 Knowledge Bases to this agent

### Step 3 — Configure Actions
See `AI-Agent/actions.md` for each action configuration.

### Step 4 — Configure the Chat Widget
See `AI-Agent/chatwidget.md` for all widget display settings: bubble color, font, welcome messages, inactivity messages, legal text, feedback messages, and placeholder color.

---

## File Map

```
Chatbot/
├── README.md                                 ← This file — GHL setup guide
├── Knowledgebase.md                          ← Legacy single-file version (archived)
│
├── AI-Agent/
│   ├── personality.md                        ← Bot persona + tone (paste into Personality field)
│   ├── goal.md                               ← Primary purpose (paste into Goal field)
│   ├── additional-info.md                    ← Hard rules + data capture (paste into Additional Info)
│   ├── actions.md                            ← All GHL action configurations
│   └── chatwidget.md                         ← Chat widget display settings (bubble color, messages, etc.)
│
└── Knowledge-Bases/
    ├── KB1-Assessment-and-Scoring/
    │   ├── _instruction.md                   ← Routing instruction for this KB
    │   ├── rich-text.md                      ← Conversation flow, questions, scoring model
    │   └── faq.md                            ← Assessment FAQs
    │
    ├── KB2-Services-and-Pricing/
    │   ├── _instruction.md
    │   ├── rich-text.md                      ← Service descriptions + pricing
    │   └── faq.md                            ← Service & pricing FAQs
    │
    ├── KB3-Objection-Handling/
    │   ├── _instruction.md
    │   └── faq.md                            ← All objection responses
    │
    └── KB4-Company-and-Contact/
        ├── _instruction.md
        ├── rich-text.md                      ← About Aifyze + contact details
        └── faq.md                            ← Company & contact FAQs
```
