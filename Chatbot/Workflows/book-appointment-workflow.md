# Workflow: Aifyze — Book an Appointment

> Email templates for the appointment booking workflow. The booking logic is handled by GHL's calendar action. This workflow fires after a booking is confirmed and sends two emails: one to the user, one to the admin.

---

## Trigger

**Trigger Type:** Appointment Created (GHL calendar: Aifyze — Free AI Audit)

---

## Action 1 — Add Tag

**Action Type:** Add Tag

**Tag to apply:** `aifyze-chatbot-audit-booked`

---

## Action 2 — Move Opportunity to Audit Booked

**Action Type:** Create and Update Opportunity

**Opportunity Name:** {{contact.name}} — AI Readiness

**Pipeline:** Aifyze — Chatbot Leads

**Find opportunity by:** Contact

**Update Stage to:** Audit Booked

> Moves this contact's opportunity from New Lead → Audit Booked as soon as the appointment is confirmed.

---

## Email 1 — Confirmation to User

**To:** {{contact.email}}

**Subject:** Your Free AI Audit is Confirmed, {{contact.name}}

**Body:**

Hi {{contact.name}},

Your free AI Audit with Aifyze is booked. Here are your appointment details:

**Date & Time:** {{appointment.start_time}}
**Location / Meeting Link:** {{appointment.meeting_location}}
**Duration:** 30 minutes

---

**Your AI Readiness Summary:**

- **AI Readiness Score:** {{contact.readiness_score}} / 100 — {{contact.aifyze_score_band}}
- **Recommended Service:** {{contact.aifyze_suggested_service}}
- **Your Main Pain Point:** {{contact.aifyze_main_pain_point}}
- **Current Tools:** {{contact.aifyze_current_tools}}
- **Readiness to Act:** {{contact.aifyze_readiness_to_act}}

---

**What to expect in your session:**

In this 30-minute call, an Aifyze expert will:
- Walk through your AI Readiness Score and what it means for your business
- Identify your top 1–2 AI opportunities based on your pain points and current setup
- Walk you through the {{contact.aifyze_suggested_service}} service and how it applies to you
- Give you a clear, practical first step — no commitment required

Come with any questions. We'll do the heavy lifting.

---

**Need to reschedule?**

Reply to this email or use the link below to pick a new time.
{{appointment.reschedule_link}}

We look forward to speaking with you.

Warm regards,
The Aifyze Team
hello@aifyze.com | +1 (579) 569 9999
aifyze.com

---

## Email 2 — Notification to Admin

**To:** hello@aifyze.com

**Subject:** New AI Audit Booked — {{contact.name}} | Score: {{contact.readiness_score}}

**Body:**

A new Free AI Audit has been booked. Review the lead details below and prepare for the call.

---

**APPOINTMENT**
Date & Time: {{appointment.start_time}}
Duration: 30 minutes

**CONTACT**
Name: {{contact.name}}
Email: {{contact.email}}
Phone: {{contact.phone}}

**ASSESSMENT RESULTS**
AI Readiness Score: {{contact.readiness_score}} / 100
Score Band: {{contact.aifyze_score_band}}
Suggested Service: {{contact.aifyze_suggested_service}}
Business Type: {{contact.aifyze_business_type}}
Team Size: {{contact.aifyze_team_size}}
Main Pain Point: {{contact.aifyze_main_pain_point}}
Current Tools: {{contact.aifyze_current_tools}}
AI Usage Level: {{contact.aifyze_ai_usage_level}}
Readiness to Act: {{contact.aifyze_readiness_to_act}}

**PREPARATION NOTES**
- Reference their pain point ({{contact.aifyze_main_pain_point}}) early in the call
- Their suggested service is {{contact.aifyze_suggested_service}} — lead the conversation toward this
- Score {{contact.readiness_score}}: if 70+, focus on immediate ROI opportunities; if below 70, focus on roadmap and clarity first
