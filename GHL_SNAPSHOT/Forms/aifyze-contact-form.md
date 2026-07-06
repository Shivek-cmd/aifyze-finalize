# Aifyze — Website Contact Form

> Lives on the Aifyze website Contact page (GHL native form embed). Submission triggers `Workflows/contact-form-lead-workflow.md`.

---

## Form Fields

| Field Label | Placeholder | Required | Maps To |
|---|---|---|---|
| Name | Your full name | Yes | `{{contact.name}}` |
| Email | your@email.com | Yes | `{{contact.email}}` |
| Phone | (000) 000 0000 | Yes | `{{contact.phone}}` |
| Business Name | Your business name | Yes | `{{contact.organization}}` |
| Country | Your country | Yes | `{{contact.country}}` |
| What's the Stage of AI in your Business | — (dropdown/select) | Yes | `{{contact.style_of_business_mangement}}` |

> `{{contact.name}}`, `{{contact.email}}`, `{{contact.phone}}`, `{{contact.organization}}` (Business Name → maps to the standard Company Name field), and `{{contact.country}}` are all GHL **standard** fields — no custom field setup needed for any of them.
>
> The Stage of AI question is the one **custom** field: `style_of_business_mangement` — note the **typo in the key** (missing the "a" in "mangement"). This is the actual live field already in the account. A differently-spelled field `style_of_business_management` (correct spelling) also exists in this GHL account but is an unrelated CRM-usage question from a different form — do not use it here.

---

## Custom Field Setup

**Settings → Custom Fields → Contacts**

| Field Label | Key | Type |
|---|---|---|
| Style of Business Mangement *(typo is intentional — matches the live field)* | `style_of_business_mangement` | Single Options |

> Business Name and Country do **not** need custom fields — they map to GHL's standard `organization` (Company Name) and `country` contact attributes.

---

## What Happens on Submit

1. Form submission creates/updates the contact with the fields above.
2. `Contact-Form-Lead-Workflow` fires (Form Submitted trigger) — see `Workflows/contact-form-lead-workflow.md`:
   - Adds tag `aifyze-new-lead`
   - Creates/updates an Opportunity in the **Aifyze - Client Acquisition** pipeline, stage **Lead Submitted**
