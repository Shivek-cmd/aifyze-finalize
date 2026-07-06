# Workflow: Aifyze — Contact Form Lead & Client Acquisition

> Fires whenever the website Contact Form (`Forms/aifyze-contact-form.md`) is submitted.
> Tags the contact as a new lead and creates/updates an opportunity in the **Aifyze - Client Acquisition** pipeline — the same single pipeline chatbot leads land in (see `chatbot-lead-notify-workflow.md`). Both sources share Lead Submitted; tag and Opportunity Source keep them distinguishable.

---

## Trigger

**Trigger Type:** Form Submitted

**Filter:** Form is the Aifyze Contact Form (Name, Email, Phone, Business Name, Country, Stage of AI in your Business)

---

## Action 1 — Add Tag

**Action Type:** Add Tag

**Tag to apply:** `aifyze-new-lead`

> Applied to every contact who submits the website contact form. Use this to distinguish form leads from chatbot leads (`aifyze-chatbot-lead`).

---

## Action 2 — Create/Update Opportunity

**Action Type:** Create and Update Opportunity

**Action Name:** Aifyze - Client Acquisition

**Pipeline:** Aifyze - Client Acquisition

**Pipeline Stage:** Lead Submitted

**Opportunity Name:** `Aifyze Stage - {{contact.style_of_business_mangement}}`

**Opportunity Source:** `Aifyze- Contact Form (Website)`

> If the source is empty, the source will remain unchanged in case of update, or it will be the contact's source in case of create.

---

## GHL Setup Notes

- Automation → Workflows → Add Workflow → name it **Aifyze — Contact Form Lead & Client Acquisition**
- Trigger: **Form Submitted** → select the Aifyze contact form
- Action 1: **Add Tag** → `aifyze-new-lead`
- Action 2: **Create/Update Opportunity** → Pipeline: `Aifyze - Client Acquisition`, Stage: `Lead Submitted`, Name: `Aifyze Stage - {{contact.style_of_business_mangement}}`, Source: `Aifyze- Contact Form (Website)`
- This pipeline (`Opportunities/aifyze-client-acquisition-pipeline.md`) is shared with the chatbot lead workflow — both create opportunities in the same pipeline, distinguished by tag and Opportunity Source
