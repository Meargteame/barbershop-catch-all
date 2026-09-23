import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Leon's Lab — Booking automation for salons & barbershops",
      },
      {
        name: "description",
        content:
          "You already have the customers. You're just losing the bookings. Leon's Lab builds call, text and rebooking automation for salons and barbershops. Get a free leak audit.",
      },
      {
        property: "og:title",
        content: "You already have the customers. You're just losing the bookings.",
      },
      {
        property: "og:description",
        content:
          "Leon's Lab builds call, text and rebooking automation for salons and barbershops. Free leak audit, no contracts.",
      },
    ],
  }),
  component: LandingPage,
});

const GATES = [
  {
    num: "01",
    title: "Discovery → Inquiry",
    desc: "Someone finds you online and has a question before booking.",
    stat: "78% check reviews before deciding where to book.",
    width: "100%",
  },
  {
    num: "02",
    title: "Inquiry → Answered",
    desc: "They call, text or DM — and if nobody's free, they don't wait.",
    stat: "37% of calls to salons go unanswered, mostly during business hours.",
    width: "82%",
  },
  {
    num: "03",
    title: "Answered → Booked",
    desc: "If booking means \u201ccall back during hours,\u201d people give up.",
    stat: "71% have skipped booking somewhere because it was too hard to reach anyone.",
    width: "62%",
  },
  {
    num: "04",
    title: "Booked → Shown up",
    desc: "A cancellation is an empty, unsold chair.",
    stat: "Capacity that goes unsold can't be sold again tomorrow.",
    width: "44%",
  },
  {
    num: "05",
    title: "Shown up → Rebooked",
    desc: "Most shops rely on clients remembering to come back. Most don't.",
    stat: "42% of loyal clients generate 80% of revenue; average rebooking rates sit near 10%.",
    width: "26%",
  },
];

const BUILDS = [
  {
    title: "AI Receptionist",
    tag: "Calls · Texts · DMs",
    desc: "Answers calls, texts and DMs, handles common questions instantly day or night, then hands off to booking or a human.",
  },
  {
    title: "Missed-Call Recovery",
    tag: "Instant follow-up",
    desc: "Auto-texts anyone whose call goes unanswered with a way to book on the spot.",
  },
  {
    title: "Cancellation Recovery",
    tag: "Fill the chair",
    desc: "Auto-messages the right waiting customers the moment a slot opens up.",
  },
  {
    title: "Rebooking & Win-Back",
    tag: "Bring them back",
    desc: "Nudges clients to rebook when their usual return window passes with no new appointment.",
  },
];

const STEPS = [
  {
    kicker: "Step 1 of 3",
    question: "What kind of shop do you run?",
    options: ["Barbershop", "Hair salon", "Nail / beauty salon", "Spa or multi-service"],
  },
  {
    kicker: "Step 2 of 3",
    question: "Where does it hurt most right now?",
    options: [
      "Calls we never get to answer",
      "No-shows and last-minute cancellations",
      "Clients who never come back",
      "Honestly, not sure — that's why I'm here",
    ],
  },
];

function LandingPage() {
  const [step, setStep] = useState(0);
  const [shopType, setShopType] = useState("");
  const [pain, setPain] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const progress = submitted ? 100 : (step / 3) * 100;

  function choose(value: string) {
    if (step === 0) setShopType(value);
    if (step === 1) setPain(value);
    setStep(step + 1);
  }

  return (
    <div className="safe-x min-h-screen overflow-x-hidden bg-navy font-sans text-dark-ink antialiased">
      {/* Nav */}
      <header className="safe-top sticky top-0 z-50 border-b border-line-dark bg-navy/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight">
            Leon&rsquo;s <span className="text-coral italic">Lab</span>
          </a>
          <a
            href="#audit"
            className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-coral-strong"
          >
            Get a free audit
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="py-20 sm:py-28 lg:py-32">
          <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-12">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
              For salons &amp; barbershops
            </span>
            <h1 className="mt-6 max-w-[15ch] font-display text-[clamp(2.4rem,6.2vw,4.4rem)] font-medium leading-[1.1] tracking-tight">
              You already have the customers. You&rsquo;re just{" "}
              <span className="italic text-coral">losing</span> the bookings.
            </h1>
            <p className="mt-7 max-w-[52ch] text-[1.05rem] text-dark-muted sm:text-lg">
              Every missed call, unanswered DM, empty no-show chair and client who never
              rebooks is revenue you already earned &mdash; slipping away. We build the
              automation that catches it.
            </p>
            <div className="mt-10 flex flex-wrap gap-3.5">
              <a
                href="#audit"
                className="w-full rounded-full bg-coral px-7 py-3.5 text-center text-[0.95rem] font-semibold text-cream transition-colors hover:bg-coral-strong sm:w-auto"
              >
                Get a free audit
              </a>
              <a
                href="#funnel"
                className="w-full rounded-full border border-line-dark px-7 py-3.5 text-center text-[0.95rem] font-semibold transition-colors hover:border-brass hover:text-brass sm:w-auto"
              >
                See where you&rsquo;re leaking
              </a>
            </div>
            <p className="mt-6 text-sm text-dark-muted">
              <span className="font-medium text-brass">No contracts.</span> We show you the
              specific leak before we build anything.
            </p>
          </div>
        </section>

        {/* Leak funnel */}
        <section id="funnel" className="bg-cream py-20 text-cream-ink sm:py-24">
          <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-12">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-ink">
              The leak funnel
            </span>
            <h2 className="mt-4 max-w-[22ch] font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] tracking-tight">
              Every customer passes through five gates. Something falls through at each one.
            </h2>
            <p className="mt-5 max-w-[58ch] text-[1.05rem] text-cream-muted">
              Most shops don&rsquo;t have a marketing problem &mdash; they have a leakage
              problem. Here&rsquo;s where the bookings go.
            </p>

            <div className="mt-14 border-t border-line-cream">
              {GATES.map((gate) => (
                <div key={gate.num} className="border-b border-line-cream py-8">
                  <div className="grid grid-cols-[56px_1fr] gap-x-6 gap-y-3 md:grid-cols-[90px_minmax(0,5fr)_minmax(0,7fr)] md:gap-x-8">
                    <span className="font-display text-xl font-medium text-brass md:text-2xl">
                      {gate.num}
                    </span>
                    <h3 className="font-display text-[clamp(1.15rem,2vw,1.45rem)] font-medium">
                      {gate.title.split("→")[0]}
                      <span className="px-1 font-sans font-normal text-coral">&rarr;</span>
                      {gate.title.split("→")[1]}
                    </h3>
                    <p className="col-start-2 text-[0.97rem] text-cream-muted">{gate.desc}</p>
                    <p className="col-start-2 text-sm font-semibold text-coral md:col-span-2">
                      {gate.stat}
                    </p>
                    <div className="col-start-2 mt-1 h-1.5 w-full overflow-hidden rounded-full bg-line-cream md:col-span-2">
                      <div
                        className="h-full rounded-full bg-coral"
                        style={{ width: gate.width }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-cream-muted">
              By the last gate, most shops are keeping a fraction of the demand they already
              paid to create.
            </p>
          </div>
        </section>

        {/* What we build */}
        <section id="build" className="py-20 sm:py-24">
          <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-12">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
              What we build
            </span>
            <h2 className="mt-4 max-w-[22ch] font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] tracking-tight">
              We plug the specific leak &mdash; not a generic AI chatbot.
            </h2>
            <p className="mt-5 max-w-[58ch] text-[1.05rem] text-dark-muted">
              You keep your existing booking software. We connect the conversations
              you&rsquo;re already getting to it.
            </p>

            <div className="mt-14 border-t border-line-dark">
              {BUILDS.map((item) => (
                <div key={item.title} className="border-b border-line-dark py-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
                    <h3 className="font-display text-[clamp(1.25rem,2.4vw,1.7rem)] font-medium">
                      {item.title}
                    </h3>
                    <span className="self-start whitespace-nowrap rounded-full border border-brass/45 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-brass sm:self-center">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-2 max-w-[62ch] text-[0.97rem] text-dark-muted">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-cream py-20 text-cream-ink sm:py-24">
          <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-12">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-ink">
              How we get you live
            </span>
            <h2 className="mt-4 max-w-[22ch] font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] tracking-tight">
              Three steps. No rip-and-replace.
            </h2>
            <div className="mt-14 grid border-t border-line-cream md:grid-cols-3">
              {[
                {
                  n: "1",
                  h: "Free audit",
                  p: "We map your five gates and show you exactly where bookings are leaking — before you pay for anything.",
                },
                {
                  n: "2",
                  h: "Build & connect",
                  p: "We wire into the phone, Instagram and booking software you already use. Nothing to rip out, nothing to relearn.",
                },
                {
                  n: "3",
                  h: "Launch & measure",
                  p: "You get reports on inquiries recovered, appointments booked and revenue restored.",
                },
              ].map((s, i) => (
                <div
                  key={s.n}
                  className={`border-b border-line-cream py-9 md:pr-8 ${
                    i > 0 ? "md:border-l md:border-line-cream md:pl-8" : ""
                  }`}
                >
                  <span className="mb-4 block font-display text-4xl italic text-coral">
                    {s.n}
                  </span>
                  <h3 className="mb-3 font-display text-xl font-medium">{s.h}</h3>
                  <p className="text-[0.95rem] text-cream-muted">{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-navy-soft py-16 sm:py-24">
          <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-9 md:grid-cols-3 md:gap-10">
              {[
                { v: "55%", l: "of clients say they're comfortable with an AI receptionist." },
                { v: "63%", l: "say 24/7 receptionist access is valuable to them." },
                {
                  v: "73%",
                  l: "would be more loyal to a shop with easier booking and communication.",
                },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-[clamp(2.6rem,5.5vw,4rem)] font-medium leading-none text-coral">
                    {s.v}
                  </div>
                  <p className="mt-3.5 max-w-[30ch] text-[0.97rem] text-dark-ink">{s.l}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 border-t border-line-dark pt-5 text-xs text-dark-muted">
              Source: Zenoti 2025 U.S. salon &amp; spa consumer survey (n=1,011); SQUIRE 2026
              barbershop benchmark data.
            </p>
          </div>
        </section>

        {/* Audit funnel */}
        <section id="audit" className="py-20 sm:py-24">
          <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16 lg:px-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                Free audit
              </span>
              <h2 className="mt-4 max-w-[22ch] font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.12] tracking-tight">
                Tell us about your shop.
              </h2>
              <p className="mt-5 text-dark-muted">
                Three quick taps and one short form. We&rsquo;ll come back with the specific
                leaks we find &mdash; no pitch deck.
              </p>
              <ul className="mt-8 border-t border-line-dark">
                {[
                  "No switching your booking software",
                  "No long-term contract",
                  "See the audit before paying anything",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-baseline gap-3.5 border-b border-line-dark py-4 text-[0.97rem]"
                  >
                    <span className="font-semibold text-brass">&#10003;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line-dark bg-navy-soft p-7 sm:p-10">
              <div className="mb-7">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-line-dark">
                  <div
                    className="h-full rounded-full bg-coral transition-[width] duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {submitted ? (
                <div
                  role="status"
                  className="rounded-lg border border-brass/55 bg-brass/10 p-5 text-[0.95rem]"
                >
                  <strong className="text-brass">Got it.</strong> We&rsquo;ll review your{" "}
                  {shopType.toLowerCase() || "shop"} and reach out within one business day
                  with your free audit.
                </div>
              ) : step < 2 ? (
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                    {STEPS[step].kicker}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium">
                    {STEPS[step].question}
                  </h3>
                  <div className="mt-6 grid gap-3">
                    {STEPS[step].options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => choose(option)}
                        className="rounded-xl border border-line-dark bg-navy px-5 py-4 text-left text-[0.97rem] font-medium transition-colors hover:border-coral hover:text-coral"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="mt-6 text-sm text-dark-muted transition-colors hover:text-brass"
                    >
                      &larr; Back
                    </button>
                  )}
                </div>
              ) : (
                <form
                  noValidate
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                    Step 3 of 3
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium">
                    Where should we send your audit?
                  </h3>
                  <p className="mt-3 text-sm text-dark-muted">
                    {shopType}
                    {pain ? ` · ${pain}` : ""}
                  </p>

                  <div className="mt-6 space-y-5">
                    <Field id="f-name" label="Your name" autoComplete="name" />
                    <Field id="f-shop" label="Shop name" autoComplete="organization" />
                    <Field id="f-contact" label="Email or phone" autoComplete="email" />
                    <div>
                      <label
                        htmlFor="f-notes"
                        className="mb-2 block text-[0.82rem] font-semibold tracking-wide"
                      >
                        Anything else? <span className="font-normal text-dark-muted">(optional)</span>
                      </label>
                      <textarea
                        id="f-notes"
                        name="notes"
                        className="min-h-[104px] w-full resize-y rounded-lg border border-line-dark bg-navy px-4 py-3 text-[0.98rem] text-dark-ink outline-none transition-colors focus:border-coral"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-7 w-full rounded-full bg-coral px-6 py-3.5 text-center text-[0.95rem] font-semibold text-cream transition-colors hover:bg-coral-strong"
                  >
                    Get my free audit
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="mt-4 w-full text-sm text-dark-muted transition-colors hover:text-brass"
                  >
                    &larr; Back
                  </button>
                  <p className="mt-5 text-center text-sm text-dark-muted">
                    Prefer to just talk? Email{" "}
                    <a
                      href="mailto:hello.meareg@gmail.com"
                      className="text-brass hover:underline"
                    >
                      hello.meareg@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="safe-bottom border-t border-line-dark bg-navy py-9 text-center text-sm text-dark-muted">
        <div className="mx-auto w-full max-w-[1120px] px-5">
          &copy; 2026 Leon&rsquo;s{" "}
          <span className="font-display italic text-coral">Lab</span>. Software that fills
          your calendar.
        </div>
      </footer>
    </div>
  );
}

function Field({
  id,
  label,
  autoComplete,
}: {
  id: string;
  label: string;
  autoComplete: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.82rem] font-semibold tracking-wide">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        required
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-line-dark bg-navy px-4 py-3 text-[0.98rem] text-dark-ink outline-none transition-colors focus:border-coral"
      />
    </div>
  );
}
