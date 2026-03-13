export default function ThinkingDigitalOnePage() {
  const services = [
    {
      title: "Transformation Roadmaps",
      text: "Translate business ambition into a sequenced, realistic transformation path with clear priorities, dependencies, and decision points.",
    },
    {
      title: "Enterprise Data Modeling",
      text: "Design conceptual, logical, and implementation-ready data structures that support reporting, interoperability, and scalable operations.",
    },
    {
      title: "Enterprise Architecture",
      text: "Align capabilities, processes, applications, and governance into a coherent operating structure that supports change.",
    },
    {
      title: "AI Enablement",
      text: "Identify where AI can create practical value, and define the data, controls, and operating conditions needed to use it responsibly.",
    },
  ];

  const industries = [
    "Airline",
    "Logistics",
    "Retail",
    "Manufacturing",
    "Professional Services",
    "Cross-industry transformation",
  ];

  const principles = [
    {
      title: "Business-led",
      text: "Transformation starts with business reality, not technology fashion.",
    },
    {
      title: "Structurally clear",
      text: "Data, architecture, and operating logic are made explicit before scaling decisions.",
    },
    {
      title: "Practical",
      text: "Advice is shaped so it can be used in real programs, not left as abstract strategy.",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Understand",
      text: "Clarify the business context, transformation goals, constraints, and decision landscape.",
    },
    {
      step: "02",
      title: "Structure",
      text: "Define the data, architecture, and change model needed to support coherent execution.",
    },
    {
      step: "03",
      title: "Enable",
      text: "Turn the model into practical next steps, roadmaps, and implementation guidance.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-sm font-semibold tracking-[0.18em] text-slate-800 uppercase">
            Thinking Digital
          </a>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-slate-950">Services</a>
            <a href="#industries" className="transition hover:text-slate-950">Industries</a>
            <a href="#approach" className="transition hover:text-slate-950">Approach</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                Copenhagen-based advisory across industries
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
                Digital transformation, made structurally clear.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Thinking Digital helps organizations turn business ambition into executable structure through data,
                architecture, and practical AI enablement.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  Book an intro call
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
                >
                  Explore services
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">What Thinking Digital does</p>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
                <p>
                  We help organizations create the structural foundations for transformation: clear roadmaps,
                  coherent enterprise models, and disciplined use of data and AI.
                </p>
                <p>
                  Our work is intentionally cross-industry. The method adapts to each business context while keeping
                  the focus on clarity, alignment, and practical execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 text-sm text-slate-600 md:grid-cols-3 lg:px-8">
            {principles.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 p-5">
                <h2 className="text-base font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Selected services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Focused advisory for complex transformation.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The offer is intentionally selective: a small set of services that connect strategy, structure, and
              execution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="industries" className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Industries</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Built to serve multiple industries.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Thinking Digital is not limited to one sector. The consulting model is designed for organizations that
                need clearer structure across business, data, architecture, and transformation delivery.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Approach</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                A simple consulting model for difficult change.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The work typically moves from diagnosis to structure to enablement, with enough precision to support
                real programs and decisions.
              </p>
            </div>

            <div className="grid gap-5">
              {approach.map((item) => (
                <div key={item.step} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="flex items-start gap-5">
                    <span className="text-sm font-semibold tracking-[0.2em] text-slate-400">{item.step}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Why Thinking Digital</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  Senior perspective, cross-industry applicability.
                </h2>
              </div>
              <div className="grid gap-4 text-sm leading-7 text-slate-600">
                <p>
                  Thinking Digital is suited to organizations that want substance over buzzwords: a clearer operating
                  model, stronger structural coherence, and practical guidance for transformation decisions.
                </p>
                <p>
                  The positioning is international, but grounded: Copenhagen-based, analytically strong, and designed to
                  work across sectors where complexity needs to be made manageable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 px-8 py-12 text-white md:px-12 md:py-14">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Start with a focused conversation.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Whether the need is roadmap work, data structure, architecture clarity, or AI direction, Thinking Digital
              can help frame the next steps.
            </p>

            <div className="mt-8 grid gap-4 text-sm text-slate-300 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 p-5">
                <p className="text-slate-500">Location</p>
                <p className="mt-2">Copenhagen, Denmark</p>
              </div>
              <div className="rounded-2xl border border-slate-800 p-5">
                <p className="text-slate-500">Email</p>
                <a href="mailto:contact@thinking.digital" className="mt-2 block hover:text-white">
                  contact@thinking.digital
                </a>
              </div>
              <div className="rounded-2xl border border-slate-800 p-5">
                <p className="text-slate-500">LinkedIn</p>
                <a href="https://www.linkedin.com" className="mt-2 block hover:text-white">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
