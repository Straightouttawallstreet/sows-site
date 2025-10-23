
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LineChart, BookOpen, Headphones, Shield, Calendar, PlayCircle, Building2, Mail, MapPin, Star, Linkedin, Sparkles, Layers3, Workflow, Gauge, Users } from "lucide-react";

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`max-w-7xl mx-auto px-6 sm:px-8 ${className}`}>{children}</section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm shadow-sm backdrop-blur">
    <Sparkles className="h-4 w-4" />{children}
  </span>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}>{children}</div>
);

const CTAButton = ({ children, href = "#contact" }: { children: React.ReactNode; href?: string }) => (
  <a href={href} className="group inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-white shadow hover:bg-zinc-800 active:translate-y-px">
    {children}
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
  </a>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-semibold tracking-tight">{value}</div>
    <div className="text-sm text-zinc-500 mt-1">{label}</div>
  </div>
);

export default function Page() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fd.get("name"),
        email: fd.get("email"),
        need: fd.get("need"),
        timeline: fd.get("timeline"),
        message: fd.get("message"),
      }),
    });
    alert("Thanks! We'll get back to you shortly.");
    e.currentTarget.reset();
  };

  return (
    <div className="bg-[radial-gradient(60%_60%_at_10%_-10%,#e7e7ff_0%,transparent_70%),radial-gradient(60%_60%_at_90%_-20%,#ffe9e7_0%,transparent_70%)] text-zinc-900">
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-zinc-200">
        <Section className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="h-7 w-7 rounded-lg bg-zinc-900 text-white grid place-content-center text-xs">S</span>
            <span>Straight Outta Wall Street</span>
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

      <Section id="home" className="pt-16 pb-10 sm:pt-24 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge>On‑demand modeling, deal coaching & interview mastery</Badge>
              <h1 className="mt-5 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
                Train like a top‑bucket analyst. Execute like a seasoned VP.
              </h1>
              <p className="mt-4 text-zinc-600 text-lg">
                Straight Outta Wall Street (SOWS) helps analysts, associates, and funds ship polished models, decks, and decisions—fast. Live 1:1 training, on‑call deal support, and elite interview prep designed for real transactions, not theory.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <CTAButton href="#contact">Start now</CTAButton>
                <a href="#offerings" className="text-zinc-700 hover:text-zinc-900">See offerings</a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <Stat value="10h" label="to core fluency" />
                <Stat value="100+" label="placements & promotions" />
                <Stat value="$10B+" label="live‑deal experience advised" />
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Card className="p-4">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-zinc-100 to-white grid place-content-center">
                <PlayCircle className="h-14 w-14 opacity-70" />
              </div>
              <div className="p-4">
                <h3 className="font-medium">How SOWS works (2:07)</h3>
                <p className="text-sm text-zinc-600">A quick walkthrough of the training flow, live help, and deliverables you’ll actually ship.</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section className="py-8">
        <div className="text-center text-xs uppercase tracking-wider text-zinc-500">Trusted by professionals from</div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 opacity-80">
          {["Crestone Advisors","Howard SMIF","Morehouse SMIF","Axial","Wharton","Private Equity Funds"].map((name, i) => (
            <div key={i} className="h-10 rounded-md bg-white border border-zinc-200 grid place-content-center text-[11px] text-zinc-600">{name}</div>
          ))}
        </div>
      </Section>

      <Section id="offerings" className="py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-2 text-zinc-600">Choose one path—or blend them. Everything is live, tailored, and focused on output quality under real‑world timelines.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5" />
              <h3 className="font-medium">1:1 Modeling Bootcamps</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-600">In ~10 hours become fluent in core IB/PE models. We build, you drive. Focus areas: LBOs, 3‑statement, M&A, 13‑week CF, SaaS bridges, debt schedules.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Hands‑on, live screen‑share drills","SOWS templates & checklists included","Pace matched to you—no filler"].map((t, i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" />{t}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <LineChart className="h-5 w-5" />
              <h3 className="font-medium">Live Deal Advisory</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-600">On‑call modeling and deck craftsmanship for active processes. From CIM tear‑downs to partner‑ready exhibits—done right, under pressure.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Data cuts, bridges, scenario cases","Partner‑clean pages & graphics","IC memos, diligence prep, Q&A"].map((t, i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" />{t}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <Headphones className="h-5 w-5" />
              <h3 className="font-medium">Interview & Case Prep</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-600">Bank and PE interviews with a coach who thinks like an MD. Technicals, cases, deal stories, and live reps until you’re sharp.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Custom question banks by firm","Mock IC debates & red‑team","Feedback you can act on"].map((t, i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" />{t}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="casework" className="py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">Recent work & outcomes</h2>
          <p className="mt-2 text-zinc-600">A snapshot of engagements that show the range—from deck surgery to zero‑to‑one buildouts.</p>
        </div>
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
              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-emerald-700"><Gauge className="h-4 w-4"/> Measurable uplift</div>
                <a href="#" className="text-zinc-700 hover:text-zinc-900 inline-flex items-center gap-1">View sample <ArrowRight className="h-4 w-4"/></a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="bootcamps" className="py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">Bootcamps that actually stick</h2>
          <p className="mt-2 text-zinc-600">Cohort or 1:1. Built for speed, retention, and immediate desk utility. Materials are yours to keep.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-medium flex items-center gap-2"><Workflow className="h-5 w-5"/> Core IB/PE Modeling (10 hours)</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              {["3‑statement & cash flow mechanics","LBO with waterfalls, PIK, & sensitivities","M&A accretion/dilution & purchase accounting","SaaS metrics, ARR bridges, cohort views"].map((b, i) => <li key={i} className="flex gap-2"><div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400"/> {b}</li>)}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-zinc-600">From $399/hr • Volume discounts</div>
              <CTAButton href="#contact">Get syllabus</CTAButton>
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="font-medium flex items-center gap-2"><Users className="h-5 w-5"/> Team Upskilling / University Cohorts</h3>
            <p className="mt-3 text-sm text-zinc-600">Custom curricula for banks, funds, and SMIFs. Integrated exercises, live labs, and graded take‑homes.</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-zinc-600">PO & vendor setup supported</div>
              <CTAButton href="#contact">Discuss a cohort</CTAButton>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="testimonials" className="py-14">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">Proof, not promises</h2>
          <p className="mt-2 text-zinc-600">Real outcomes from analysts, associates, and PMs who shipped with SOWS.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center gap-3">
                <img src={`https://picsum.photos/seed/sows${i}/96/96`} alt="avatar" className="h-12 w-12 rounded-full object-cover"/>
                <div>
                  <div className="font-medium">Placed Associate</div>
                  <div className="text-xs text-zinc-600">Middle‑Market PE</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-700 leading-6">“The difference was night and day. My LBO and IC answers finally sounded like I’d actually done the job. Offer landed.”</p>
              <div className="mt-3 flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, si) => <Star key={si} className="h-4 w-4 fill-current" />)}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="about" className="py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">About SOWS</h2>
            <p className="mt-3 text-zinc-700 leading-7">
              Founded by a practicing banker and coach, SOWS sits at the intersection of execution and education. We combine desk‑tested frameworks with clear teaching so you become independently dangerous—fast. No fluff, no endless videos. Just reps and results.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              {["Discrete and conflict‑sensitive", "Templates you’ll actually reuse", "Minute‑accurate billing; round‑down policy"].map((b, i) => (
                <li key={i} className="flex items-center gap-2"><Shield className="h-4 w-4"/>{b}</li>
              ))}
            </ul>
          </div>
          <Card className="overflow-hidden">
            <img src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=1600&auto=format&fit=crop" alt="SOWS workspace" className="h-full w-full object-cover"/>
          </Card>
        </div>
      </Section>

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
              <div>
                <label className="text-sm text-zinc-700">Name</label>
                <input name="name" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-zinc-200" placeholder="Jane Analyst" required />
              </div>
              <div>
                <label className="text-sm text-zinc-700">Email</label>
                <input name="email" type="email" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-zinc-200" placeholder="you@firm.com" required />
              </div>
              <div>
                <label className="text-sm text-zinc-700">What do you need help with?</label>
                <select name="need" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 bg-white focus:outline-none focus:ring-4 focus:ring-zinc-200">
                  <option>Modeling bootcamp</option>
                  <option>Live deal advisory</option>
                  <option>Interview / case prep</option>
                  <option>University / team cohort</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-zinc-700">Timeline</label>
                <input name="timeline" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-zinc-200" placeholder="e.g., start next week; 2-week sprint" />
              </div>
              <div>
                <label className="text-sm text-zinc-700">Message</label>
                <textarea name="message" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-4 focus:ring-zinc-200" rows={4} placeholder="Anything else?" />
              </div>
              <button type="submit" className="w-full rounded-2xl bg-zinc-900 px-5 py-3 text-white shadow hover:bg-zinc-800">Request intro</button>
              <p className="text-xs text-zinc-500">By submitting, you agree to be contacted. No spam—ever.</p>
            </form>
          </div>
        </Card>
      </Section>

      <footer className="border-t border-zinc-200 bg-white/70">
        <Section className="py-10 grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 font-semibold"><span className="h-7 w-7 rounded-lg bg-zinc-900 text-white grid place-content-center text-xs">S</span> Straight Outta Wall Street</div>
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
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-zinc-700">Privacy</a>
              <a href="#" className="hover:text-zinc-700">Terms</a>
            </div>
          </Section>
        </div>
      </footer>
    </div>
  );
}
