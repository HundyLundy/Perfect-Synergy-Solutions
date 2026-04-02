import { useEffect, useState } from "react";

/* ── Brand colours ─────────────────────────────────────────── */
const BRAND_BLUE   = "#0374a7";
const TEAL         = "#1aa3c8";
const GREEN        = "#1a8f6a";
const GOLD         = "#dec600";
const LIGHT_BG     = "#e8eff7";

/* ── Company Card ───────────────────────────────────────────── */
function CompanyCard({
  name, tagline, secondTagline, highlight, logo, logoAlt,
  href, email, accentColor, delay,
}: {
  name: string; tagline: string; secondTagline?: string; highlight?: string;
  logo: string; logoAlt: string; href: string; email: string;
  accentColor: string; delay: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block light-card light-card-hover rounded-2xl p-6 md:p-8 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col h-full gap-5">
        {/* Logo */}
        <div
          className="flex items-center justify-center h-20 rounded-xl overflow-hidden"
          style={{ background: `${accentColor}12` }}
        >
          <img src={logo} alt={logoAlt} className="max-h-16 max-w-full object-contain" />
        </div>

        {/* Name + accent bar */}
        <div>
          <h2 className="text-2xl font-bold mb-1" style={{ color: "#1a2a3a" }}>{name}</h2>
          <div className="h-0.5 w-12 rounded-full" style={{ background: accentColor }} />
        </div>

        {/* Taglines */}
        <div className="flex-1 space-y-2">
          <p className="text-base font-semibold" style={{ color: accentColor }}>
            "{tagline}"
          </p>
          {secondTagline && (
            <p className="text-sm text-slate-500 leading-relaxed">
              {secondTagline}
            </p>
          )}
          {highlight && (
            <p className="text-xs font-bold uppercase tracking-wide mt-1" style={{ color: GOLD }}>
              {highlight}
            </p>
          )}
        </div>

        {/* CTA footer */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: `1px solid ${accentColor}20` }}
        >
          <span className="text-xs text-slate-400">{email}</span>
          <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: accentColor }}>
            Visit site
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
}


/* ── Synergy Equation ───────────────────────────────────────── */
function SynergyEquation() {
  return (
    <div className="animate-slide-up delay-700 flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">

        {/* Parking logo chip */}
        <a
          href="https://perfectparking.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-200 hover:scale-105 hover:shadow-md"
          style={{ background: `${BRAND_BLUE}10`, border: `1px solid ${BRAND_BLUE}28` }}
        >
          <img src="/perfect-parking-logo.webp" alt="Perfect Parking" className="h-10 object-contain" />
          <span className="font-bold text-sm hidden sm:block" style={{ color: BRAND_BLUE }}>Perfect Parking</span>
        </a>

        <span className="text-3xl font-black" style={{ color: "#9db0c4" }}>+</span>

        {/* Water Valve logo chip */}
        <a
          href="https://www.perfectwatervalve.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-200 hover:scale-105 hover:shadow-md"
          style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}28` }}
        >
          <img src="/perfect-water-valve-logo.png" alt="Perfect Water Valve" className="h-10 object-contain" />
          <span className="font-bold text-sm hidden sm:block" style={{ color: TEAL }}>Perfect Water Valve</span>
        </a>

        <span className="text-3xl font-black" style={{ color: "#9db0c4" }}>=</span>

        {/* Result — colorful "Perfect Synergy Solutions" */}
        <div className="text-center">
          <div className="shimmer-text text-2xl md:text-3xl font-black tracking-tight leading-tight">
            Perfect Synergy<br className="sm:hidden" />{" "}Solutions
          </div>
        </div>

      </div>

      <p className="text-slate-500 text-center text-sm max-w-md">
        One relationship. Two problems solved. Zero excuses.{" "}
        <span className="text-slate-600 font-medium">(Your CFO will think you're a genius.)</span>
      </p>
    </div>
  );
}

/* ── Audience badge ─────────────────────────────────────────── */
function AudienceBadge({ icon, label }: { icon: string; label: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
      style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.28)", color: "white" }}
    >
      <span>{icon}</span> {label}
    </div>
  );
}

/* ── Stats Strip ─────────────────────────────────────────────── */
const STATS = [
  { value: "2", label: "Companies" },
  { value: "1", label: "Mission" },
  { value: "CO & TX", label: "Serving" },
  { value: "Water + Parking", label: "= Maximum ROI" },
];

function StatsStrip() {
  return (
    <section
      className="py-12 px-4"
      style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, #025a85)` }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center text-center px-6 py-2 animate-slide-up">
            <span
              className="text-2xl md:text-3xl font-black mb-1"
              style={{
                background: `linear-gradient(90deg, ${GOLD}, #f0e060)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {value}
            </span>
            <span className="text-white/75 text-sm font-medium uppercase tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Contact Section ─────────────────────────────────────────── */
const PROPERTY_TYPES = [
  "Commercial Real Estate",
  "Hotel / Resort",
  "Hospital / Healthcare",
  "HOA",
  "Other",
];

function ContactSection() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", propertyType: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full rounded-xl px-4 py-3 text-sm border outline-none transition-all focus:ring-2";
  const inputStyle = { borderColor: `${BRAND_BLUE}28`, background: "#f8fbfd" };
  const inputFocusStyle = { "--tw-ring-color": BRAND_BLUE } as React.CSSProperties;

  return (
    <section className="px-4 py-14" style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}06, ${TEAL}0a)` }}>
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 animate-slide-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: TEAL }}>
            Let's Talk
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "#1a2a3a" }}>
            Work With Both Divisions
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Get a free consultation on how Perfect Water Valve + Perfect Parking can work together on your property.
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-3xl p-8 md:p-10 animate-slide-up delay-100"
          style={{ background: "white", border: `1px solid ${BRAND_BLUE}15`, boxShadow: "0 12px 48px rgba(3,116,167,0.10)" }}
        >
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-black mb-2" style={{ color: "#1a2a3a" }}>We got your message!</h3>
              <p className="text-slate-500">Someone from our team will be in touch shortly.</p>
              <button
                onClick={() => { setStatus("idle"); setForm({ firstName: "", lastName: "", email: "", phone: "", propertyType: "", message: "" }); }}
                className="mt-6 text-sm font-semibold underline"
                style={{ color: BRAND_BLUE }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#4a6070" }}>First Name *</label>
                  <input
                    name="firstName" value={form.firstName} onChange={handleChange} required
                    placeholder="Jane"
                    className={inputClass}
                    style={{ ...inputStyle, ...inputFocusStyle }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#4a6070" }}>Last Name *</label>
                  <input
                    name="lastName" value={form.lastName} onChange={handleChange} required
                    placeholder="Smith"
                    className={inputClass}
                    style={{ ...inputStyle, ...inputFocusStyle }}
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#4a6070" }}>Email *</label>
                  <input
                    name="email" type="email" value={form.email} onChange={handleChange} required
                    placeholder="jane@yourproperty.com"
                    className={inputClass}
                    style={{ ...inputStyle, ...inputFocusStyle }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#4a6070" }}>Phone</label>
                  <input
                    name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="(720) 555-0100"
                    className={inputClass}
                    style={{ ...inputStyle, ...inputFocusStyle }}
                  />
                </div>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#4a6070" }}>Property Type *</label>
                <select
                  name="propertyType" value={form.propertyType} onChange={handleChange} required
                  className={inputClass}
                  style={{ ...inputStyle, ...inputFocusStyle }}
                >
                  <option value="">Select a property type…</option>
                  {PROPERTY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#4a6070" }}>Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your property — square footage, current parking situation, monthly water spend, etc."
                  className={inputClass}
                  style={{ ...inputStyle, ...inputFocusStyle, resize: "vertical" }}
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-sm text-red-500">Something went wrong — please try again or email us directly.</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90 hover:shadow-lg disabled:opacity-60"
                style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${TEAL})` }}
              >
                {status === "submitting" ? "Sending…" : "Get My Free Consultation →"}
              </button>

              <p className="text-center text-xs text-slate-400">
                No sales pressure. Just two solutions that actually work.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── App ────────────────────────────────────────────────────── */
export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: LIGHT_BG }}>

      {/* ── HEADER ──────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4"
        style={{ background: BRAND_BLUE, boxShadow: "0 2px 16px rgba(3,116,167,0.25)" }}
      >
        <div className="flex items-center gap-3">
          <img src="/favicon.png" alt="PSS" className="h-8 w-8 rounded-lg object-contain" />
          <div>
            <span className="text-white font-bold tracking-wide text-sm md:text-base">Perfect Synergy Solutions</span>
            <span className="hidden md:inline text-white/40 text-xs ml-2">perfectsynergysolutions.com</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="https://perfectparking.com" target="_blank" rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors font-medium">
            Perfect Parking
          </a>
          <a href="https://www.perfectwatervalve.com" target="_blank" rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors font-medium">
            Perfect Water Valve
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center pt-20 pb-10 px-4 overflow-hidden" style={{ minHeight: "62vh" }}>
        {/* Hero image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero.png)",
            transform: `translateY(${scrollY * 0.3}px)`,
            filter: "brightness(0.45) saturate(1.1)",
          }}
        />
        <div className="hero-gradient absolute inset-0" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${3 + (i % 3)}px`,
                height: `${3 + (i % 3)}px`,
                background: i % 3 === 0 ? TEAL : i % 3 === 1 ? GOLD : "white",
                left: `${8 + i * 9}%`,
                top: `${20 + (i * 6.3) % 50}%`,
                opacity: 0.25 + (i % 4) * 0.08,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Audience chips */}
          <div className="animate-fade-in flex flex-wrap justify-center gap-2 mb-8">
            <AudienceBadge icon="🖥️" label="Data Centers" />
            <AudienceBadge icon="🏨" label="Hotels" />
            <AudienceBadge icon="🏥" label="Hospitals" />
            <AudienceBadge icon="🏢" label="Commercial Real Estate" />
            <AudienceBadge icon="🚗" label="Car Washes" />
          </div>

          {/* Headline */}
          <h1 className="animate-slide-up text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-5 text-white">
            We{" "}
            <span style={{
              background: `linear-gradient(90deg, ${GOLD}, #f0e060, ${GOLD})`,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Stop Two Leaks
            </span>
            <br />
            at Once.
          </h1>

          {/* Sub */}
          <p className="animate-slide-up delay-200 text-xl md:text-2xl text-slate-200 mb-4 max-w-2xl mx-auto leading-relaxed">
            Unused parking = lost revenue. Air bubbles in your water = inflated bills.
            <br />
            <span className="text-white font-semibold">Both are fixable. Today.</span>
          </p>
          <p className="animate-slide-up delay-300 text-base text-slate-300 mb-10 italic">
            Two problems. Two solutions. One call.
          </p>

          {/* CTAs */}
          <div className="animate-slide-up delay-400 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://perfectparking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${TEAL})` }}
            >
              🚗 Turn Parking into Profits
            </a>
            <a
              href="https://www.perfectwatervalve.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${GREEN}, #22c490)`, color: "white" }}
            >
              💧 Stop Paying for Air in Your Water
            </a>
          </div>

        </div>
      </section>

      {/* ── TWO SOLUTIONS ──────────────────────────────────── */}
      <section className="px-4 py-14 max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: BRAND_BLUE }}
          >
            Our Companies
          </p>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#1a2a3a" }}>
            Two solutions.{" "}
            <span className="shimmer-text">Zero excuses.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <CompanyCard
            name="Perfect Parking"
            tagline="Managed and Monetize Your Parking"
            secondTagline="We turn underperforming lots and garages into reliable revenue streams — managed, optimized, and completely hands-off for you."
            logo="/perfect-parking-logo.webp"
            logoAlt="Perfect Parking"
            href="https://perfectparking.com"
            email="info@perfectparking.com"
            accentColor={BRAND_BLUE}
            delay={100}
          />
          <CompanyCard
            name="Perfect Water Valve"
            tagline="Don't Pay for Air in Your Water"
            secondTagline="Save ~20% on your $10,000+ monthly water bill — just by installing one valve. No disruptions. No guesswork."
            highlight="✦ 15% savings guaranteed — or we don't get paid."
            logo="/perfect-water-valve-logo.png"
            logoAlt="Perfect Water Valve"
            href="https://www.perfectwatervalve.com"
            email="info@perfectwatervalve.com"
            accentColor={TEAL}
            delay={200}
          />
        </div>
      </section>

      {/* ── OUR STORY ───────────────────────────────────────── */}
      <section className="px-4 py-14" style={{ background: "#f7fafd", borderTop: `3px solid ${BRAND_BLUE}18`, borderBottom: `3px solid ${BRAND_BLUE}18` }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-10 text-center" style={{ color: "#1a2a3a" }}>
            Our Story
          </h2>

          <div className="space-y-5 text-slate-600 text-base md:text-lg leading-relaxed">
            <p>
              Cooper's been an entrepreneur for most of his adult life. He's learned what works, what doesn't, and when to cut his losses and move on.
            </p>
            <p>
              His first venture with Hunter was Lundy's Powder Coating. He invited Hunter to help run it, and it turned out their skills fit together pretty well. They figured a lot out. They also figured out that the costs weren't going to work, and they made the call to shut it down. No drama. Just honest math.
            </p>
            <p>
              Hunter moved to Denver. Seven years passed.
            </p>
            <p>
              Then Cooper called again.
            </p>
            <p>
              He'd been building two companies — <strong style={{ color: BRAND_BLUE }}>Perfect Parking</strong> and <strong style={{ color: TEAL }}>Perfect Water Valve</strong> — and needed someone he trusted to help him take them somewhere real. Hunter came back. That's where this starts.
            </p>

            <div className="my-8 rounded-2xl p-6 md:p-8 space-y-4" style={{ background: "white", border: `1px solid ${BRAND_BLUE}20`, boxShadow: "0 4px 24px rgba(3,116,167,0.07)" }}>
              <p>
                <strong style={{ color: BRAND_BLUE }}>Perfect Parking</strong> turns underused commercial parking into consistent monthly revenue — with zero operational burden on the property owner. No staff. No overhead. Just income.
              </p>
              <p>
                <strong style={{ color: TEAL }}>Perfect Water Valve</strong> installs smart valve technology that reduces commercial water consumption by 20–40%, cutting one of the most overlooked line items on any property's operating budget.
              </p>
              <p>
                The same commercial property owner who needs one almost always needs the other. That's not a coincidence — that's the model.
              </p>
            </div>

            <p>
              <strong style={{ color: BRAND_BLUE }}>Perfect Synergy Solutions</strong> is the holding company that ties it together. Two cousins, two companies, one thesis: commercial property owners are leaving money on the table every single month in ways they can't see. We're here to fix that.
            </p>
            <p>
              We're early. We're working hard. And we're just getting started.
            </p>
          </div>

          <div className="mt-10">
            <img
              src="/founders-photo.jpg"
              alt="Hunter and Cooper Lundquist"
              className="w-full rounded-2xl object-cover"
              style={{ maxHeight: "480px", objectPosition: "center top", boxShadow: "0 8px 32px rgba(3,116,167,0.12)" }}
            />
          </div>

          <div className="mt-8 pt-8 border-t text-right" style={{ borderColor: `${BRAND_BLUE}20` }}>
            <p className="text-lg font-bold" style={{ color: "#1a2a3a" }}>— Hunter &amp; Cooper Lundquist</p>
          </div>
        </div>
      </section>

      {/* ── SYNERGY GRAPHIC ──────────────────────────────── */}
      <section
        className="px-4 py-14"
        style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}08, ${TEAL}0d)` }}
      >
        <div className="max-w-4xl mx-auto text-center mb-10 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "#1a2a3a" }}>
            We literally put money back in your pocket.
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Monetize your parking. Slash your water bill. 
            Your CFO gets a raise. <span className="italic">(At least that's how we see it.)</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden animate-slide-up delay-200" style={{ background: "white", border: `1px solid ${BRAND_BLUE}15`, boxShadow: "0 8px 40px rgba(3,116,167,0.10)" }}>
          <img
            src={`/synergy-graphic.png?v=${Date.now()}`}
            alt="Perfect Parking and Perfect Water Valve mascots handing money to a happy building owner"
            className="w-full object-cover"
            style={{ maxHeight: "480px", objectPosition: "center" }}
          />
        </div>

        <p className="text-center text-slate-400 text-sm mt-5 italic animate-slide-up delay-400">
          That's not upselling. That's just being an exceptionally good partner.
        </p>
      </section>

      {/* ── CONTACT ────────────────────────────────────────── */}
      <ContactSection />

      {/* ── THE EQUATION ───────────────────────────────────── */}
      <section className="px-4 py-14 max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-12 animate-slide-up"
          style={{ background: "white", border: `1px solid ${BRAND_BLUE}18`, boxShadow: "0 8px 40px rgba(3,116,167,0.08)" }}
        >
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GOLD }}>
              The math checks out
            </p>
          </div>
          <SynergyEquation />
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer
        className="px-4 py-8 text-center"
        style={{ background: BRAND_BLUE }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-bold text-lg mb-4">Perfect Synergy Solutions</p>
          <p className="text-white/70 text-sm mb-6">
            Making commercial properties run smoother —<br className="hidden md:block" />
            one parking spot and water valve at a time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm mb-6">
            <a href="https://perfectparking.com" target="_blank" rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors">
              perfectparking.com
            </a>
            <span className="text-white/30">·</span>
            <a href="https://www.perfectwatervalve.com" target="_blank" rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors">
              perfectwatervalve.com
            </a>
            <span className="text-white/30">·</span>
            <a href="mailto:info@perfectparking.com"
              className="text-white/70 hover:text-white transition-colors">
              info@perfectparking.com
            </a>
            <span className="text-white/30">·</span>
            <a href="mailto:info@perfectwatervalve.com"
              className="text-white/70 hover:text-white transition-colors">
              info@perfectwatervalve.com
            </a>
          </div>
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Perfect Synergy Solutions. All rights reserved.
            No parking spots were harmed.
          </p>
        </div>
      </footer>
    </div>
  );
}
