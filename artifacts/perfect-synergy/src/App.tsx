import { useEffect, useRef, useState } from "react";

declare global {
  interface Window { FB?: { XFBML: { parse: (el?: HTMLElement) => void } }; }
}

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
        <div
          className="flex items-center gap-3 rounded-2xl px-5 py-3"
          style={{ background: `${BRAND_BLUE}10`, border: `1px solid ${BRAND_BLUE}28` }}
        >
          <img src="/perfect-parking-logo.webp" alt="Perfect Parking" className="h-10 object-contain" />
          <span className="font-bold text-sm hidden sm:block" style={{ color: BRAND_BLUE }}>Perfect Parking</span>
        </div>

        <span className="text-3xl font-black" style={{ color: "#9db0c4" }}>+</span>

        {/* Water Valve logo chip */}
        <div
          className="flex items-center gap-3 rounded-2xl px-5 py-3"
          style={{ background: `${TEAL}10`, border: `1px solid ${TEAL}28` }}
        >
          <img src="/perfect-water-valve-logo.png" alt="Perfect Water Valve" className="h-10 object-contain" />
          <span className="font-bold text-sm hidden sm:block" style={{ color: TEAL }}>Perfect Water Valve</span>
        </div>

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

/* ── Facebook Feeds ─────────────────────────────────────────── */
function FbPage({ href, accentColor }: { href: string; accentColor: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tryParse = () => {
      if (window.FB && ref.current) {
        window.FB.XFBML.parse(ref.current);
      }
    };
    tryParse();
    const interval = setInterval(tryParse, 500);
    const timer = setTimeout(() => clearInterval(interval), 5000);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, [href]);

  return (
    <div ref={ref}>
      <div
        className="fb-page"
        data-href={href}
        data-tabs="timeline"
        data-width="500"
        data-height="600"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false"
      />
    </div>
  );
}

const FB_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

interface FeedCardProps {
  logo: string;
  alt: string;
  name: string;
  tagline: string;
  pageUrl: string;
  accentColor: string;
  bgGradient: string;
  fbHref: string;
}

function FeedCard({ logo, alt, name, tagline, pageUrl, accentColor, bgGradient, fbHref }: FeedCardProps) {
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tryParse = () => {
      if (window.FB && feedRef.current) {
        window.FB.XFBML.parse(feedRef.current);
      }
    };
    tryParse();
    const id = setInterval(tryParse, 600);
    const t = setTimeout(() => clearInterval(id), 6000);
    return () => { clearInterval(id); clearTimeout(t); };
  }, [fbHref]);

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden animate-slide-up"
      style={{ border: `1px solid ${accentColor}20`, boxShadow: `0 8px 32px ${accentColor}14` }}>

      {/* Card header */}
      <div className="px-6 py-5 flex items-center gap-4" style={{ background: bgGradient }}>
        <img src={logo} alt={alt} className="h-10 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
        <div>
          <p className="font-bold text-white text-base leading-tight">{name}</p>
          <p className="text-white/70 text-xs mt-0.5">{tagline}</p>
        </div>
      </div>

      {/* FB feed — loads on live domain; empty in dev */}
      <div ref={feedRef} className="w-full bg-white" style={{ minHeight: 520 }}>
        <div
          className="fb-page"
          data-href={fbHref}
          data-tabs="timeline"
          data-width="500"
          data-height="520"
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="true"
          data-show-facepile="false"
        />
      </div>

      {/* Footer link */}
      <div className="px-6 py-4 flex items-center justify-between bg-white border-t"
        style={{ borderColor: `${accentColor}14` }}>
        <span className="text-xs text-gray-400">Follow for the latest updates</span>
        <a
          href={fbHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full text-white transition-opacity hover:opacity-90"
          style={{ background: accentColor }}
        >
          {FB_ICON} Follow
        </a>
      </div>
    </div>
  );
}

function FacebookFeeds() {
  return (
    <section className="px-4 py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12 animate-slide-up">
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BRAND_BLUE }}>
          Latest Updates
        </p>
        <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#1a2a3a" }}>
          What we've been up to
        </h2>
        <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto">
          Follow each brand on Facebook — their latest posts show up right here.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <FeedCard
          logo="/perfect-parking-logo.webp"
          alt="Perfect Parking"
          name="Perfect Parking"
          tagline="Managed parking → real revenue"
          pageUrl="https://perfectparking.com"
          accentColor={BRAND_BLUE}
          bgGradient={`linear-gradient(135deg, ${BRAND_BLUE}, #025f8a)`}
          fbHref="https://www.facebook.com/PerfectParking/"
        />
        <FeedCard
          logo="/perfect-water-valve-logo.png"
          alt="Perfect Water Valve"
          name="Perfect Water Valve"
          tagline="Cut your water bill by 20%"
          pageUrl="https://perfectwatervalve.com"
          accentColor={TEAL}
          bgGradient={`linear-gradient(135deg, ${TEAL}, #1482a0)`}
          fbHref="https://www.facebook.com/profile.php?id=61583769211912"
        />
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
          <div className="w-2 h-2 rounded-full" style={{ background: GOLD }} />
          <div>
            <span className="text-white font-bold tracking-wide text-sm md:text-base">Perfect Synergy Solutions</span>
            <span className="hidden md:inline text-white/40 text-xs ml-2">perfectsynergypartners.com</span>
          </div>
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

      {/* ── FACEBOOK FEEDS ─────────────────────────────────── */}
      <FacebookFeeds />

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

      {/* ── THE EQUATION ───────────────────────────────────── */}
      <section className="px-4 py-20 max-w-4xl mx-auto">
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
        className="px-4 py-12 text-center"
        style={{ background: BRAND_BLUE }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-white font-bold text-lg mb-1">Perfect Synergy Solutions</p>
          <p className="text-white/50 text-xs mb-5 italic">
            (Yes, we're perfectsynergypartners.com. perfectsynergysolutions.com was taken.<br />
            We'd like a word with whoever has it. 😤)
          </p>
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
            © {new Date().getFullYear()} Perfect Synergy Solutions. All rights reserved.
            No parking spots were harmed.
          </p>
        </div>
      </footer>
    </div>
  );
}
