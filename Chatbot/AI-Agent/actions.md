# AI Agent — Actions Configuration

> Set up each action below inside the AI Agent's **Actions** tab in GHL.
> Actions are listed in the order they should be configured.

---

## Action 1 — Appointment Booking

**Action Type:** Appointment Booking

**Calendar to select:** Aifyze — Free AI Audit

**When the bot triggers this:**
When the user asks to book a call, requests to speak with the team, or expresses strong interest in getting started. This should also trigger after a high score (60+) when the bot recommends next steps.

**Bot line before triggering:**
> "I can book a free AI audit for you right now — it only takes a moment. Let me pull up the calendar."

**Bot line after booking confirms:**
> "You're booked. An Aifyze expert will walk you through your AI opportunities and answer any questions. Check your email for the confirmation."

---

## Action 2 — Trigger Workflow: Lead Report Delivery

**Action Type:** Trigger a Workflow

**Action Name:** `Send AI Readiness Report`

**Workflow(s) to select:** Aifyze — AI Readiness Report Delivery

**When to trigger the workflow:**
Trigger immediately after the user provides their email address AND the AI Readiness Score has been calculated. This is the point at which the bot says it is sending the report.

The workflow should:
- Email the full AI Readiness Report to the captured address
- Add the contact to the GHL CRM pipeline at the correct stage
- Apply the relevant service fit, urgency, and pain tags from the conversation
- Send an internal notification to the Aifyze team with the lead summary

---

### Email Template — AI Readiness Report (sent to lead)

**Subject:** Your AI Readiness Report is here, {{contact.name}} 🎯

**Body:**

Hi {{contact.name}},

Thanks for taking the time to complete the AI Readiness Assessment — here's your personalised report.

---

**Your AI Readiness & Opportunity Score: {{contact.ai_readiness_score}} out of 100**

Based on what you shared, here's a snapshot of where your business stands:

- **Business:** {{contact.aifyze_business_type}}
- **Team Size:** {{contact.aifyze_team_size}}
- **Biggest Bottleneck:** {{contact.aifyze_main_pain_point}}

Your score reflects how much AI opportunity exists in your current operations — and where the fastest wins are. Our team has reviewed your profile and identified a few practical starting points tailored to your situation.

---

**What this means for your business:**

Your score of {{contact.ai_readiness_score}} tells us there is real AI opportunity in your operations — particularly around {{contact.aifyze_main_pain_point}}.

The fastest wins for businesses like yours are typically in automating the repetitive, time-consuming work that takes your team away from higher-value tasks. Aifyze builds these solutions on top of what you already use — no tech overhaul needed.

---

**Your recommended next step:**

Book a free 30-minute AI Audit with one of our experts. We'll walk through your score together, identify your top 1–2 AI opportunities, and give you a clear action plan — no commitment required.

👉 [Book Your Free AI Audit](https://aifyze.com/contact)

---

If you have questions before then, just reply to this email — we read every one.

Warm regards,
The Aifyze Team
hello@aifyze.com | +1 (579) 569 9999
aifyze.com

---

### Internal Notification Template — Lead Report Delivered (sent to Aifyze team)

**Subject:** New Lead Report Sent — {{contact.name}} (Score: {{contact.ai_readiness_score}})

**Body:**

A new AI Readiness Report has been delivered. Here is the lead summary:

**Contact Details**
- Name: {{contact.name}}
- Email: {{contact.email}}
- Phone: {{contact.phone}}

**Assessment Results**
- AI Readiness Score: {{contact.ai_readiness_score}}
- Business Type: {{contact.aifyze_business_type}}
- Team Size: {{contact.aifyze_team_size}}
- Main Pain Point: {{contact.aifyze_main_pain_point}}

**CRM Actions Taken**
- Contact added to pipeline at correct stage
- Service fit, urgency, and pain tags applied

**Suggested Follow-Up**
Review the score band and assign the appropriate next step. If the score is 60+, prioritise outreach within 24 hours.

---

## Action 3 — Trigger Workflow: High Intent Alert

**Action Type:** Trigger a Workflow

**Action Name:** `High Intent — Notify Sales Team`

**Workflow(s) to select:** Aifyze — High Intent Sales Alert

**When to trigger the workflow:**
Trigger when ANY of the following occur:
- The user explicitly says they are ready to start or want to hire Aifyze
- The user asks for pricing or a proposal
- The user's score is 65 or above AND they indicate a timeline within 90 days
- The user says they want someone to call them

The workflow should:
- Send an immediate internal alert to the Aifyze sales team with the contact details and conversation summary
- Tag the contact as `ready-now` or `wants-callback` depending on what they said
- Move the contact to the hot leads stage in the CRM pipeline

---

### Internal Alert Template — High Intent Lead (sent to Aifyze sales team)

**Subject:** 🔥 High Intent Lead — {{contact.name}} | Action Required

**Body:**

A high-intent lead has just been flagged by the AI chatbot. This contact has indicated they are ready to move forward or has requested direct contact. Reach out within the hour.

**Contact Details**
- Name: {{contact.name}}
- Email: {{contact.email}}
- Phone: {{contact.phone}}

**Assessment Results**
- AI Readiness Score: {{contact.ai_readiness_score}}
- Business Type: {{contact.aifyze_business_type}}
- Team Size: {{contact.aifyze_team_size}}
- Main Pain Point: {{contact.aifyze_main_pain_point}}

**Trigger Reason** *(one of the following will apply)*
- Contact said they are ready to start or want to hire Aifyze
- Contact asked for pricing or a proposal
- Score is 65+ with a stated timeline within 90 days
- Contact asked to be called or to speak with someone

**CRM Actions Taken**
- Contact tagged as `ready-now` or `wants-callback`
- Contact moved to Hot Leads stage in the pipeline

**Recommended Action**
Call or email {{contact.name}} within 60 minutes. Reference their pain point ({{contact.aifyze_main_pain_point}}) and score ({{contact.ai_readiness_score}}) in your opening message to show you've done your homework.

---

> **Note — Full Name & Email (Standard Fields)**
> `{{contact.name}}` and `{{contact.email}}` are GHL standard fields and **do not appear** in the "Add Contact Info" field dropdown. Do NOT create Add Contact Info actions for these. Instead:
> - In the **AI Agent Prompt / Additional Instructions**, instruct the bot to ask for name and email in plain language before delivering the report.
> - GHL captures these automatically when the contact replies with their name or email during the conversation, as long as the bot asks for them clearly and in sequence.
> - Ensure the bot asks for full name first, then email — one per message.

---

## Action 4 — Add Contact Info: Business Industry

**Action Type:** Add Contact Info

**Action Name:** `Capture Business Industry`

**Contact field to update:** `{{contact.aifyze_business_type}}`

**What to update in the field:**
The type of business the contact runs and the industry they operate in. For example: marketing agency, real estate brokerage, healthcare clinic, e-commerce store, coaching practice.

**Output Example:**
- `B2B marketing agency — tech industry`
- `Real estate brokerage — residential property`
- `E-commerce store — health and wellness products`

*(Add to Additional Instructions in prompt: "During the conversation, ask the user what type of business they run and what industry they are in. Store this in {{contact.aifyze_business_type}}.")*

---

## Action 5 — Add Contact Info: Team Size

**Action Type:** Add Contact Info

**Action Name:** `Capture Team Size`

**Contact field to update:** `{{contact.aifyze_team_size}}`

**What to update in the field:**
The number of people on the contact's team or in their business. This may be stated as a number, a range, or a description such as "just me", "small team", "about 20 people".

**Output Example:**
- `3 people`
- `Just me — solo operator`
- `Around 25 — growing team`

*(Add to Additional Instructions in prompt: "Ask the user how many people are on their team. Store the answer in {{contact.aifyze_team_size}}.")*

---

## Action 6 — Add Contact Info: Main Pain Point

**Action Type:** Add Contact Info

**Action Name:** `Capture Main Pain Point`

**Contact field to update:** `{{contact.aifyze_main_pain_point}}`

**What to update in the field:**
The single biggest bottleneck, frustration, or time drain the contact describes during the conversation. This should be captured in the user's own words where possible. Examples: "spending too much time on admin", "leads falling through the cracks", "customer support is overwhelmed", "no visibility into what's working".

**Output Example:**
- `Weekly client reporting is done manually and takes 4–5 hours every week`
- `Lead follow-up falls through the cracks — no system to track them after first contact`
- `Customer support is overwhelmed — same questions answered repeatedly by the team`

*(Add to Additional Instructions in prompt: "Listen for the user's main pain point or bottleneck. When they describe it, store it in {{contact.aifyze_main_pain_point}} in their own words.")*

---

## Action 7 — Add Contact Info: AI Readiness Score

**Action Type:** Add Contact Info

**Action Name:** `Capture AI Readiness Score`

**Contact field to update:** `{{contact.ai_readiness_score}}`

**When to trigger:**
Immediately after the bot finishes calculating the score from the 5 assessment questions — BEFORE delivering the score in chat and BEFORE triggering the report workflow. This must be the first thing that happens after the score is calculated.

**What to update in the field:**
The calculated numeric score as a plain integer. The field is Number type — store digits only, no text, no /100, no band label.

**Output Example:**
- `74`
- `42`
- `88`

*(Add to Additional Instructions in prompt: "As soon as the AI Readiness Score is calculated, immediately store the plain number in {{contact.ai_readiness_score}} before saying anything else. The field is Number type — digits only. Example: 67")*

---

## Action 8 — Stop Bot

**Action Type:** Stop Bot

**Trigger Condition:**
The user has clearly indicated they are done with the conversation, the chat has reached a natural close, or a human agent has taken over.

**Example Phrases:**
- Goodbye
- Bye
- Thanks, that's all
- I'm done
- No thanks
- That's everything
- I'll be in touch
- Talk later

**Final Message:**
> "It was great chatting! If you have more AI questions anytime, just reopen this chat — I'm always here. You can also reach the team at hello@aifyze.com."

---

## Action 9 — Bot Transfer: Human Request

**Action Type:** Bot Transfer

**Action Name:** `Transfer to Human Agent`

**Bot to transfer to:** *(Select your live agent or human handover bot in GHL)*

**Trigger Condition:**
The user asks to speak with a real person, requests a phone call, asks for a custom proposal, raises legal or compliance questions, or expresses a level of urgency or complexity that requires human judgment.

**Example Phrases:**
- Speak to someone
- Talk to a person
- I want to speak to a human
- Can I talk to your team
- Call me
- I need a real person
- Can someone call me
- I want to book a call with your team
- This is too complex for a chatbot

**Auto Follow-Up Configuration:**

*Contact Stopped Replying — ON*

| Follow-up | Delay | Message |
|---|---|---|
| Follow-up 1 | 15 minutes | `Still there? No rush — I'm here whenever you're ready to continue.` |
| Follow-up 2 | 1 hour | `Just checking in. If you have more questions about AI for your business, I'm happy to help — or I can book a quick call with the Aifyze team.` |
| Follow-up 3 | 24 hours | `Whenever you're ready, your AI Readiness Score is waiting. It only takes a few minutes and gives you a clear picture of where your business stands with AI. No commitment needed.` |

*Contact is Busy — OFF*
*Contact Requested — OFF*
