# Cynbit Website Redesign

A coded prototype of the Cynbit Technologies website redesign. It comes from a UX audit of [cynbit.in](https://www.cynbit.in/) and the high-fidelity Figma designs.

Plain HTML, CSS and JavaScript. No build step.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Homepage: outcome-led hero, audience pathways, problem-led service cards, client results, "Why work with us", process, final CTA |
| `services.html` | Services organised by problem, with an "I want to…" filter |
| `ai-automation.html` | Service detail template (AI & Automation) |
| `contact.html` | Project enquiry form with validation, sending and success states |

## Run locally

```bash
npx http-server . -p 5173
```

Then open http://localhost:5173.

## What's included

- Responsive layouts for desktop, tablet and mobile, including a mobile menu
- Keyboard-accessible dropdowns (Esc closes them), visible focus states and a skip link
- Enquiry form:
  - Inline validation and an error summary
  - Values are kept when validation or sending fails
  - Duplicate submissions are blocked
  - A success screen
  - Service links pre-select an option (`contact.html?service=ai`)
- Reduced-motion support

## Before going live

- `sendEnquiry()` in `assets/js/main.js` is a demo stub. Connect it to Cynbit's real enquiry endpoint.
- The Evento case study's Challenge and Approach need confirming with Cynbit. They're marked in the detail page.
- All metrics and quotes are taken from the current site and labelled "client-reported". Confirm they're approved before launch.
- Replace the gradient placeholder in "Why work with us" with a real brand visual.
- The budget ranges on the contact form are placeholders. Confirm them with Cynbit.
