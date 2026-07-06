# Workflow: Aifyze — Chatbot Lead Tag & Admin Notify

> Simple workflow that fires whenever a chatbot conversation ends.
> Does two things: tags the contact as a chatbot lead, and emails the admin a summary of the conversation.

---

## Trigger

**Trigger Type:** Conversation Status Changed → Closed

**Filter:** Channel is Web Chat (or Live Chat — select whichever GHL uses for your chatbot widget)

> This fires for every chat that closes — whether or not the assessment was completed.

---

## Action 1 — Add Tag

**Action Type:** Add Tag

**Tag to apply:** `aifyze-chatbot-lead`

> Applied to every contact who came through the Aifyze chatbot. Use this to filter chatbot leads in the CRM.

---

## Action 2 — Create Opportunity

**Action Type:** Create and Update Opportunity

**Pipeline:** Aifyze - Client Acquisition

**Stage:** Lead Submitted

**Opportunity Name:** {{contact.name}} — AI Readiness

**Opportunity Source:** Chatbot

**Assigned To:** hello@aifyze.com

> This pipeline is shared with website Contact Form leads (see `contact-form-lead-workflow.md`) — both sources land in Lead Submitted, distinguished by tag (`aifyze-chatbot-lead` vs `aifyze-new-lead`) and Opportunity Source.

---

## Action 3 — Send Email to Admin

**Action Type:** Send Email

**To:** hello@aifyze.com

**Subject:** Chatbot Conversation — {{contact.name}} | {{contact.email}}

**Body:**

Hi team,

A chatbot conversation just ended. Here's the summary:

---

**Contact**
Name: {{contact.name}}
Email: {{contact.email}}
Phone: {{contact.phone}}

---

**Assessment Results** *(if assessment was completed)*
AI Readiness Score: {{contact.readiness_score}} / 100
Score Band: {{contact.aifyze_score_band}}
Suggested Service: {{contact.aifyze_suggested_service}}
Business Type: {{contact.aifyze_business_type}}
Team Size: {{contact.aifyze_team_size}}
Main Pain Point: {{contact.aifyze_main_pain_point}}
Current Tools: {{contact.aifyze_current_tools}}
AI Usage Level: {{contact.aifyze_ai_usage_level}}
Readiness to Act: {{contact.aifyze_readiness_to_act}}
Urgency Level: {{contact.aifyze_urgency_level}}

---

**Conversation Summary**

{{conversations_ai.summary}}

---

The Aifyze Team
hello@aifyze.com | +1 (579) 569 9999
aifyze.com
