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

## Action 4 — Add Contact Info: Business Industry

**Action Type:** Add Contact Info

**Action Name:** `Capture Business Industry`

**Contact field to update:** Industry (or custom field: `Business Type`)

**What to update in the field:**
The type of business the contact runs and the industry they operate in. For example: marketing agency, real estate brokerage, healthcare clinic, e-commerce store, coaching practice.

*(Add to Additional Instructions in prompt: "During the conversation, ask the user what type of business they run and what industry they are in. Store this as their Business Type.")*

---

## Action 5 — Add Contact Info: Team Size

**Action Type:** Add Contact Info

**Action Name:** `Capture Team Size`

**Contact field to update:** Custom field: `Team Size`

**What to update in the field:**
The number of people on the contact's team or in their business. This may be stated as a number, a range, or a description such as "just me", "small team", "about 20 people".

*(Add to Additional Instructions in prompt: "Ask the user how many people are on their team. Store the answer in the Team Size field.")*

---

## Action 6 — Add Contact Info: Main Pain Point

**Action Type:** Add Contact Info

**Action Name:** `Capture Main Pain Point`

**Contact field to update:** Custom field: `Main Pain Point`

**What to update in the field:**
The single biggest bottleneck, frustration, or time drain the contact describes during the conversation. This should be captured in the user's own words where possible. Examples: "spending too much time on admin", "leads falling through the cracks", "customer support is overwhelmed", "no visibility into what's working".

*(Add to Additional Instructions in prompt: "Listen for the user's main pain point or bottleneck. When they describe it, store it in the Main Pain Point field in their own words.")*

---

## Action 7 — Add Contact Info: AI Readiness Score

**Action Type:** Add Contact Info

**Action Name:** `Capture AI Readiness Score`

**Contact field to update:** Custom field: `AI Readiness Score`

**What to update in the field:**
The numeric score from 0 to 100 calculated at the end of the AI Readiness Assessment, along with the score band label. For example: `72 — AI-Ready` or `38 — Emerging`.

*(Add to Additional Instructions in prompt: "After calculating the AI Readiness Score, store the numeric score and band label in the AI Readiness Score field.")*

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
