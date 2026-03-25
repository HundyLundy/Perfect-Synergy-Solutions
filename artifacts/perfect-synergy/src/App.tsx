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
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {/* Parking chip */}
        <div
          className="flex items-center gap-3 rounded-xl px-5 py-3"
          style={{ background: `${BRAND_BLUE}12`, border: `1px solid ${BRAND_BLUE}30` }}
        >
          <img src="/perfect-parking-logo.webp" alt="Perfect Parking" className="h-9 object-contain" />
        </div>

        <span className="text-3xl font-black" style={{ color: "#9db0c4" }}>+</span>

        {/* Water Valve chip */}
        <div
          className="flex items-center gap-3 rounded-xl px-5 py-3"
          style={{ background: `${TEAL}12`, border: `1px solid ${TEAL}30` }}
        >
          <img src="/perfect-water-valve-logo.png" alt="Perfect Water Valve" className="h-9 object-contain" />
          <span className="font-semibold text-sm" style={{ color: BRAND_BLUE }}>Perfect Water Valve</span>
        </div>

        <span className="text-3xl font-black" style={{ color: "#9db0c4" }}>=</span>

        {/* Result */}
        <div className="text-center">
          <div className="shimmer-text text-2xl md:text-3xl font-black tracking-tight">
            Perfect Synergy ✨
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
          <div className="w-2 h-2 rounded-full" style={{ background: GOLD }} />
          <span className="text-white font-bold tracking-wide text-sm md:text-base">Perfect Synergy Partners</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="https://perfectparking.com" target="_blank" rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors font-medium">
            Perfect Parking
          </a>
          <a href="https://perfectwatervalve.com" target="_blank" rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors font-medium">
            Perfect Water Valve
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 px-4 overflow-hidden">
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
            <AudienceBadge icon="🏨" label="Hotels & Resorts" />
            <AudienceBadge icon="🏥" label="Hospitals & Healthcare" />
            <AudienceBadge icon="🏢" label="Commercial Real Estate" />
          </div>

          {/* Headline */}
          <h1 className="animate-slide-up text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-5 text-white">
            What a{" "}
            <span style={{
              background: `linear-gradient(90deg, ${GOLD}, #f0e060, ${GOLD})`,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Perfect
            </span>
            <br />
            <span style={{
              background: `linear-gradient(90deg, ${GOLD}, #f0e060, ${GOLD})`,
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Synergy.
            </span>
          </h1>

          {/* Sub */}
          <p className="animate-slide-up delay-200 text-xl md:text-2xl text-slate-200 mb-4 max-w-2xl mx-auto leading-relaxed">
            Your parking is losing money every day.
            <br />
            <span className="text-white font-semibold">Your water bill probably is too.</span>
          </p>
          <p className="animate-slide-up delay-300 text-base text-slate-300 mb-10 italic">
            Fortunately, we fix both. You're welcome. 😎
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
              href="https://perfectwatervalve.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: `linear-gradient(135deg, ${GREEN}, #22c490)`, color: "white" }}
            >
              💧 Stop Paying for Air in Your Water
            </a>
          </div>

          {/* Scroll nudge */}
          <div className="animate-fade-in delay-800 mt-14 flex flex-col items-center gap-2 opacity-50">
            <span className="text-xs text-slate-300 uppercase tracking-widest">Scroll down, it gets better</span>
            <div className="w-0.5 h-8 mx-auto rounded-full" style={{ background: `linear-gradient(to bottom, ${TEAL}, transparent)` }} />
          </div>
        </div>
      </section>

      {/* ── TWO SOLUTIONS ──────────────────────────────────── */}
      <section className="px-4 py-20 max-w-5xl mx-auto">
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
            href="https://perfectwatervalve.com"
            email="info@perfectwatervalve.com"
            accentColor={TEAL}
            delay={200}
          />
        </div>
      </section>

      {/* ── SYNERGY GRAPHIC ──────────────────────────────── */}
      <section
        className="px-4 py-20"
        style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}08, ${TEAL}0d)` }}
      >
        <div className="max-w-4xl mx-auto text-center mb-10 animate-slide-up">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BRAND_BLUE }}>
            The full picture
          </p>
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
            src="/synergy-graphic.png"
            alt="Perfect Parking and Perfect Water Valve mascots handing money to a happy building owner"
            className="w-full object-cover"
            style={{ maxHeight: "480px", objectPosition: "center" }}
          />
        </div>

        <p className="text-center text-slate-400 text-sm mt-5 italic animate-slide-up delay-400">
          That's not upselling. That's just being an exceptionally good partner.
        </p>
      </section>

      {/* ── THE EQUATION ───────────────────────────────────── */}
      <section className="px-4 py-20 max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-12 animate-slide-up"
          style={{ background: "white", border: `1px solid ${BRAND_BLUE}18`, boxShadow: "0 8px 40px rgba(3,116,167,0.08)" }}
        >
          <div className="text-center mb-8">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: GOLD }}
            >
              The math checks out
            </p>
            <h2 className="text-2xl md:text-3xl font-black" style={{ color: "#1a2a3a" }}>
              The Perfect Synergy Equation
            </h2>
          </div>
          <SynergyEquation />
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer
        className="px-4 py-12 text-center"
        style={{ background: BRAND_BLUE }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-white/70 text-sm mb-6">
            Perfect Synergy Partners — Making commercial properties run smoother,<br className="hidden md:block" />
            one parking spot and water valve at a time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm mb-6">
            <a href="https://perfectparking.com" target="_blank" rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors">
              perfectparking.com
            </a>
            <span className="text-white/30">·</span>
            <a href="https://perfectwatervalve.com" target="_blank" rel="noopener noreferrer"
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
            © {new Date().getFullYear()} Perfect Synergy Partners. All rights reserved.
            No parking spots were harmed.
          </p>
        </div>
      </footer>
    </div>
  );
}
