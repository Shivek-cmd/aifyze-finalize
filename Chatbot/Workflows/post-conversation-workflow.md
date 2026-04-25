# Workflow: Aifyze — Post-Conversation Intelligence

> Set this up as a new Workflow in GHL. This workflow handles everything from document.md that cannot be done through bot prompting alone.

---

## What's Already Handled (Bot + Actions)

| Item | Where |
|---|---|
| 5 assessment questions | goal.md |
| Score calculation + delivery in chat | goal.md |
| Score bands | goal.md |
| Email + phone capture | additional-info.md |
| Custom fields: business type, team size, pain point, tools, AI usage, readiness, score band, suggested service, urgency level, readiness score | actions.md Actions 4–13 |
| AI Readiness Report sent by email | actions.md Action 2 |
| High intent alert to sales team | actions.md Action 3 |
| Appointment booking | actions.md Action 1 |

---

## What This Workflow Handles (from document.md)

| Item | Method |
|---|---|
| Service fit tags: `process-automation-fit`, `strategy-fit`, `ai-ceo-fit` | If/Else on {{contact.aifyze_suggested_service}} |
| Business size tags: `small-business-fit`, `growth-stage-fit`, `agency-fit`, `consultant-fit`, `enterprise-light-fit` | If/Else on {{contact.aifyze_team_size}} + {{contact.aifyze_business_type}} |
| Pain tags: `missed-leads`, `repetitive-admin`, `customer-support-load`, `reporting-manual`, `fragmented-tools`, `no-ai-strategy` | If/Else keyword match on {{contact.aifyze_main_pain_point}} |
| Industry/persona tags: `real-estate`, `ecommerce`, `healthcare`, `agency`, `coaching-consulting`, `general-business` | If/Else keyword match on {{contact.aifyze_business_type}} |
| Urgency tags as actual GHL tags | If/Else on {{contact.aifyze_urgency_level}} |
| CRM pipeline stage routing | If/Else on {{contact.aifyze_score_band}} |
| Priority routing (immediate vs. nurture vs. callback) | **1 AI Decision Maker** — reads summary + stored fields |
| Full internal team notification with conversation summary | Send Internal Notification |

> Only ONE AI Decision Maker is needed. All tag and pipeline decisions use If/Else on stored fields — faster, cheaper, and more reliable than AI for those steps.

---

## Trigger

**Trigger Type:** Conversation AI Summary Updated

**Filter:** {{contact.readiness_score}} is not empty
*(Only runs for contacts who completed the full assessment.)*

---

## Action 1 — AI Decision Maker: Priority Routing

**Action Name:** `Classify Lead Priority`

**Instructions:**
```
You are a lead classifier for Aifyze, an AI consulting firm. Based on the conversation summary and the contact's stored data, decide which branch best fits this lead.

Branch 1 — HOT LEAD:
Score is 70 or above AND the contact expressed urgency, said they are ready now, want to start soon, asked for a callback, or asked about pricing. Also use this if urgency level is ready-now or high-intent.

Branch 2 — BOOK AUDIT:
Score is 50–69, OR score is 70+ but no urgent signals. Contact is interested and has a clear pain point but did not express immediate urgency.

Branch 3 — NURTURE:
Score is below 50. Contact is exploring or has no clear timeline. Needs education before ready to act.

Branch 4 — CALLBACK REQUESTED:
Contact explicitly asked to speak to a person, requested a call, or asked someone to contact them directly. Use this regardless of score.

Pick exactly one branch. Output only the branch name.

Contact Score: {{contact.readiness_score}}
Score Band: {{contact.aifyze_score_band}}
Urgency Level: {{contact.aifyze_urgency_level}}
Readiness to Act: {{contact.aifyze_readiness_to_act}}
Conversation Summary: {{conversation.ai_summary}}
```

**Additional Context:**
```
Aifyze is a premium B2B AI consulting firm. Services:
- AI-fy Your Business Processes (score 50–84): workflow automation for businesses with clear pain and existing tools
- AI Strategy Consulting (score 0–49): roadmap and clarity for early-stage or disorganised businesses
- Hire Your AI CEO (score 85–100): deep implementation and ongoing AI leadership

Hot Lead (70+ with urgency): contact within 60 minutes.
Book Audit (50–69): contact within 48 hours.
Nurture (below 50): enrol in education email sequence.
Callback Requested: flag immediately regardless of score.
```

**Branches:**

| Branch Name | Branch Description |
|---|---|
| **Hot Lead** | Route when {{contact.readiness_score}} >= 70 AND {{contact.aifyze_urgency_level}} is ready-now OR high-intent. Requires immediate follow-up within 60 minutes. |
| **Book Audit** | Route when {{contact.readiness_score}} is between 50 and 69, OR {{contact.readiness_score}} >= 70 AND {{contact.aifyze_urgency_level}} is 90-day-interest OR exploring. Offer free AI audit within 48 hours. |
| **Nurture** | Route when {{contact.readiness_score}} < 50. Contact is exploring with no clear timeline. Enrol in education sequence. |
| **Callback Requested** | Route when {{contact.aifyze_urgency_level}} is wants-callback OR contact explicitly asked to speak to a person regardless of {{contact.readiness_score}}. Flag immediately. |

> **Next step:** Define what actions go inside each of the four branches. After Action 1 routes to a branch, the remaining If/Else actions (2–7) run inside each branch or after all branches merge back.

---

## Action 2 — If/Else: Apply Service Fit Tag

*(Based on stored field — no AI needed)*

Branch on: {{contact.aifyze_suggested_service}}

| Condition | Tag to Apply |
|---|---|
| equals `AI-fy Your Business Processes` | `process-automation-fit` |
| equals `AI Strategy Consulting` | `strategy-fit` |
| equals `Hire Your AI CEO` | `ai-ceo-fit` |

---

## Action 3 — If/Else: Apply Pain Tag

*(Keyword match on stored pain point — no AI needed)*

Branch on: {{contact.aifyze_main_pain_point}} — use "contains" conditions

| Condition | Tag to Apply |
|---|---|
| contains `lead` OR `follow-up` OR `sales` OR `pipeline` | `missed-leads` |
| contains `admin` OR `invoic` OR `paperwork` OR `data entry` OR `manual` | `repetitive-admin` |
| contains `support` OR `customer` OR `inquir` OR `question` | `customer-support-load` |
| contains `report` OR `analytics` OR `dashboard` OR `data` | `reporting-manual` |
| contains `tool` OR `system` OR `platform` OR `software` OR `connected` | `fragmented-tools` |
| none of the above match | `no-ai-strategy` |

---

## Action 4 — If/Else: Apply Industry / Persona Tag

*(Keyword match on stored business type — no AI needed)*

Branch on: {{contact.aifyze_business_type}} — use "contains" conditions

| Condition | Tag to Apply |
|---|---|
| contains `real estate` OR `property` OR `brokerage` OR `realtor` | `real-estate` |
| contains `agency` OR `marketing` OR `creative` OR `PR` OR `digital` | `agency` |
| contains `coach` OR `consultant` OR `trainer` OR `advisor` | `coaching-consulting` |
| contains `clinic` OR `health` OR `medical` OR `wellness` OR `dental` | `healthcare` |
| contains `ecommerce` OR `store` OR `retail` OR `shop` OR `product` | `ecommerce` |
| contains `law` OR `legal` OR `accounting` OR `finance` OR `HR` | `professional-services` |
| none of the above match | `general-business` |

---

## Action 5 — If/Else: Apply Business Size Tag

Branch on: {{contact.aifyze_team_size}} and {{contact.aifyze_business_type}}

| Condition | Tag to Apply |
|---|---|
| team size contains `solo` OR `just me` OR `1 person` OR `freelance` | `small-business-fit` |
| team size is a number between 2–10 | `small-business-fit` |
| team size is a number between 11–50 | `growth-stage-fit` |
| team size is 50 or above | `enterprise-light-fit` |
| business type contains `agency` | `agency-fit` |
| business type contains `coach` OR `consultant` | `consultant-fit` |

---

## Action 6 — If/Else: Apply Urgency Tag

Branch on: {{contact.aifyze_urgency_level}}

| Field Value | Tag to Apply |
|---|---|
| `exploring` | `exploring` |
| `90-day-interest` | `90-day-interest` |
| `ready-now` | `ready-now` |
| `wants-callback` | `wants-callback` |
| `high-intent` | `high-intent` |

---

## Action 7 — If/Else: Move to CRM Pipeline Stage

Branch on: {{contact.aifyze_score_band}}

| Score Band | Pipeline Stage |
|---|---|
| Very Early | New Lead |
| Emerging | Warming Up |
| Ready to Pilot | Ready to Pilot |
| Strong Readiness | High Priority |
| High-Leverage Ready | Hot Lead |

> Create these 5 stages in your GHL CRM pipeline before activating this step.

---

## Action 8 — Send Internal Notification

**To:** hello@aifyze.com

**Subject:** New Lead — {{contact.name}} | Score: {{contact.readiness_score}} | {{contact.aifyze_score_band}}

**Body:**
```
CONTACT
Name: {{contact.name}}
Email: {{contact.email}}
Phone: {{contact.phone}}

ASSESSMENT RESULTS
AI Readiness Score: {{contact.readiness_score}} / 100
Score Band: {{contact.aifyze_score_band}}
Business Type: {{contact.aifyze_business_type}}
Team Size: {{contact.aifyze_team_size}}
Main Pain Point: {{contact.aifyze_main_pain_point}}
Current Tools: {{contact.aifyze_current_tools}}
AI Usage Level: {{contact.aifyze_ai_usage_level}}
Readiness to Act: {{contact.aifyze_readiness_to_act}}
Suggested Service: {{contact.aifyze_suggested_service}}
Urgency Level: {{contact.aifyze_urgency_level}}

CONVERSATION SUMMARY
{{conversation.ai_summary}}

RECOMMENDED ACTION
Score 85–100 (Hot Lead): Call within 60 minutes.
Score 70–84 (High Priority): Follow up same day.
Score 50–69 (Ready to Pilot): Reach out within 48 hours.
Score below 50: Add to nurture sequence. Not urgent.
```

---

## All Tags to Create in GHL Before Activating

**Service fit:** `process-automation-fit` | `strategy-fit` | `ai-ceo-fit`

**Business size:** `small-business-fit` | `growth-stage-fit` | `agency-fit` | `consultant-fit` | `enterprise-light-fit`

**Pain:** `missed-leads` | `repetitive-admin` | `customer-support-load` | `reporting-manual` | `fragmented-tools` | `no-ai-strategy`

**Urgency:** `exploring` | `90-day-interest` | `ready-now` | `wants-callback` | `high-intent`

**Industry:** `real-estate` | `ecommerce` | `healthcare` | `agency` | `coaching-consulting` | `professional-services` | `general-business`
