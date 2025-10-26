import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  LineChart,
  BookOpen,
  Headphones,
  Shield,
  Calendar,
  Building2,
  Mail,
  MapPin,
  Star,
  Linkedin,
  Sparkles,
  Layers3,
  Workflow,
  Gauge,
  Users,
} from "lucide-react";

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (

  <section id={id} className={`max-w-7xl mx-auto px-6 sm:px-8 ${className}`}>
    {children}
  </section>
);

  <section id={id} className={`max-w-7xl mx-auto px-6 sm:px-8 ${className}`}>
    {children}
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm shadow-sm backdrop-blur">
    <Sparkles className="h-4 w-4" />
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}>
    {children}
  </div>
);

const CTAButton = ({ children, href = "#contact" }) => (
  <a
    href={href}
    className="group inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-white shadow hover:bg-zinc-800 active:translate-y-px"
  >
    {children}
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
  </a>
);

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-semibold tracking-tight">{value}</div>
    <div className="text-sm text-zinc-500 mt-1">{label}</div>
  </div>
);

const TESTIMONIALS = [
  {
    role: "JD/MBA → Private Credit",
    who: "Client A — NYC — 08/13/25",
    quote:
      "No fluff, just clear logic and repeatable structure. I left with frameworks I can actually use, not just templates to copy.",
    full: `Came in to build skills across the 3 statements, modeling, and interview prep. We built from the ground up:
• Three-statement integration so assumptions flow cleanly from revenue to cash without breakage.
• LBO from scratch — sources & uses, debt schedules, sweeps, sensitivities — fast to update and easy to audit.
• Returns waterfall with tiered IRR hurdles and changing splits that tie out every time.
• Focused interview prep with technical drills and case walk-throughs to explain models under time pressure.

Straightforward approach: no fluff, just logic and repeatable structure. Accessible, patient, and practical. Left with frameworks I still use (not templates to copy). 10/10.`,
  },
  {
    role: "VP → Director (IB)",
    who: "Client B — NYC — 10/19/24",
    quote:
      "This guy is a machine — helped me land my Director role. Thorough, professional, and responsive.",
    full: `Used SOWS during a lateral process. Support covered modeling, valuation, case study walkthroughs, and detailed interview prep.
Got specific guidance on firm research, expected questions, and what to ask back. Highly recommend for anyone leveling up to leadership.`,
  },
  {
    role: "Student → Bulge-Bracket IB",
    who: "Client C — NYC — 02/27/23",
    quote: "Wealth of knowledge and experience. Results speak for themselves.",
    full: `Worked together from pre-internship through full-time offer at a bulge-bracket bank. Engaging teaching — not rote memorization.
Breaks down complex topics clearly and patiently. Outcome: internship → full-time, now outperforming peers thanks to drills and frameworks.`,
  },
];

export default function Component() {
  const onSubmit = async (e) => {
    e.preventDefault();
    alert("Thanks! We'll get back to you shortly.");
  };

  return (
    <div className="bg-[radial-gradient(60%_60%_at_10%_-10%,#e7e7ff_0%,transparent_70%),radial-gradient(60%_60%_at_90%_-20%,#ffe9e7_0%,transparent_70%)] text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-zinc-200">
        <Section className="flex h-16 items-center justify-between">
         <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
  <img
    src="/sows-logo.png"
    alt="Straight Outta Wall Street"
    className="h-7 w-auto"
  />
  <span className="sr-only">Straight Outta Wall Street</span>
</a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#offerings" className="hover:text-zinc-900 text-zinc-600">Offerings</a>
            <a href="#casework" className="hover:text-zinc-900 text-zinc-600">Case Work</a>
            <a href="#bootcamps" className="hover:text-zinc-900 text-zinc-600">Bootcamps</a>
            <a href="#testimonials" className="hover:text-zinc-900 text-zinc-600">Testimonials</a>
            <a href="#about" className="hover:text-zinc-900 text-zinc-600">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-block text-sm">Contact</a>
            <CTAButton href="#contact">Book an intro call</CTAButton>
          </div>
        </Section>
      </header>

      {/* Hero */}
      <Section id="home" className="pt-16 pb-10 sm:pt-24 sm:pb-16">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">Straight Outta Wall Street</h1>
          <p className="mt-3 text-zinc-600 text-lg">Two ways to work with us—train for speed and clarity, or ship real work under real deadlines.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Training */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-zinc-200 bg-zinc-900 text-white p-7 shadow-sm">
            <h2 className="text-3xl font-semibold">Train like a Top-Bucket Analyst</h2>
            <p className="mt-3 text-zinc-300">Live modeling bootcamps and 1:1 coaching that shortcut 100+ hours of self-study. Clean builds, repeatable checks, and explanations that stick.</p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-200">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" /> 3-statement → FCF without breakage</li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" /> LBO from scratch + sensitivities</li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" /> Interview drills & case walk-throughs</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#bootcamps" className="rounded-xl bg-white text-zinc-900 px-5 py-2 font-medium">Explore Training</a>
              <a href="#contact" className="rounded-xl ring-1 ring-zinc-600 px-5 py-2">Book intro call</a>
            </div>
          </motion.div>

          {/* Advisory */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-semibold">Execute like a Seasoned VP</h2>
            <p className="mt-3 text-zinc-700">Shadow advisory and live deal execution—from IC memos to sell-side decks—done right, under pressure.</p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-700">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" /> Rapid model reviews, tie-outs, sweeps</li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" /> KPIs/exhibits: clean pages for partners/IC</li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-400" /> Diligence prep, Q&A, timeline management</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#offerings" className="rounded-xl bg-zinc-900 text-white px-5 py-2 font-medium">Explore Advisory</a>
              <a href="#contact" className="rounded-xl ring-1 ring-zinc-300 px-5 py-2">Talk to us</a>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6">
          <Stat value="10h" label="to core fluency" />
          <Stat value="100+" label="placements & promotions" />
          <Stat value="$10B+" label="live-deal experience advised" />
        </div>
      </Section>

      {/* Logos */}
      <Section className="py-8">
        <div className="text-center text-xs uppercase tracking-wider text-zinc-500">Trusted by professionals from</div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 opacity-80">
          {["Crestone Advisors","Howard SMIF","Morehouse SMIF","Axial","Wharton","Private Equity Funds"].map((name, i) => (
            <div key={i} className="h-10 rounded-md bg-white border border-zinc-200 grid place-content-center text-[11px] text-zinc-600">{name}</div>
          ))}
        </div>
      </Section>

      {/* Offerings */}
      <Section id="offerings" className="py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-2 text-zinc-600">Choose one path—or blend them. Everything is live, tailored, and focused on output quality under real-world timelines.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3"><BookOpen className="h-5 w-5" /><h3 className="font-medium">1:1 Modeling Bootcamps</h3></div>
            <p className="mt-3 text-sm text-zinc-600">In ~10 hours become fluent in core IB/PE models. We build, you drive. Focus areas: LBOs, 3‑statement, M&A, 13‑week CF, SaaS bridges, debt schedules.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Hands‑on, live screen‑share drills","SOWS templates & checklists included","Pace matched to you—no filler"].map((t, i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" />{t}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3"><LineChart className="h-5 w-5" /><h3 className="font-medium">Live Deal Advisory</h3></div>
            <p className="mt-3 text-sm text-zinc-600">On‑call modeling and deck craftsmanship for active processes. From CIM tear‑downs to partner‑ready exhibits—done right, under pressure.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Data cuts, bridges, scenario cases","Partner‑clean pages & graphics","IC memos, diligence prep, Q&A"].map((t, i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" />{t}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3"><Headphones className="h-5 w-5" /><h3 className="font-medium">Interview & Case Prep</h3></div>
            <p className="mt-3 text-sm text-zinc-600">Bank and PE interviews with a coach who thinks like an MD. Technicals, cases, deal stories, and live reps until you’re sharp.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Custom question banks by firm","Mock IC debates & red‑team","Feedback you can act on"].map((t, i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" />{t}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Casework */}
      <Section id="casework" className="py-14">
        <div className="max-w-3xl"><h2 className="text-3xl font-semibold tracking-tight">Recent work & outcomes</h2></div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: "Healthcare services sell‑side", bullets: ["CIM & model overhaul", "KPIs/bridges clarified", "Buyer list & IC pages"], tag: "Sell‑Side Advisory" },
            { title: "SMCI special‑sits pitch support", bullets: ["Bull/bear‑case sensitivities", "Reg & probe timeline exhibit", "Thesis one‑pager"], tag: "Public Markets / HF" },
            { title: "University bootcamps", bullets: ["SOWS syllabus", "LBO in 4 sessions", "Live comps & Q&A"], tag: "Education" },
          ].map((c, i) => (
            <Card key={i} className="p-6">
              <div className="text-xs mb-2 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-2 py-1"> <Layers3 className="h-3 w-3"/> {c.tag}</div>
              <h3 className="font-medium leading-snug">{c.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {c.bullets.map((b, bi) => (<li key={bi} className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400" /> {b}</li>))}
              </ul>
              <div className="mt-4 flex items-center text-sm"><div className="flex items-center gap-2 text-emerald-700"><Gauge className="h-4 w-4"/> Measurable uplift</div></div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Bootcamps */}
      <Section id="bootcamps" className="py-14">
        <div className="max-w-3xl"><h2 className="text-3xl font-semibold tracking-tight">Bootcamps that actually stick</h2><p className="mt-2 text-zinc-600">Cohort or 1:1. Built for speed, retention, and immediate desk utility. Materials are yours to keep.</p></div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-medium flex items-center gap-2"><Workflow className="h-5 w-5"/> Core IB/PE Modeling (10 hours)</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">{["3‑statement & cash flow mechanics","LBO with waterfalls, PIK, & sensitivities","M&A accretion/dilution & purchase accounting","SaaS metrics, ARR bridges, cohort views"].map((b, i) => <li key={i} className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400"/> {b}</li>)}</ul>
            <div className="mt-4 flex items-center justify-between"><div className="text-sm text-zinc-600">From $399/hr • Volume discounts</div><CTAButton href="#contact">Get syllabus</CTAButton></div>
          </Card>
          <Card className="p-6">
            <h3 className="font-medium flex items-center gap-2"><Users className="h-5 w-5"/> Team Upskilling / University Cohorts</h3>
            <p className="mt-3 text-sm text-zinc-600">Custom curricula for banks, funds, and SMIFs. Integrated exercises, live labs, and graded take‑homes.</p>
            <div className="mt-4 flex items-center justify-between"><div className="text-sm text-zinc-600">PO & vendor setup supported</div><CTAButton href="#contact">Discuss a cohort</CTAButton></div>
          </Card>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="py-14">
        <div className="max-w-3xl"><h2 className="text-3xl font-semibold tracking-tight">Proof, not promises</h2><p className="mt-2 text-zinc-600">Real outcomes from analysts, associates, and operators who shipped with SOWS.</p></div>
        <motion.div className="mt-8 grid md:grid-cols-3 gap-6" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: { opacity: 1 }, show: { transition: { staggerChildren: 0.12 } } }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
              <Card className="p-6 h-full">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-[11px] rounded-full bg-zinc-100 px-2 py-1 text-zinc-700">{t.role}</span>
                  <div className="flex gap-0.5 text-amber-500">{Array.from({ length: 5 }).map((_, si) => (<Star key={si} className="h-3.5 w-3.5 fill-current" />))}</div>
                </div>
                <div className="mt-2 text-xs text-zinc-500">{t.who}</div>
                <p className="mt-4 text-sm text-zinc-800 leading-6">“{t.quote}”</p>
                <details className="mt-3"><summary className="text-sm text-zinc-800 cursor-pointer">Read full story</summary><p className="mt-2 text-sm text-zinc-600 whitespace-pre-line">{t.full}</p></details>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* About */}
      <Section id="about" className="py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">About SOWS</h2>
            <p className="mt-3 text-zinc-700 leading-7">Founded by a practicing banker and coach, SOWS sits at the intersection of execution and education. We combine desk‑tested frameworks with clear teaching so you become independently dangerous—fast. No fluff, no endless videos. Just reps and results.</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">{["Discrete and conflict‑sensitive", "Templates you’ll actually reuse", "Minute‑accurate billing; round‑down policy"].map((b, i) => (<li key={i} className="flex items-center gap-2"><Shield className="h-4 w-4"/>{b}</li>))}</ul>
          </div>
          <Card className="overflow-hidden"><img src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=1600&auto=format&fit=crop" alt="SOWS workspace" className="h-full w-full object-cover"/></Card>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-16">
        <Card className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Book an intro call</h2>
              <p className="mt-2 text-zinc-600">Tell us your goals and timeline. We’ll recommend the fastest path and share sample materials.</p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4"/> 30‑minute Zoom or Meet</div>
                <div className="flex items-center gap-2"><Building2 className="h-4 w-4"/> Firms & individuals welcome</div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4"/> NDA‑friendly, discrete support</div>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm">
                <a href="mailto:hello@straightouttawallstreet.com" className="inline-flex items-center gap-2 underline decoration-dotted"><Mail className="h-4 w-4"/> hello@straightouttawallstreet.com</a>
                <a href="https://www.linkedin.com" className="inline-flex items-center gap-2 underline decoration-dotted"><Linkedin className="h-4 w-4"/> LinkedIn</a>
              </div>
            </div>
            <form className="space-y-4" onSubmit={onSubmit}>
              <div><label className="text-sm text-zinc-700">Name</label><input name="name" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-zinc-200" placeholder="Jane Analyst" required /></div>
              <div><label className="text-sm text-zinc-700">Email</label><input name="email" type="email" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-zinc-200" placeholder="you@firm.com" required /></div>
              <div><label className="text-sm text-zinc-700">What do you need help with?</label><select name="need" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 bg-white focus:outline-none focus:ring-4 focus:ring-zinc-200"><option>Modeling bootcamp</option><option>Live deal advisory</option><option>Interview / case prep</option><option>University / team cohort</option><option>Other</option></select></div>
              <div><label className="text-sm text-zinc-700">Timeline</label><input name="timeline" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-zinc-200" placeholder="e.g., start next week; 2-week sprint" /></div>
              <div><label className="text-sm text-zinc-700">Message</label><textarea name="message" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-zinc-200" rows={4} placeholder="Anything else?" /></div>
              <button type="submit" className="w-full rounded-2xl bg-zinc-900 px-5 py-3 text-white shadow hover:bg-zinc-800">Request intro</button>
              <p className="text-xs text-zinc-500">By submitting, you agree to be contacted. No spam—ever.</p>
            </form>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white/70">
        <Section className="py-10 grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 font-semibold"><img src="/sows-logo.png" alt="SOWS" className="h-7 w-auto"/> Straight Outta Wall Street</div>
            <p className="mt-3 text-zinc-600">Elite training and on‑demand deal support for IB & PE professionals.</p>
          </div>
          <div>
            <div className="font-medium">Quick links</div>
            <ul className="mt-3 space-y-2 text-zinc-600">
              <li><a href="#offerings" className="hover:text-zinc-900">Offerings</a></li>
              <li><a href="#casework" className="hover:text-zinc-900">Case Work</a></li>
              <li><a href="#bootcamps" className="hover:text-zinc-900">Bootcamps</a></li>
              <li><a href="#testimonials" className="hover:text-zinc-900">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Contact</div>
            <ul className="mt-3 space-y-2 text-zinc-600">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@straightouttawallstreet.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Puerto Rico • New York</li>
            </ul>
          </div>
        </Section>
        <div className="border-t border-zinc-200">
          <Section className="py-6 text-xs text-zinc-500 flex items-center justify-between">
            <div>© {new Date().getFullYear()} Straight Outta Wall Street. All rights reserved.</div>
            <div className="flex items-center gap-4"><a href="#" className="hover:text-zinc-700">Privacy</a><a href="#" className="hover:text-zinc-700">Terms</a></div>
          </Section>
        </div>
      </footer>
    </div>
  );
}
