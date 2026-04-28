# Aifyze — Opportunities Pipeline

> Set this up under CRM → Pipelines in GHL. This pipeline tracks every lead that comes through the chatbot.

---

## Pipeline Name

**Aifyze — Chatbot Leads**

---

## Stages

| Stage | Name | Trigger |
|---|---|---|
| 1 | New Lead | Chat conversation ends |
| 2 | Audit Booked | Contact books a Free AI Audit appointment |

---

## Stage 1 — New Lead

**When it fires:** Every time a chatbot conversation closes (via the Chatbot Lead Tag & Admin Notify workflow).

**Opportunity details to set:**
- **Opportunity Name:** `{{contact.name}} — AI Readiness`
- **Pipeline Stage:** New Lead
- **Assigned To:** hello@aifyze.com (or your default sales owner)
- **Monetary Value:** leave blank (no pricing committed yet)

---

## Stage 2 — Audit Booked

**When it fires:** When the contact books a Free AI Audit appointment (via the Book an Appointment workflow trigger: Appointment Created).

**Action:** Move the existing opportunity for this contact from New Lead → Audit Booked.

**Opportunity details to update:**
- **Pipeline Stage:** Audit Booked
- **Assigned To:** whoever is handling the audit call

---

## GHL Setup Notes

- Go to CRM → Pipelines → Add Pipeline → name it **Aifyze — Chatbot Leads**
- Add two stages in order: **New Lead** → **Audit Booked**
- In the chatbot-lead-notify workflow, add action: **Create and Update Opportunity** → Stage: New Lead
- In the book-appointment workflow, add action: **Add Tag** → `aifyze-chatbot-audit-booked`, then **Create and Update Opportunity** → Stage: Audit Booked
