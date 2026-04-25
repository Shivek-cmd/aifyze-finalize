# KB1 — Rich Text: Assessment & Scoring

> Paste this into the **Rich Text** entry for the "Aifyze — Assessment & Scoring" Knowledge Base in GHL.

---

## What the Assessment Is

The AI Readiness & Opportunity Assessment is a 5-question conversation that takes 1–2 minutes. At the end, the user receives a personalised score from 0 to 100 called their AI Readiness & Opportunity Score.

The score measures:
- How much real workflow pain exists (opportunity for automation)
- How ready their existing tools are to integrate with AI
- How organised their workflows and data are
- How much AI they are already using (reverse scored — less AI use = more opportunity)
- How ready they are to act on AI improvements in the next 30–90 days

---

## Conversation Flow

**Assessment opener (use this ONLY after the user has agreed to take the assessment — not as the chat opening line):**
> "Perfect — just 5 simple questions that take about 1–2 minutes. Let's start."

**After all questions:**
> "Thanks — I've got everything I need to calculate your personalised score."

**Step 1 — Name ask (ask this FIRST, before email — store answer in {{contact.name}}):**
> "And just so I can personalise your report — what's your full name?"

**Step 2 — Email ask (ask this SECOND, after name — store answer in {{contact.email}}):**
> "What's the best email to send your full readiness report and next-step recommendations to? We send it there so you have everything in one place."

**After email given:**
> "Perfect — I'll send the full report there."

---

## The 5 Assessment Questions

**IMPORTANT: Ask EXACTLY these 5 questions in order. Do NOT substitute, rephrase significantly, or replace any question — especially Q4 and Q5. Do not add extra follow-up questions between them. One question per message, wait for the answer, then move to the next.**

**Question 1 — Business Profile**
> "First, what kind of business do you run, and roughly how big is your team?"

Capture: Industry/category → store in {{contact.aifyze_business_type}}; team size → store in {{contact.aifyze_team_size}}.

---

**Question 2 — Workflow Pain**
> "Which part of your business feels most repetitive or time-consuming right now — like invoicing, admin, scheduling, reporting, or something else?"

Capture: Main bottleneck → store in {{contact.aifyze_main_pain_point}} in the user's own words.

---

**Question 3 — Current Tools**
> "What tools do you currently use to run your business — for example spreadsheets, CRM, invoicing software, or project management tools?"

Capture: Tool stack; how organised systems are; whether work is tracked digitally → store in {{contact.aifyze_current_tools}} as a short comma-separated list. If no tools used, store "No digital tools — everything manual".

---

**Question 4 — Current AI Usage (Reverse Scored) — DO NOT SUBSTITUTE THIS QUESTION**
> "Are you using any AI tools in your business already — even in a small way — or just getting started?"

This question MUST be asked exactly as written. Do not replace it with questions about team openness, IT experience, or readiness for change. Those are different dimensions. This question is about current AI adoption and is reverse scored.

Capture: Map the answer to exactly one label → store in {{contact.aifyze_ai_usage_level}}:
- No AI use at all → store `No AI use` → 15 / 15
- Personal experimentation only → store `Personal experimentation only` → 12 / 15
- Some team-level use → store `Some team-level use` → 9 / 15
- AI in a few workflows → store `AI in a few workflows` → 5 / 15
- AI embedded across operations → store `AI embedded across operations` → 2 / 15

---

**Question 5 — Readiness to Act — DO NOT SUBSTITUTE THIS QUESTION**
> "If we found 1–2 simple AI opportunities that could save time or improve results, how ready would you be to act on them in the next 30–90 days?"

This question MUST be asked exactly as written. Do not replace it with questions about IT staff, team skills, or budgets. This question is about decision readiness and timeline.

Capture: Map the answer to exactly one label → store in {{contact.aifyze_readiness_to_act}}:
- Just exploring → store `Just exploring`
- Interested but no timeline → store `Interested but no timeline`
- Want a plan soon → store `Want a plan soon`
- Ready in 30–90 days → store `Ready in 30–90 days`
- Need expert help now → store `Need expert help now`

---

## Scoring Model

**IMPORTANT: After all 5 questions are answered, work through this exact calculation before doing anything else:**

Step 1 — Look up Q1 points from the Business Scale table below (10–20)
Step 2 — Look up Q2 points from the Workflow Pain table below (8–25)
Step 3 — Look up Q3 points from the Current Tools table below (6–20)
Step 4 — Look up Q4 points from the AI Usage table below (2–15)
Step 5 — Look up Q5 points from the Readiness to Act table below (5–20)
Step 6 — Add all five: Q1 + Q2 + Q3 + Q4 + Q5 = Total (must be between 0 and 100)

**The total is the score. Numbers the user mentioned (days, team sizes, timeframes) are NEVER the score. If a user said "20-30 days" that is NOT 2030 — it is a timeline answer that maps to a Q5 points value from the table. If a user has 60 employees, 60 is NOT the score — it maps to a Q1 points value from the table.**

Fire the Capture AI Readiness Score action with the calculated total. If your total is above 100, you made a calculation error — go back through Steps 1–5 and recalculate.

---

### Q1 — Business Scale (contributes up to 20 points)

Assess from their business type and team size answer:

| Situation | Points |
|---|---|
| Solo or freelancer | 10 |
| Small team, 2–10 people | 14 |
| Growing team, 11–50 people | 17 |
| Established business, 50+ people | 20 |

---

### Q2 — Workflow Pain / Repetition (contributes up to 25 points)

Assess from their biggest bottleneck answer:

| Situation | Points |
|---|---|
| No clear pain mentioned | 8 |
| One minor repetitive task | 14 |
| One major time-consuming bottleneck | 20 |
| Multiple repetitive tasks across the business | 25 |

---

### Q3 — Current Tools / Integration Readiness (contributes up to 20 points)

Assess from their tools answer:

| Situation | Points |
|---|---|
| Paper-based or no digital tools | 6 |
| Spreadsheets only | 10 |
| Some software but not connected | 14 |
| CRM or connected digital tools | 18 |
| Well-integrated digital stack | 20 |

---

### Q4 — Current AI Usage (reverse scored, contributes up to 15 points)

Less AI currently = more opportunity = higher score:

| Situation | Points |
|---|---|
| AI embedded across operations | 2 |
| AI in a few workflows | 5 |
| Some team-level AI use | 9 |
| Personal experimentation only | 12 |
| No AI use at all | 15 |

---

### Q5 — Readiness to Act (contributes up to 20 points)

Assess from their timeline / intent answer:

| Situation | Points |
|---|---|
| Just exploring, no intent | 5 |
| Interested but no timeline | 10 |
| Want a plan in the next few months | 14 |
| Ready to act within 30–90 days | 18 |
| Need help now / urgent | 20 |

---

### Final Score

Add all five category scores. The total is out of 100. Store the result as a plain number in {{contact.readiness_score}} — for example `77`. Do not store `/100`, a band label, or any text alongside the number. The field is a Number type — it accepts digits only.

**Example:** If Q1=14, Q2=20, Q3=10, Q4=15, Q5=18 → Total = 77 → store `77`

**CRITICAL: The score is ALWAYS between 0 and 100. It is calculated by adding points from the five tables above — nothing else. The team size, employee count, revenue, or any other number the user mentions is NOT the score. If your result is above 100, you have made a calculation error — check each table and recalculate.**

---

## Score Bands & Recommended Next Steps

| Score | Band | What It Means | Next Step |
|---|---|---|---|
| 0–29 | Very Early | Needs clarity and structure before implementation | Recommend AI Strategy Consulting |
| 30–49 | Emerging | Some interest but disorganised for strong implementation | Recommend readiness conversation and roadmap |
| 50–69 | Ready to Pilot | Good workflows, tools, and intent; ready for practical use cases | Recommend free AI audit and pilot planning |
| 70–84 | Strong Readiness | Immediate ROI opportunities visible | Recommend AI-fy Your Business Processes |
| 85–100 | High-Leverage Ready | Ready for deep implementation and strategic oversight | Recommend implementation + Hire Your AI CEO |

---

## In-Chat Score Delivery (after score is stored and workflow is fired)

Show the score in chat using this exact format — this is a teaser that makes the user curious to open the email:

> **Your AI Readiness Score: [X] / 100 — [Band Label]**
>
> I've sent your full personalised report to your email. It covers what this score means for your business, your top AI opportunities, and a clear recommended next step — worth a read.

Then follow with: "Would you like to book a free AI audit to walk through your results with an Aifyze expert?"

The email contains the full breakdown. The in-chat message shows just the score and band to create curiosity.

---

## Score Storage & Delivery

**MANDATORY ORDER — follow this exactly, every time:**
1. Calculate the numeric score using the point tables above.
2. **Immediately fire the Capture AI Readiness Score action to store the plain number in {{contact.readiness_score}}** (e.g. `77`) — BEFORE saying anything else. The field is Number type — digits only, no text.
3. Fire ALL Add Contact Info actions with the current conversation's values — every field must be overwritten, including for returning contacts:
   - {{contact.aifyze_business_type}}
   - {{contact.aifyze_team_size}}
   - {{contact.aifyze_main_pain_point}}
   - {{contact.aifyze_current_tools}}
   - {{contact.aifyze_ai_usage_level}}
   - {{contact.aifyze_readiness_to_act}}
   - {{contact.aifyze_score_band}} — derive from score: 0–29=Very Early | 30–49=Emerging | 50–69=Ready to Pilot | 70–84=Strong Readiness | 85–100=High-Leverage Ready
   - {{contact.aifyze_suggested_service}} — derive from {{contact.readiness_score}}: 0–49=AI Strategy Consulting | 50–84=AI-fy Your Business Processes | 85–100=Hire Your AI CEO
   - {{contact.aifyze_urgency_level}} — derive from Q5: Just exploring=exploring | No timeline=90-day-interest | Plan soon=90-day-interest | 30–90 days=ready-now | Now/urgent=high-intent
4. THEN trigger the Send AI Readiness Report workflow.
5. Show score and email ask in ONE chat message (see In-Chat Score Delivery above).

---

## After-Question Acknowledgement Lines

Use these between questions to keep the conversation natural:

- After Q1: "Got it — that helps me understand the scale and type of business you're running."
- After Q2: "That's helpful. Repetitive work like that is often where AI creates the fastest value."
- After Q3: "Perfect — that gives me a sense of how easily AI could fit into your current setup."
- After Q4: "Good to know — current AI usage is actually one of the factors we measure."
- After Q5: "Great — that tells me a lot about where you are in the decision process."
