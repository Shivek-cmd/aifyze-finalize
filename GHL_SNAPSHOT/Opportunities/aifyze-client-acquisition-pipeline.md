# Aifyze — Client Acquisition Pipeline

> Set this up under CRM → Pipelines in GHL. This is the **single pipeline** for every Aifyze lead, regardless of source — chatbot conversations and website Contact Form submissions both land here.

---

## Pipeline Name

**Aifyze - Client Acquisition**

---

## Stages

| # | Stage | Fires From |
|---|---|---|
| 1 | Lead Submitted | Chatbot conversation ends **OR** Contact Form submitted |
| 2 | Lead Contacted | Manual — sales makes first outreach |
| 3 | Qualified | Manual — confirmed fit |
| 4 | Discovery Scheduled | Appointment Created (Free AI Audit / Discovery call — same calendar for both sources) |
| 5 | No-Show | Manual — contact missed their scheduled call |
| 6 | Proposal Sent | Manual — proposal sent after a completed discovery call |

---

## Source tracking (how the two lead types stay distinguishable in one pipeline)

| | Chatbot | Contact Form |
|---|---|---|
| **Tag** | `aifyze-chatbot-lead` (+ `aifyze-chatbot-audit-booked` once booked) | `aifyze-new-lead` |
| **Opportunity Source** | `Chatbot` | `Aifyze- Contact Form (Website)` |
| **Opportunity Name** | `{{contact.name}} — AI Readiness` | `Aifyze Stage - {{contact.style_of_business_mangement}}` |
| **Created by workflow** | `Workflows/chatbot-lead-notify-workflow.md` | `Workflows/contact-form-lead-workflow.md` |

---

## Stage 1 — Lead Submitted

**When it fires (chatbot):** Conversation closes → `chatbot-lead-notify-workflow.md` creates the opportunity here.

**When it fires (form):** Contact Form submitted → `contact-form-lead-workflow.md` creates the opportunity here.

---

## Stage 2 — Lead Contacted

**When it fires:** Manually moved once sales/team makes first outreach (call, email, or DM) to the lead.

---

## Stage 3 — Qualified

**When it fires:** Manually moved once the lead is confirmed as a fit (budget, timeline, business need match).

---

## Stage 4 — Discovery Scheduled

**When it fires:** `book-appointment-workflow.md` moves the opportunity here on **Appointment Created** (Aifyze — Free AI Audit calendar). Shared trigger for both chatbot and form leads — whoever books that calendar lands here.

---

## Stage 5 — No-Show

**When it fires:** Manually moved if the contact does not show up for their scheduled Discovery call.

---

## Stage 6 — Proposal Sent

**When it fires:** Manually moved once a proposal has been sent following a completed discovery call.

---

## GHL Setup Notes

- Go to CRM → Pipelines → **Aifyze - Client Acquisition**
- Six stages in order: **Lead Submitted → Lead Contacted → Qualified → Discovery Scheduled → No-Show → Proposal Sent**
- Configure smart tags and stage display colors per team preference (Settings → Pipelines → Smart tags / Set pipeline display colors)
- This is the only Aifyze lead pipeline — the previous separate **Aifyze — Chatbot Leads** pipeline has been retired and merged in
