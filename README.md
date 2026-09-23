# Salon Sync

Build a single-page HTML/CSS/JS landing page (no build tools, no external
framework — vanilla, self-contained) for "Leon's Lab," a software/automation
agency, targeting salon and barbershop owners in the US. This is a
prospecting/sales-funnel page, not the main company site — it will live at
a subdomain like salons.leonslab.tech.

GOAL OF THE PAGE
Convince a salon/barbershop owner that they are losing bookings they
already earned (missed calls, after-hours inquiries, no-shows, clients who
never rebook), and get them to submit a short lead form for a free audit.

BRAND / DESIGN DIRECTION
- Dark, confident, editorial feel — not a generic SaaS template.
- Palette: deep navy/near-black background (#0E1826, #1C2E42), warm
  coral-orange accent (#FF5A36) for CTAs and key numbers, a muted brass/gold
  accent (#C89A4A) for secondary highlights, and a warm cream (#F6F1E7) used
  as the background for 1–2 alternating light sections so the page isn't
  monotone.
- Typography: a display serif with character (e.g. Fraunces) for headlines,
  a clean grotesk sans (e.g. Inter) for body text and UI. Load via Google
  Fonts.
- Avoid generic centered-icon-card grids. Prefer left-aligned numbered
  lists, dividers, and asymmetric layouts.
- Fully responsive, safe-area aware (iOS notch/home-indicator padding),
  no horizontal scroll on mobile.

PAGE SECTIONS (in order)

1. Sticky nav
   - "Leon's Lab" wordmark (color the word "Lab" in coral)
   - one CTA button on the right: "Get a free audit" → anchors to contact form

2. Hero
   - Eyebrow label: "For salons & barbershops"
   - Headline: "You already have the customers. You're just losing the
     bookings." (style "losing" in italic coral)
   - Subhead: one sentence tying missed calls / unanswered DMs / no-shows /
     lost rebookings to lost revenue, and that we build the automation that
     catches it
   - Two buttons: primary "Get a free audit" (anchors to contact),
     secondary "See where you're leaking" (anchors to funnel section)
   - Small reassurance line under the buttons: no contracts, we show the
     specific leak before building anything

3. "The leak funnel" section (light cream background)
   - Heading: every customer passes through five gates, something falls
     through at each one
   - A numbered (01–05) list, NOT cards, each with a short title, one
     sentence description, and a one-line stat in coral:
     01 Discovery → Inquiry — someone finds you online and has a question
        before booking. Stat: 78% check reviews before deciding where to
        book.
     02 Inquiry → Answered — they call/text/DM; if nobody's free, they
        don't wait. Stat: 37% of calls to salons go unanswered, mostly
        during business hours.
     03 Answered → Booked — if booking means "call back during hours,"
        people give up. Stat: 71% have skipped booking somewhere because
        it was too hard to reach anyone.
     04 Booked → Shown up — a cancellation is an empty, unsold chair.
        Stat: capacity that goes unsold can't be sold again tomorrow.
     05 Shown up → Rebooked — most shops rely on clients remembering to
        come back; most don't. Stat: 42% of loyal clients generate 80% of
        revenue; average rebooking rates sit near 10%.

4. "What we build" section (dark background)
   - Heading: we plug the specific leak, not a generic AI chatbot
   - Subhead: they keep their existing booking software; we connect the
     conversations they're already getting to it
   - Four stacked rows (title + small tag + one-sentence description),
     not a card grid:
     - AI Receptionist — answers calls, texts & DMs, handles common
       questions instantly day or night, hands off to booking or a human
     - Missed-Call Recovery — auto-texts anyone whose call goes
       unanswered with a way to book
     - Cancellation Recovery — auto-messages the right waiting customers
       the moment a slot opens up
     - Rebooking & Win-Back — nudges clients to rebook when their usual
       return window passes with no new appointment

5. "How we get you live" (light cream background)
   - Three-step process, numbered 1–3: Free audit → Build & connect
     (wires into existing phone/Instagram/booking software, nothing to
     rip out) → Launch & measure (reports inquiries recovered, appointments
     booked, revenue restored)

6. Stats strip (dark background)
   - Three large stat callouts side by side: 55% comfortable with an AI
     receptionist, 63% say 24/7 receptionist access is valuable, 73%
     would be more loyal to a shop with easier booking/communication
   - Small source line underneath: Zenoti 2025 U.S. salon & spa consumer
     survey (n=1,011); SQUIRE 2026 barbershop benchmark data

7. Contact / lead form section (id="contact", navy background)
   - Left column: heading "Tell us about your shop," one-sentence
     reassurance, a short bullet list (no switching booking software, no
     long-term contract, see the audit before paying)
   - Right column: form with fields — name, shop name, email or phone,
     optional textarea "what's the biggest headache right now?" — submit
     button "Get my free audit"
   - On submit (client-side only, no backend): prevent default, show an
     inline confirmation message, reset the form
   - Below the form, a plain-text fallback: "Prefer to just talk? Email
     hello.meareg@gmail.com"

8. Footer
   - Simple centered line: "© 2026 Leon's Lab. Software that fills your
     calendar."

TECHNICAL REQUIREMENTS
- One self-contained HTML file (inline CSS/JS), no external JS
  dependencies beyond Google Fonts.
- Use CSS custom properties for the color palette.
- Add a viewport meta tag with viewport-fit=cover and safe-area-inset
  padding on the root/fixed elements.
- Keep animations minimal — hover states on buttons/links only.
- Make sure text stays legible on both the dark and cream sections
  (no low-contrast gray-on-dark).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://barbershop-catch-all.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c4fc0fbe-cf6a-43d4-b04c-c9e82fa6fae8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
