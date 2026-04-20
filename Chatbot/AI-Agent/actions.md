# AI Agent — Actions Configuration

> Configure each action below inside the AI Agent's **Actions** tab in GHL.

---

## Action 1 — Appointment Booking

**Action Type:** Appointment Booking
**When to trigger:** When the user asks to book a call, requests an audit, or expresses strong buying intent (score 50+, urgency tag `ready-now` or `high-intent`).

**Bot line before triggering:**
> "I can book a free AI audit directly for you — it only takes a moment. Let me pull up the calendar."

**Calendar to use:** Aifyze Free AI Audit calendar
**Confirmation message after booking:**
> "You're booked. An Aifyze expert will review your readiness score and walk you through your highest-impact AI opportunities. Check your email for the confirmation."

---

## Action 2 — Trigger a Workflow

**Action Type:** Trigger a Workflow
**Workflow name:** Aifyze — AI Readiness Report Delivery

**When to trigger:** Immediately after email is captured AND score is calculated.

**What the workflow should do:**
1. Send the full AI Readiness & Opportunity Score report to the captured email
2. Tag the contact with the appropriate service fit, urgency, and pain tags
3. Notify the Aifyze sales team if score is 50+ or urgency tag is `ready-now` or `high-intent`
4. Add contact to the Aifyze CRM pipeline at the correct stage

**Bot line before triggering:**
> "I'm sending your full readiness report to [email] now — it should arrive within a few minutes."

---

## Action 3 — Contact Info Capture

**Action Type:** Contact Info
**Fields to capture:**
- First Name
- Email (mandatory)
- Phone (optional — only ask when user signals urgency)
- Business Name (if naturally provided)

**When to trigger:** After Question 3 or Question 5, before delivering score.

**Bot line for email ask:**
> "I've got enough to prepare your AI Readiness Score. What's the best email to send your full report and next-step recommendations to?"

**Bot line for phone ask (only if urgent):**
> "Would you also like to leave a phone number so the team can follow up faster?"

---

## Action 4 — Human Handover

**Action Type:** Human Handover
**When to trigger:**
- User asks for pricing beyond entry-level ranges
- User requests a custom proposal
- User has legal or compliance questions
- User says they want to speak to a person
- User score is 70+ AND urgency tag is `ready-now` or `wants-callback`

**Bot line before handing over:**
> "Let me connect you with someone from the Aifyze team who can help with that directly. One moment."

**Fallback if no agent available:**
> "Our team is currently unavailable but you can reach us at hello@aifyze.com or call +1 (579) 569-9999. We typically respond within a few hours."

---

## Action 5 — Stop Bot

**Action Type:** Stop Bot
**When to trigger:**
- Human agent has taken over the conversation
- User explicitly asks the bot to stop
- User says "I'll contact you directly" or similar

---

## Action 6 — Auto Follow-Up

**Action Type:** Auto Follow-Up
**When to trigger:** If user drops off mid-conversation without completing the assessment or providing email.

**Follow-up message (send after 10 minutes of inactivity):**
> "Hey — just checking in. Your AI readiness check only takes a couple more questions. Want to pick up where you left off?"

**Second follow-up (send after 24 hours if still no response):**
> "Whenever you're ready, your AI Readiness & Opportunity Score is waiting. It takes about 2 minutes and gives you a clear picture of where to start with AI. No commitment required."
