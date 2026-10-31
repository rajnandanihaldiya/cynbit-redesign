# Cynbit Technologies — Website Redesign
## UX Improvement Report

**Role:** UX/UI Designer · **Date:** October 2026 · **Type:** Redesign of an existing website (cynbit.in)

| Deliverable | Link |
| --- | --- |
| Figma redesign | [Open Figma file](https://www.figma.com/design/zAY2UDWqQqkZbSCifxXioM/cynbit-technologies-website-revamp) |
| Prototype, desktop | [Present: service discovery → enquiry](https://www.figma.com/proto/zAY2UDWqQqkZbSCifxXioM/cynbit-technologies-website-revamp?node-id=2-531&page-id=2%3A4&starting-point-node-id=2%3A531) |
| Prototype, mobile | [Present: home → enquiry](https://www.figma.com/proto/zAY2UDWqQqkZbSCifxXioM/cynbit-technologies-website-revamp?node-id=6-1602&page-id=2%3A5&starting-point-node-id=6%3A1602) |
| Coded prototype | [github.com/rajnandanihaldiya/cynbit-redesign](https://github.com/rajnandanihaldiya/cynbit-redesign) |

> **Evidence:** this report rests on a desk audit of the live site. No usability testing has been run yet. Findings about the interface are verified observations. Statements about user behaviour are hypotheses, and every impact listed is an expected benefit, not a measured result.

---

## 1. Project overview

Cynbit Technologies is a Jaipur-based technology company. It offers AI automation, custom software, cloud infrastructure and digital marketing. It also runs its own SaaS products (Cynbit Studio, Revio, TenantEase), the BitElevate training programme and a social-impact partnership.

The brief was to find the biggest UX problems on the current website, prioritise improvements by user and business impact, and then redesign the most important pages. The work also includes a clickable prototype and this report.

**Scope:** Homepage, Services, a service-detail template (AI & Automation), and the Contact / project enquiry flow, on desktop and mobile. I picked these because together they make up the main business journey: understand → find a service → trust → enquire.

**Not in scope:** the blog, careers, product and BitElevate pages, any backend, and any new features such as a chatbot.

## 2. The challenge

The site serves at least five audiences at once:

- prospective clients
- product users
- students
- job seekers
- people interested in social impact

A business owner who wants to automate a workflow has to answer four questions quickly:

1. Is this company relevant to me?
2. What exactly can it do for me?
3. Why should I trust it?
4. What do I do next?

The redesign aims to make those answers easy to find, without hiding the other audiences.

## 3. Audit method

- **Pages reviewed (31 Oct 2026):** homepage, Services Hub, Contact, Careers, global navigation and footer.
- **Criteria for each page:** intended audience, main task, information hierarchy, primary and secondary actions, consistency, likely barriers, evidence, severity and confidence.
- **Limitations:** no analytics, conversion data or user interviews were available. Confidence ratings are design judgements. The audit board with all findings is on page **01 Audit & Strategy** in Figma.

## 4. Key findings and user pain points

| # | Observation (verified on cynbit.in) | User pain point (hypothesis) | Confidence | Priority |
| --- | --- | --- | --- | --- |
| 1 | The homepage runs hero → SaaS suite → Manav Seva → BitElevate (“1000+ certified”) → “Cynbit edge” → domains → process → testimonials. | Business visitors have to work out which sections are meant for them. | Medium | **P0** |
| 2 | The hero says “Architecting the future with AI automation” under the eyebrow “The optimistic architect”. Architecture metaphors repeat throughout (architects, blueprint, architectural lifecycle). | First-time visitors may not link the message to a concrete business problem. | Medium | **P0** |
| 3 | Services are grouped by technology (“LLM & Agents”, “AWS & Azure”). The homepage repeats them twice under different names (“Foundational pillars” and “Domain mastery”). | Visitors understand the capabilities but not which one fits their problem. | Medium | **P0** |
| 4 | Calls to action vary: “Get Started Now”, “Join Us”, “Start discovery”, “Start discovery phase”. The form gives no guidance on what to write and no idea of what happens next. | Hesitation at the step that matters most for the business. | Medium | **P0** |
| 5 | Metrics (98% retention, 3x ROI uplift, 99.9% uptime, 95% efficiency) and quotes have no source and no link to a case study. The client logo strip repeats five times. | Unqualified numbers can lower trust instead of building it. | Medium | P1 |
| 6 | Navigation follows Cynbit's org structure: Company / Expertise / BitElevate / Blog / Contact. Services sit under “Expertise”, Careers sits under “Company”, and “Join Us” is ambiguous. | Visitors may have to guess which menu holds what they need. | Low–Med | P1 |

**Primary user:** an SME owner or operations lead evaluating a technology partner. They want plain-language services, relevant examples, a sense of the process, and an easy first step. They worry about vague agencies, inflated claims and being sold the wrong thing.

**Secondary users:** students (BitElevate), job seekers (Careers) and product users. Design rule: give each a clear, labelled door, but never put it between a business buyer and the services.

## 5. Prioritisation

| Quadrant | Improvements |
| --- | --- |
| **Quick wins:** high impact, low effort | Outcome-led hero with one primary CTA · one CTA label everywhere (“Discuss a project”) · form guidance, required markers and a “what happens next” panel |
| **Big bets:** high impact, more effort | Navigation grouped by visitor intent · services page organised by problem, plus a detail template · proof with context |
| **Fill-ins** | Remove the duplicate logo strip · cut metaphor-heavy copy |
| **Not now** | Redesigning every secondary page · AI chatbot · backend or CMS rebuild |

## 6. Information architecture

**Current:** Company · Expertise · BitElevate · Blog · Contact · “Join Us”

**Proposed:** **Services** (AI & Automation, Software Development, Cloud & Infrastructure, Digital Marketing & SEO) · **Products** · **Company** · **Learning & Careers** · **Insights** · and a permanent **“Discuss a project”** button.

**Primary flow:** Homepage → Services → Service detail → Discuss a project → Enquiry form → Validation → Confirmation.

The proposed labels are a hypothesis. The next step is a tree test.

## 7. Design decisions

| Area | Before | After | Why | What needs checking |
| --- | --- | --- | --- | --- |
| **Hero** | “Architecting the future with AI automation.” plus two different CTAs | “Software that works the way you do”, with a one-line summary of the four services. Primary: *Discuss a project*. Secondary: *Explore services*. | Show relevance before technical detail, with one obvious next step | Can visitors explain what Cynbit does in their own words? (UT-02) |
| **Audience doors** | Students, products and impact mixed into the homepage scroll | Four labelled doors under the hero: technology partner · products · learning · jobs | Lets each audience self-select early. Business stays visually primary. | Fewer wrong turns for non-business tasks (UT-06) |
| **Service cards** | Grouped by technology, repeated twice | Four cards that open with the customer's problem in their own words (e.g. “Our team spends hours on repetitive tasks.”), then what Cynbit builds | Visitors recognise their problem faster than they recognise a technology | Service discovery success (UT-01) |
| **Services page** | One long list | Problem-led rows with typical projects and relevant work beside each, an “I want to…” filter, and a “Not sure?” route | Supports visitors who can't name the service they need | Time to the correct service |
| **Service detail** | No dedicated page | A template: outcome headline → problems solved → capabilities → case (challenge / approach / outcome) → FAQ → CTA | Puts proof next to the service it supports | Trust and proof discovery (UT-03) |
| **Proof** | Raw numbers with no source | Each metric names the client and the service, and is labelled “client-reported” with a link to the case study. Unknown details are marked “to confirm”, never invented. | Context makes claims believable. This avoids making up evidence. | Do participants find the evidence convincing? |
| **Navigation** | Organised around the org chart | Organised by visitor intent, with a Services dropdown and a persistent “Discuss a project” button | Matches how visitors think about their task | Tree test / UT-01 |
| **Enquiry form** | Five fields, no guidance, no expectations | 3 required fields plus a service picker · a prompt with an example · optional budget · privacy note · “What happens next” panel · email and phone alternatives · routes for people who aren't buying (careers, learning, support) | Lowers effort and uncertainty at the step that matters most | Form completion and error rate (UT-04, UT-05) |
| **Error handling** | Not specified | Error summary (“Please fix 2 fields… nothing you typed has been lost”) and inline messages that say how to fix each problem | Errors should help people recover, not blame them | Number of errors per attempt |
| **Confirmation** | None designed | A personalised success screen showing what was sent and what happens next. It doesn't promise a response time Cynbit hasn't confirmed. | Closes the loop and sets honest expectations | — |

### Visual direction

- **Reference:** modern B2B consulting websites, adapted to Cynbit's existing brand.
- **Colours:** teal `#006067` primary, gold `#774E00` accent, and the existing CYNBIT logo.
- **Type:** Michroma for the wide display headline, Poppins for everything else. Headings use a light/semibold pairing (“Start with the problem. We'll bring the **right technology**.”) to highlight the key idea in each section.
- **Surfaces:** white pages with a faint grid in the hero, soft grey rounded cards, a frosted-glass card in the “Why work with us” section, and dark-teal gradient pill buttons with ↗.
- **Accessibility:**
  - Body text contrast meets WCAG AA.
  - Every interactive state has a visible focus style.
  - Hit areas are at least 44px.
  - Motion respects `prefers-reduced-motion`.

## 8. Final designs (Figma)

| Page | Contents |
| --- | --- |
| 00 Cover | Case study cover |
| 01 Audit & Strategy | Problem statement, 6 findings, users, current vs proposed sitemap, user flow, impact/effort matrix |
| 02 Foundations & Components | Colour, type, spacing, grid; Button (Primary/Secondary × Default/Hover/Focus/Disabled), Input (Default/Focus/Error/Filled), mobile nav, footers |
| 03 Desktop Designs | Home, Services, Service detail (AI & Automation), Contact in 4 states: default, error, sending, success. Off-canvas: Nav (closed / Services open), service card hover sets, FAQ accordion sets |
| 04 Mobile Designs | Home, Menu open, Services, Service detail, Contact, Success |

## 9. Prototype and micro-interactions

**Desktop flow:** Home → *Explore services* → Services → *AI & Automation* → Detail → *Discuss an automation project* → Contact → *Send* (error state) → *Send* → Sending… (moves on automatically after 1.5s) → Success (slides in) → Back to home.

**Mobile flow:** Home → Menu → Services / AI & Automation / Discuss a project → Contact → Success.

| Micro-interaction | Trigger | Behaviour |
| --- | --- | --- |
| Buttons | Hover | Gradient darkens (smart animate, 150ms). Applied to every CTA. |
| Service cards | Hover / click | The card lifts with a white fill, teal border and shadow, and the link underlines. Click opens that service. |
| Services dropdown | Mouse enter / leave | A menu opens with 5 destinations and closes when the pointer leaves |
| FAQ accordion | Click | Expands and collapses each question (smart animate) |
| Form validation | Submit | Error summary, inline field errors and preserved values |
| Sending state | Submit | Disabled button reading “Sending your enquiry…”, which prevents a second submit |
| Success | After sending | Confirmation slides in from the top |
| Mobile menu | Click | Opens and closes. Sub-items go to the right page. |

**Prototype QA:** 139 interactions checked by script. Every destination exists and there are no dead ends. Every screen has a way back through the logo or navigation.

**Coded prototype:** the same design is built in HTML, CSS and JS, with working dropdowns, the service filter, the FAQ, form validation and success, and a responsive mobile menu. It was tested at 1440px and 375px with no horizontal overflow.

## 10. Usability validation

**Status: not yet conducted.** The designs are proposed improvements.

Planned study: 5–8 participants (3–5 potential buyers, 1–2 students, 1–2 job seekers), testing the current site and then the prototype.

| ID | Task | Measure |
| --- | --- | --- |
| UT-01 | Find the service for automating a business workflow | Success, wrong turns, time |
| UT-02 | Explain what Cynbit does in your own words | Comprehension |
| UT-03 | Find evidence that helps you evaluate Cynbit | Proof discovery |
| UT-04 | Start a project enquiry | Completion, errors |
| UT-05 | Find how to contact Cynbit without the form | Success |
| UT-06 | Find a relevant job or learning opportunity | Success, wrong turns |

**Decision rule:** if participants complete these tasks more successfully on the prototype than on the current site, move to implementation and measure live outcomes.

## 11. Impact

**Measured:** none yet. There is no baseline analytics data and no testing has been run.

**Expected benefits, to validate:**

- Faster understanding of what Cynbit offers, from an outcome-led hero
- Easier service discovery, from problem-led cards, the services filter and the detail template
- More credible proof, because each metric has a client, a service, a source label and a case-study link
- Fewer abandoned enquiries and form errors, from guidance, inline validation, preserved input and clear next steps
- Clearer paths for students, job seekers and product users that don't interrupt business visitors

**Metrics to track after launch:**

- North-star metric: qualified enquiries.
- Supporting metrics: enquiry completion rate (submits ÷ form starts), form error rate, service-page views per session, and CTA click-through from service pages.
- Guardrails: lead quality, accessibility and mobile usability.

## 12. Before launch: open items

- Connect the form to Cynbit's real enquiry endpoint. It is currently a demo.
- Confirm the Evento case details, which are marked “to confirm”, and get approval for all metrics and quotes.
- Confirm the budget ranges, and whether Cynbit can commit to a response time.
- Replace the gradient placeholder in “Why work with us” with a real brand or 3D visual.
- Test the built site against WCAG 2.2 AA with a keyboard and a screen reader.

## 13. Reflection

- **Content structure did more than styling.** The biggest improvements came from reorganising content around visitor intent and customer problems. The visual restyle made it feel modern but didn't change the structure.
- **Being honest about evidence shaped the design.** Refusing to invent case-study details led to the “client-reported” labels and the “to confirm” placeholders. Both build trust better than polished claims with no source.
- **What I'd investigate next:** a tree test of the new navigation labels, a five-second test of the hero, and session analytics on the contact form to find where people drop off.
