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

## Action 2 — Trigger Workflow: Score Field Updater

**Action Type:** Trigger a Workflow

**Action Name:** `Update Score Fields`

**Workflow(s) to select:** Aifyze — Score Field Updater

**When to trigger the workflow:**
Trigger after the bot sends the message containing "Your AI Readiness Score:" in chat. This workflow extracts the score from the conversation text and writes it to {{contact.readiness_score}}, {{contact.aifyze_score_band}}, and {{contact.aifyze_suggested_service}} — bypassing the unreliable Add Contact Info action for the Number field.

---

## Action 3 — Trigger Workflow: Lead CRM Update

**Action Type:** Trigger a Workflow

**Action Name:** `Send AI Readiness Report`

**Workflow(s) to select:** Aifyze — AI Readiness Report Delivery

**Note:** The AI Readiness Report is delivered IN CHAT by the bot — not by email. The email captured from the user is for future AI recommendations only. This workflow handles CRM actions only — it does NOT send an email report to the user.

**When to trigger the workflow:**
Trigger after all Add Contact Info actions have been called for the current conversation — Actions 5, 6, 7, and 8 ({{contact.aifyze_business_type}}, {{contact.aifyze_team_size}}, {{contact.aifyze_main_pain_point}}, {{contact.readiness_score}}). This ensures returning contacts always have their fields overwritten with fresh values. Trigger at the same time the bot delivers the in-chat report.

The workflow should:
- Add the contact to the GHL CRM pipeline at the correct stage
- Apply the relevant service fit, urgency, and pain tags from the conversation
- Send an internal notification to the Aifyze team with the lead summary
- Do NOT email the full report to the user — the bot delivers it in chat

---

### Email Template — Follow-Up to Lead (sent to lead after chat)

**Note:** The full AI Readiness Report was already delivered in the chatbot. This email is a light follow-up / recommendations email — not a repeat of the report.

**Subject:** Great chatting, {{contact.name}} — a few things worth knowing

**Body:**

Hi {{contact.name}},

It was great helping you today. Your AI Readiness Score of {{contact.readiness_score}} / 100 puts you in the {{contact.aifyze_score_band}} category — and based on your setup, there's a clear path forward.

If you haven't already booked your free AI Audit, that's your clearest next step. In 30 minutes, an Aifyze expert will walk through your results, confirm your top AI opportunities, and give you a concrete first action — no commitment needed.

👉 [Book Your Free AI Audit](https://aifyze.com/contact)

If you have any questions in the meantime, just reply to this email. We read every one.

Warm regards,
The Aifyze Team
hello@aifyze.com | +1 (579) 569 9999
aifyze.com

---

### Internal Notification Template — Lead Report Delivered (sent to Aifyze team)

**Subject:** New Lead Report Sent — {{contact.name}} (Score: {{contact.readiness_score}})

**Body:**

A new AI Readiness Report has been delivered. Here is the lead summary:

**Contact Details**
- Name: {{contact.name}}
- Email: {{contact.email}}
- Phone: {{contact.phone}}

**Assessment Results**
- AI Readiness Score: {{contact.readiness_score}}
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
- AI Readiness Score: {{contact.readiness_score}}
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
Call or email {{contact.name}} within 60 minutes. Reference their pain point ({{contact.aifyze_main_pain_point}}) and score ({{contact.readiness_score}}) in your opening message to show you've done your homework.

---

> **Note — Full Name & Email (Standard Fields)**
> {{contact.name}} and {{contact.email}} are GHL standard fields and **do not appear** in the "Add Contact Info" field dropdown. Do NOT create Add Contact Info actions for these. Instead:
> - In the **AI Agent Prompt / Additional Instructions**, instruct the bot to ask for name and email in plain language before delivering the report.
> - GHL captures these automatically when the contact replies with their name or email during the conversation, as long as the bot asks for them clearly and in sequence.
> - Ensure the bot asks for full name first, then email — one per message.

---

## Action 4 — Add Contact Info: Business Industry

**Action Type:** Add Contact Info

**Action Name:** `Capture Business Industry`

**Contact field to update:** {{contact.aifyze_business_type}}

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

**Contact field to update:** {{contact.aifyze_team_size}}

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

**Contact field to update:** {{contact.aifyze_main_pain_point}}

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

**Contact field to update:** {{contact.readiness_score}}

**When to trigger:**
Fire immediately after the bot sends the message containing "Your AI Readiness Score:" in the chat. Always overwrite any previously stored value — use the score from the current conversation only, never a value from a previous session.

**What to update in the field:**
The AI Readiness Score integer stated in the bot's chat message. After the bot says "Your AI Readiness Score: [X] / 100", extract that integer and store it here. Example: bot says "Your AI Readiness Score: 85 / 100 — Strong Readiness" → store 85. Digits only — no /100, no band label, no text.

**Output Example:**
- `88`
- `42`
- `74`

---

## Action 8 — Add Contact Info: Current Tools

**Action Type:** Add Contact Info

**Action Name:** `Capture Current Tools`

**Contact field to update:** {{contact.aifyze_current_tools}}

**GHL field to create:** Key: `aifyze_current_tools` | Type: Single Line Text

**When to trigger:**
Fire after the user answers Q3. Always overwrite with the current conversation's answer.

**What to update in the field:**
The tools, software, or systems the contact currently uses to run their business. Store as a short comma-separated list or phrase in the user's own words. If no tools are used, store "No digital tools — everything manual".

**Output Example:**
- `QuickBooks, spreadsheets, WhatsApp`
- `No digital tools — everything manual`

---

## Action 9 — Add Contact Info: Current AI Usage Level

**Action Type:** Add Contact Info

**Action Name:** `Capture Current AI Usage Level`

**Contact field to update:** {{contact.aifyze_ai_usage_level}}

**GHL field to create:** Key: `aifyze_ai_usage_level` | Type: Single Line Text

**When to trigger:**
Fire after the user answers Q4. Map their answer to one of the exact labels below — do not store raw answer text.

**What to update in the field:**
The contact's current AI adoption level. Use exactly one of these labels: No AI use / Personal experimentation only / Some team-level use / AI in a few workflows / AI embedded across operations.

**Output Example:**
- `No AI use`
- `Personal experimentation only`

---

## Action 10 — Add Contact Info: Readiness to Act

**Action Type:** Add Contact Info

**Action Name:** `Capture Readiness to Act`

**Contact field to update:** {{contact.aifyze_readiness_to_act}}

**GHL field to create:** Key: `aifyze_readiness_to_act` | Type: Single Line Text

**When to trigger:**
Fire after the user answers Q5. Map their answer to one of the exact labels below.

**What to update in the field:**
Map Q5 answer to one label: Just exploring (no plan, just curious) / Interested but no timeline (vague interest, no date) / Want a plan soon (next few months) / Ready in 30–90 days (next month, 20-30 days, within 90 days, soon) / Need expert help now (ASAP, immediately, starting now). Example: user says "20-30 days" → store Ready in 30–90 days

**Output Example:**
- `Ready in 30–90 days`
- `Need expert help now`

---

## Action 11 — Add Contact Info: Score Band

**Action Type:** Add Contact Info

**Action Name:** `Capture Score Band`

**Contact field to update:** {{contact.aifyze_score_band}}

**GHL field to create:** Key: `aifyze_score_band` | Type: Single Line Text

**When to trigger:**
Fire immediately after calculating the readiness score, at the same time as Action 7. Derive the band from the score.

**What to update in the field:**
The score band label. Use exactly one of these: Very Early (0–29) / Emerging (30–49) / Ready to Pilot (50–69) / Strong Readiness (70–84) / High-Leverage Ready (85–100). Store the label only, not the range.

**Output Example:**
- `Strong Readiness`
- `Emerging`

---

## Action 12 — Add Contact Info: Suggested Service Path

**Action Type:** Add Contact Info

**Action Name:** `Capture Suggested Service Path`

**Contact field to update:** {{contact.aifyze_suggested_service}}

**GHL field to create:** Key: `aifyze_suggested_service` | Type: Single Line Text

**When to trigger:**
Fire immediately after the bot sends the message containing "recommended Aifyze service for you is:" in chat — at the same time as Action 8 (Capture AI Readiness Score).

**What to update in the field:**
Store ONLY one of these exact labels: AI Strategy Consulting | AI-fy Your Business Processes | Hire Your AI CEO. Find the phrase "recommended Aifyze service for you is:" in the bot's chat message and store what follows. NEVER store business type, industry, or team size. If not found, derive from score: 0–49=AI Strategy Consulting | 50–84=AI-fy Your Business Processes | 85–100=Hire Your AI CEO.

**Output Example:**
- `AI-fy Your Business Processes`
- `AI Strategy Consulting`

---

## Action 13 — Add Contact Info: Urgency Level

**Action Type:** Add Contact Info

**Action Name:** `Capture Urgency Level`

**Contact field to update:** {{contact.aifyze_urgency_level}}

**GHL field to create:** Key: `aifyze_urgency_level` | Type: Single Line Text

**When to trigger:**
Fire after Q5. Derive from the user's readiness answer and overall conversation tone.

**What to update in the field:**
The contact's urgency. Use exactly one of these labels: exploring / 90-day-interest / ready-now / wants-callback / high-intent.

**Output Example:**
- `ready-now`
- `90-day-interest`

---

## Action 14 — Stop Bot

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

## Action 15 — Bot Transfer: Human Request

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
