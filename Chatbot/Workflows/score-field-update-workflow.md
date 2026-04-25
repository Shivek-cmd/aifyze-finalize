# Workflow: Aifyze — Score Field Updater

> This workflow's only job is to extract the AI Readiness Score from the conversation and update three contact fields: readiness score, score band, and suggested service.
> It exists because the bot's Add Contact Info action for the Number field (readiness_score) is unreliable. This workflow reads the score directly from the conversation text — which is guaranteed to be correct since the bot already stated it in chat.

---

## How to Trigger This Workflow

**Same method as "Aifyze — AI Readiness Report Delivery".**

In GHL → AI Agent → Actions, add a new action:

**Action Type:** Trigger a Workflow
**Action Name:** `Update Score Fields`
**Workflow to select:** Aifyze — Score Field Updater
**When to trigger:** Immediately after the bot sends the message containing "Your AI Readiness Score:" in chat. Fire this at the same time as the Send AI Readiness Report workflow.

---

## Trigger

**Trigger Type:** Workflow Triggered by AI Agent (same as the email report workflow)

---

## Action 1 — AI Action: Extract Score from Conversation

**Step Type:** AI Action (Content AI)

**Action Name:** `Extract Readiness Score`

**Instructions:**
```
Read the conversation messages below. Find the message that contains "Your AI Readiness Score:" and extract the number that follows it.

Return ONLY the integer. No text, no /100, no band label — just the number.

Example: if the conversation contains "Your AI Readiness Score: 77 / 100 — Strong Readiness", return: 77

If you cannot find the score, return: 0

Conversation: {{conversation.messages}}
```

> Note: In GHL, the variable for the full conversation transcript may be {{conversation.messages}}, {{conversation.transcript}}, or similar. Check the available merge fields inside your GHL workflow editor → AI Action step to find the correct variable name for the full conversation text (NOT the AI summary).

**Store output as:** A workflow variable — e.g. `score_extracted`

---

## Action 2 — Update Contact: Set Readiness Score

**Step Type:** Update Contact Field

**Field:** {{contact.readiness_score}}
**Value:** {{score_extracted}} *(the output from Action 1)*

---

## Action 3 — If/Else: Set Score Band

Branch on: {{score_extracted}} (numeric comparison)

| Condition | Update {{contact.aifyze_score_band}} to |
|---|---|
| score_extracted >= 85 | `High-Leverage Ready` |
| score_extracted >= 70 | `Strong Readiness` |
| score_extracted >= 50 | `Ready to Pilot` |
| score_extracted >= 30 | `Emerging` |
| score_extracted < 30 | `Very Early` |

*Inside each branch: Use an Update Contact action to set {{contact.aifyze_score_band}} to the corresponding label.*

---

## Action 4 — If/Else: Set Suggested Service

Branch on: {{score_extracted}} (numeric comparison)

| Condition | Update {{contact.aifyze_suggested_service}} to |
|---|---|
| score_extracted >= 85 | `Hire Your AI CEO` |
| score_extracted >= 50 | `AI-fy Your Business Processes` |
| score_extracted < 50 | `AI Strategy Consulting` |

*Inside each branch: Use an Update Contact action to set {{contact.aifyze_suggested_service}} to the corresponding label.*

---

## Summary

| Action | What it does |
|---|---|
| Action 1 | AI reads conversation → extracts score integer |
| Action 2 | Writes score to {{contact.readiness_score}} |
| Action 3 | If/Else → writes band label to {{contact.aifyze_score_band}} |
| Action 4 | If/Else → writes service to {{contact.aifyze_suggested_service}} |

---

## Also Add This to actions.md

In the AI Agent Actions tab, add alongside Action 2:

**Action Type:** Trigger a Workflow
**Action Name:** `Update Score Fields`
**Workflow:** Aifyze — Score Field Updater
**When to trigger:** At the same time as "Send AI Readiness Report" — immediately after the bot sends the score message in chat.
