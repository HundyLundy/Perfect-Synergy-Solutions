import { useEffect, useRef, useState } from "react";

function WaterDrops() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 11}%`,
            top: `-10px`,
            animationDelay: `${i * 0.25}s`,
            animationDuration: `${1.6 + (i % 3) * 0.4}s`,
          }}
        >
          <div
            className="water-drop"
            style={{
              width: `${4 + (i % 3) * 3}px`,
              height: `${8 + (i % 3) * 4}px`,
              background: `rgba(41, 182, 246, ${0.3 + (i % 4) * 0.1})`,
              borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
              animationDelay: `${i * 0.25}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

function AnimatedScene() {
  return (
    <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d2040 40%, #1a3a5c 100%)" }}>
      {/* Sky gradient */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0f1f3d 0%, #1a4a6e 35%, #2d6a8a 60%, #1a3a5c 100%)" }} />

      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1 + (i % 2)}px`,
            height: `${1 + (i % 2)}px`,
            background: "white",
            left: `${5 + (i * 47) % 88}%`,
            top: `${3 + (i * 31) % 30}%`,
            opacity: 0.4 + (i % 5) * 0.12,
            animation: `sparkle ${2 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.3) % 2}s`,
          }}
        />
      ))}

      {/* Moon reflection on lake */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "38%", background: "linear-gradient(180deg, rgba(29,78,120,0.6) 0%, rgba(10,20,50,0.9) 100%)" }}>
        {/* Lake shimmer */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 18}%`,
                top: `${20 + (i % 2) * 30}%`,
                width: `${40 + i * 10}px`,
                height: "2px",
                background: "rgba(255,255,255,0.6)",
                borderRadius: "4px",
                animation: `shimmer 2s linear infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hotel building */}
      <div className="absolute" style={{ bottom: "35%", left: "50%", transform: "translateX(-50%)", width: "220px" }}>
        {/* Main tower */}
        <div className="relative" style={{ background: "linear-gradient(180deg, #1e3a5a 0%, #162d46 100%)", height: "130px", borderRadius: "4px 4px 0 0" }}>
          {/* Windows grid */}
          <div className="absolute inset-2 grid gap-1" style={{ gridTemplateColumns: "repeat(5, 1fr)", gridTemplateRows: "repeat(4, 1fr)" }}>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                style={{
                  background: Math.random() > 0.35 ? `rgba(230, 199, 74, ${0.5 + Math.random() * 0.5})` : "rgba(30,60,90,0.8)",
                  borderRadius: "1px",
                  boxShadow: Math.random() > 0.5 ? "0 0 4px rgba(230,199,74,0.5)" : "none",
                }}
              />
            ))}
          </div>
          {/* Rooftop */}
          <div className="absolute -top-3 left-0 right-0 h-3" style={{ background: "linear-gradient(90deg, #1e3a5a, #29b6f6 50%, #1e3a5a)", borderRadius: "4px 4px 0 0" }} />
        </div>

        {/* Hotel entrance & porte cochere */}
        <div style={{ background: "#0f2035", height: "20px", width: "100%", borderTop: "2px solid rgba(41,182,246,0.4)" }}>
          <div className="absolute" style={{ bottom: 0, left: "35%", width: "30%", height: "30px", background: "rgba(15,30,55,0.9)", borderRadius: "4px 4px 0 0" }}>
            {/* Entrance arch */}
            <div style={{ width: "40%", height: "70%", background: "rgba(230,199,74,0.15)", borderRadius: "4px 4px 0 0", margin: "0 auto" }} />
          </div>
        </div>
      </div>

      {/* Grand Fountain in front */}
      <div className="absolute animate-fountain" style={{ bottom: "33%", left: "72%", transform: "translateX(-50%)" }}>
        {/* Fountain base */}
        <div style={{ width: "44px", height: "6px", background: "#29b6f6", borderRadius: "50%", opacity: 0.8 }} />
        {/* Water jets */}
        {[...Array(5)].map((_, i) => {
          const angle = -90 + (i - 2) * 18;
          const rad = (angle * Math.PI) / 180;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                bottom: "4px",
                left: "50%",
                width: "3px",
                height: `${22 + Math.abs(i - 2) * 3}px`,
                background: "linear-gradient(to top, rgba(41,182,246,0.8), rgba(77,208,225,0.4))",
                borderRadius: "2px",
                transformOrigin: "bottom center",
                transform: `rotate(${angle}deg)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          );
        })}
        {/* Spray droplets */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "rgba(77,208,225,0.7)",
              left: `${-15 + i * 6}px`,
              bottom: `${20 + Math.sin(i) * 10}px`,
              animation: `sparkle ${0.8 + (i % 3) * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      {/* Pool to the right */}
      <div className="absolute" style={{ bottom: "32%", right: "8%", width: "55px", height: "18px" }}>
        <div style={{ width: "100%", height: "100%", background: "rgba(41,182,246,0.35)", borderRadius: "4px", border: "1px solid rgba(41,182,246,0.5)" }}>
          {/* Pool ripples */}
          <div style={{ width: "60%", height: "2px", background: "rgba(255,255,255,0.3)", borderRadius: "2px", margin: "4px auto" }} />
          <div style={{ width: "40%", height: "2px", background: "rgba(255,255,255,0.2)", borderRadius: "2px", margin: "0 auto" }} />
        </div>
      </div>

      {/* Underground parking ramp indicator */}
      <div className="absolute" style={{ bottom: "32%", left: "6%" }}>
        <div style={{ width: "50px", height: "28px", background: "#0a1625", border: "1px solid rgba(41,182,246,0.3)", borderRadius: "3px 3px 0 0", position: "relative", overflow: "hidden" }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(41,182,246,0.1) 0%, transparent 60%)" }} />
          {/* P sign */}
          <div className="absolute" style={{ top: "3px", left: "5px", color: "#29b6f6", fontSize: "11px", fontWeight: "bold", lineHeight: 1 }}>P</div>
          {/* Arrow down */}
          <div className="absolute" style={{ bottom: "3px", right: "5px", color: "rgba(41,182,246,0.6)", fontSize: "9px" }}>↓</div>
          {/* Sliding door line */}
          <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "rgba(41,182,246,0.4)" }} />
        </div>
      </div>

      {/* Car animation */}
      <div className="absolute" style={{ bottom: "32.5%", left: 0, right: 0, overflow: "hidden", height: "16px" }}>
        <div className="animate-car" style={{ position: "absolute", left: "50%", bottom: 0 }}>
          {/* BMW car silhouette */}
          <svg width="44" height="16" viewBox="0 0 44 16" fill="none">
            <rect x="2" y="8" width="40" height="7" rx="2" fill="#1a1a2e" />
            <path d="M8 8 C8 4 13 2 22 2 C31 2 36 4 36 8 Z" fill="#1e2a3a" />
            <circle cx="10" cy="15" r="3" fill="#0f0f1a" stroke="rgba(41,182,246,0.6)" strokeWidth="1" />
            <circle cx="34" cy="15" r="3" fill="#0f0f1a" stroke="rgba(41,182,246,0.6)" strokeWidth="1" />
            <rect x="33" y="9" width="5" height="3" rx="1" fill="rgba(230,199,74,0.8)" />
            <rect x="6" y="9" width="4" height="2" rx="1" fill="rgba(255,80,80,0.6)" />
          </svg>
        </div>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-[33%]" style={{ background: "linear-gradient(180deg, #0a1e35 0%, #061525 100%)" }}>
        {/* Road/driveway */}
        <div className="absolute" style={{ top: 0, left: "5%", right: "10%", height: "2px", background: "rgba(41,182,246,0.2)" }} />
      </div>

      {/* Lawn/garden strip */}
      <div className="absolute" style={{ bottom: "33%", left: "18%", right: "20%", height: "4px", background: "rgba(20,80,40,0.6)", borderRadius: "2px" }}>
        {/* Sprinkler water arcs */}
        {[0, 1].map((i) => (
          <div key={i} className="absolute" style={{ left: `${20 + i * 55}%`, bottom: "0" }}>
            <div style={{
              width: "20px",
              height: "10px",
              borderRadius: "10px 10px 0 0",
              border: "1px solid rgba(41,182,246,0.5)",
              borderBottom: "none",
              animation: `fountain-arc ${1.5 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }} />
          </div>
        ))}
      </div>

      {/* Scene label */}
      <div className="absolute top-3 left-0 right-0 flex justify-center">
        <div className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: "rgba(41,182,246,0.15)", border: "1px solid rgba(41,182,246,0.3)", color: "rgba(200,230,255,0.8)" }}>
          The Synergy Grand — Where Everything Just Works™
        </div>
      </div>
    </div>
  );
}

function CompanyCard({
  name,
  tagline,
  secondTagline,
  logo,
  logoAlt,
  href,
  email,
  accentColor,
  delay,
}: {
  name: string;
  tagline: string;
  secondTagline?: string;
  logo: string;
  logoAlt: string;
  href: string;
  email: string;
  accentColor: string;
  delay: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block glass-card glass-card-hover rounded-2xl p-6 md:p-8 animate-slide-up"
      style={{ animationDelay: `${delay}ms`, borderColor: `${accentColor}22` }}
    >
      <div className="flex flex-col h-full gap-5">
        {/* Logo */}
        <div className="flex items-center justify-center h-20 rounded-xl overflow-hidden" style={{ background: "rgba(0,0,0,0.3)" }}>
          <img src={logo} alt={logoAlt} className="max-h-16 max-w-full object-contain" />
        </div>

        {/* Name */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">{name}</h2>
          <div className="h-0.5 w-12 rounded-full" style={{ background: accentColor }} />
        </div>

        {/* Taglines */}
        <div className="flex-1 space-y-2">
          <p className="text-base font-semibold" style={{ color: accentColor }}>
            "{tagline}"
          </p>
          {secondTagline && (
            <p className="text-sm text-slate-400 italic">
              — {secondTagline}
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${accentColor}22` }}>
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

function SynergyEquation() {
  return (
    <div className="animate-slide-up delay-700 flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {/* Parking logo chip */}
        <div className="flex items-center gap-3 glass-card rounded-xl px-4 py-3">
          <img src="/perfect-parking-logo.webp" alt="Perfect Parking" className="h-8 object-contain" />
        </div>

        <span className="text-3xl font-bold text-slate-400">+</span>

        {/* Water logo chip */}
        <div className="flex items-center gap-3 glass-card rounded-xl px-4 py-3">
          <img src="/perfect-water-valve-logo.png" alt="Perfect Water Valve" className="h-8 object-contain" />
          <span className="text-white font-semibold text-sm">Perfect Water Valve</span>
        </div>

        <span className="text-3xl font-bold text-slate-400">=</span>

        {/* Result */}
        <div className="text-center">
          <div className="shimmer-text text-2xl md:text-3xl font-black tracking-tight">
            Perfect Synergy ✨
          </div>
        </div>
      </div>

      <p className="text-slate-400 text-center text-sm max-w-md">
        One call. Two problems solved. Zero regrets.{" "}
        <span className="text-slate-300">(Your CFO will think you're a genius.)</span>
      </p>
    </div>
  );
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroParallax = scrollY * 0.35;

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #060d1f 0%, #0a1628 30%, #0d1e38 70%, #060d1f 100%)" }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4">
        <div className="glass-card rounded-full px-6 py-2.5 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#29b6f6" }} />
          <span className="text-sm font-semibold text-white tracking-wide">Perfect Synergy Partners</span>
          <div className="w-2 h-2 rounded-full animate-pulse delay-500" style={{ background: "#4dd0e1" }} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        {/* Background hero image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero.png)",
            transform: `translateY(${heroParallax}px)`,
            filter: "brightness(0.4) saturate(1.2)",
          }}
        />
        <div className="hero-gradient absolute inset-0" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + (i % 4)}px`,
                height: `${2 + (i % 4)}px`,
                background: i % 3 === 0 ? "#29b6f6" : i % 3 === 1 ? "#4dd0e1" : "#e6c74a",
                left: `${5 + (i * 8.3)}%`,
                top: `${15 + (i * 5.7) % 60}%`,
                opacity: 0.3 + (i % 5) * 0.1,
                animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="animate-fade-in flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(41,182,246,0.15)", border: "1px solid rgba(41,182,246,0.35)", color: "#29b6f6" }}>
              <span>🏨</span> For Commercial Property Owners <span>💧</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="animate-slide-up text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-4 text-white">
            What a{" "}
            <span className="shimmer-text">Perfect</span>
            <br />
            <span className="shimmer-text">Synergy.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-slide-up delay-200 text-xl md:text-2xl text-slate-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            You already have a parking problem.<br />
            <span className="text-slate-200 font-medium">Turns out, you've got a water bill problem too.</span>
          </p>

          <p className="animate-slide-up delay-300 text-base text-slate-400 mb-10 italic">
            Don't worry — we've got both. You're welcome. 😎
          </p>

          {/* CTA buttons */}
          <div className="animate-slide-up delay-400 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://perfectparking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg, #1565BL, #1e88e5 0%, #29b6f6 100%)", background: "linear-gradient(135deg, #1565c0, #29b6f6)" }}
            >
              🚗 Turn Parking into Profits
            </a>
            <a
              href="https://perfectwatervalve.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all duration-300 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #00838f, #4dd0e1)", color: "white" }}
            >
              💧 Stop Paying for Air in Your Water
            </a>
          </div>

          {/* Scroll hint */}
          <div className="animate-fade-in delay-800 mt-16 flex flex-col items-center gap-2 opacity-50">
            <span className="text-xs text-slate-400 uppercase tracking-widest">Scroll down, it gets better</span>
            <div className="w-0.5 h-8 mx-auto rounded-full" style={{ background: "linear-gradient(to bottom, rgba(41,182,246,0.6), transparent)" }} />
          </div>
        </div>
      </section>

      {/* The Scene */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <div className="text-center mb-10 animate-slide-up">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#4dd0e1" }}>
            Picture this
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            The <span className="gold-text">Perfect</span> Property
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm">
            Grand fountain out front. Underground valet. Pool in the back. Manicured lawns with sprinklers going. 
            <br />That's <em>a lot</em> of water and parking to manage.
          </p>
        </div>
        <AnimatedScene />
        <p className="text-center text-xs text-slate-500 mt-4 italic">
          "Sir, your car is parked, your water bill dropped 24%, and we didn't even break a sweat." — A Perfect Synergy property manager, probably
        </p>
      </section>

      {/* Company cards */}
      <section className="px-4 py-16 max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#29b6f6" }}>
            Our companies
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Two solutions. <span className="shimmer-text">Zero excuses.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <CompanyCard
            name="Perfect Parking"
            tagline="Managed and Monetize Your Parking"
            secondTagline="We turn parking into profits"
            logo="/perfect-parking-logo.webp"
            logoAlt="Perfect Parking"
            href="https://perfectparking.com"
            email="info@perfectparking.com"
            accentColor="#29b6f6"
            delay={100}
          />
          <CompanyCard
            name="Perfect Water Valve"
            tagline="Don't Pay for Air in Your Water"
            secondTagline="Save a minimum 15% on your water bill — that's $10,000+ back in your pocket."
            logo="/perfect-water-valve-logo.png"
            logoAlt="Perfect Water Valve"
            href="https://perfectwatervalve.com"
            email="info@perfectwatervalve.com"
            accentColor="#4dd0e1"
            delay={200}
          />
        </div>
      </section>

      {/* The pitch */}
      <section className="px-4 py-16 max-w-3xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-8 md:p-12 animate-slide-up animate-pulse-glow">
          <div className="text-5xl mb-6">😏</div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6 leading-snug">
            "Great news — we optimized your parking."
            <br />
            <span className="text-slate-400 text-xl font-normal italic mt-2 block">
              (casual pause)
            </span>
            "Oh — and by the way... you know we do water valves too, right?"
          </h2>
          <p className="text-slate-300 text-base mb-4">
            That client just saved <span className="gold-text font-bold">a minimum 15% on their water bill</span> — we're talking <span className="gold-text font-bold">$10,000+</span> — before they even knew they had a problem.
          </p>
          <p className="text-slate-500 text-sm italic">
            That's not upselling. That's just being a really, really good partner.
          </p>
        </div>
      </section>

      {/* The equation */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#e6c74a" }}>
              The math checks out
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white">The Perfect Synergy Equation</h2>
          </div>
          <SynergyEquation />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-500 text-sm mb-4">
            Perfect Synergy Partners — Making commercial properties run smoother, one parking spot and water valve at a time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="https://perfectparking.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              perfectparking.com
            </a>
            <span className="text-slate-600">·</span>
            <a href="https://perfectwatervalve.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              perfectwatervalve.com
            </a>
            <span className="text-slate-600">·</span>
            <a href="mailto:info@perfectparking.com" className="text-slate-400 hover:text-blue-400 transition-colors">
              info@perfectparking.com
            </a>
            <span className="text-slate-600">·</span>
            <a href="mailto:info@perfectwatervalve.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
              info@perfectwatervalve.com
            </a>
          </div>
          <p className="text-slate-600 text-xs mt-6">
            © {new Date().getFullYear()} Perfect Synergy Partners. All rights reserved. No parking spots were harmed.
          </p>
        </div>
      </footer>
    </div>
  );
}
