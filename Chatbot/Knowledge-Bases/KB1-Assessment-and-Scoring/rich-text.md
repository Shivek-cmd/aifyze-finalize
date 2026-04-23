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

**Email ask (before delivering report — store answer in `{{contact.email}}`):**
> "What's the best email to send your full readiness report and next-step recommendations to? We send it there so you have everything in one place."

**Name ask (before email — store answer in `{{contact.name}}`):**
> "And just so I can personalise your report — what's your full name?"

**After email given:**
> "Perfect — I'll send the full report there. Here's your score snapshot:"

---

## The 5 Assessment Questions

Ask one question at a time. Wait for the user's answer before asking the next.

**Question 1 — Business Profile**
> "First, what kind of business do you run, and roughly how big is your team?"

Capture: Industry/category → store in `{{contact.aifyze_business_type}}`; team size (solo, small 2–10, growing 11–50, established 50+) → store in `{{contact.aifyze_team_size}}`.

---

**Question 2 — Workflow Pain**
> "Which part of your business feels most repetitive or time-consuming right now — like lead follow-up, admin, support, reporting, or something else?"

Capture: Main bottleneck; frequency; business cost (time lost, missed leads, errors) → store in `{{contact.aifyze_main_pain_point}}` in the user's own words.

---

**Question 3 — Current Tools**
> "What tools do you currently use to run your business — for example CRM, spreadsheets, email marketing, support tools, or project management?"

Capture: Tool stack; how organised systems are; whether leads and tasks are tracked digitally.

---

**Question 4 — Current AI Usage (Reverse Scored)**
> "Are you using any AI tools in your business already — even in a small way — or just getting started?"

Scoring:
- No AI use at all → 14–15 / 15
- Personal experimentation only → 12 / 15
- Some team-level use → 9 / 15
- AI in a few workflows → 5 / 15
- AI embedded across operations → 2 / 15

Tell the user: "A lower current AI usage actually means more opportunity for Aifyze-guided implementation."

---

**Question 5 — Readiness to Act**
> "If we found 1–2 simple AI opportunities that could save time or improve conversions, how ready would you be to act on them in the next 30–90 days?"

Answer buckets: Just exploring / Interested but no timeline / Want a plan soon / Ready in 30–90 days / Need expert help now.

---

## Scoring Model

**IMPORTANT: After collecting all 5 answers, calculate a numeric score out of 100 by adding points from each category below. You MUST output a real number. Do NOT store the user's answer text as the score.**

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

Add all five category scores. The total is out of 100. Store the result as: `[number] — [Band Label]` in `{{contact.ai_readiness_score}}`.

**Example:** If Q1=14, Q2=20, Q3=10, Q4=15, Q5=18 → Total = **77 — Strong Readiness**

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

## Score Delivery Messages

**Very Early (0–29):**
> "Based on what you shared, your score is [X]/100. Your business would benefit from clearer workflow structure and an initial strategy session before diving into implementation."

**Emerging (30–49):**
> "Your score is [X]/100. There's genuine interest here — with a little structure in place, you'd be well positioned to start with one simple AI use case."

**Ready to Pilot (50–69):**
> "Your score is [X]/100. You're in a solid position to start with one or two practical AI use cases in your highest-pain workflow areas."

**Strong Readiness (70–84):**
> "Your score is [X]/100. That's strong readiness — you have enough process need, tooling, and intent to move into focused AI implementation quickly."

**High-Leverage Ready (85–100):**
> "Your score is [X]/100. You're well positioned for deeper implementation and would benefit from ongoing AI leadership alongside execution."

---

## In-Chat Score Summary Format

**MANDATORY ORDER:**
1. Calculate the numeric score using the model above
2. Deliver the score summary in chat (format below)
3. ONLY THEN trigger the workflow to send the email report

Do NOT trigger the workflow before showing the score in chat. Do NOT store the user's answer text in `{{contact.ai_readiness_score}}` — it must be the calculated number and band label only (e.g. `67 — Ready to Pilot`).

After delivering the score, store the result in `{{contact.ai_readiness_score}}` and always follow with this format in chat:

```
AI Readiness & Opportunity Score: [X] / 100
Readiness Level: [Band Label]
Top Strength: [One sentence]
Main Gap: [One sentence]
Best First AI Opportunity: [One sentence]
Recommended Next Step: [One sentence tied to Aifyze service]
```

---

## After-Question Acknowledgement Lines

Use these between questions to keep the conversation natural:

- After Q1: "Got it — that helps me understand the scale and type of business you're running."
- After Q2: "That's helpful. Repetitive work like that is often where AI creates the fastest value."
- After Q3: "Perfect — that gives me a sense of how easily AI could fit into your current setup."
- After Q4: "Good to know — current AI usage is actually one of the factors we measure."
- After Q5: "Great — that tells me a lot about where you are in the decision process."
