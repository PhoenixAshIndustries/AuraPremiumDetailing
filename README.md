:root {
  --bg: #060713;
  --bg-soft: #0d1020;
  --panel: rgba(12, 17, 34, 0.72);
  --panel-strong: rgba(8, 12, 26, 0.88);
  --text: #eef4ff;
  --muted: #a8b4d1;
  --line: rgba(114, 182, 255, 0.18);
  --cyan: #23d7ff;
  --blue: #42a6ff;
  --violet: #ae7bff;
  --pink: #ff60ce;
  --glow: 0 0 0 1px rgba(79, 193, 255, 0.15), 0 0 40px rgba(38, 159, 255, 0.18);
  --radius: 24px;
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--text);
  background:
    radial-gradient(circle at top right, rgba(174, 123, 255, 0.24), transparent 22%),
    radial-gradient(circle at top left, rgba(35, 215, 255, 0.16), transparent 26%),
    linear-gradient(180deg, #03040a 0%, #060713 35%, #090d1e 100%);
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.5;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,.45), transparent),
    radial-gradient(1px 1px at 70% 10%, rgba(255,255,255,.35), transparent),
    radial-gradient(2px 2px at 80% 65%, rgba(255,255,255,.3), transparent),
    radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,.35), transparent);
  background-size: 320px 320px;
  pointer-events: none;
  opacity: .55;
}

img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }

.topbar, .section, .hero, .footer {
  width: min(1180px, calc(100% - 32px));
  margin-inline: auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 22px;
  margin-top: 14px;
  border: 1px solid var(--line);
  border-radius: 20px;
  backdrop-filter: blur(18px);
  background: rgba(7, 10, 22, 0.68);
  box-shadow: var(--glow);
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.brand img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.brand span,
.hero h1,
.section-heading h2,
.package-top h3,
.feature-card h3,
.form-card-head h3,
.addon-group h3,
.booking-box h4 {
  font-family: 'Orbitron', 'Inter', sans-serif;
}

.brand span {
  display: block;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.brand small { color: var(--muted); }

.nav {
  display: flex;
  gap: 22px;
  align-items: center;
}

.nav a {
  color: var(--muted);
  font-weight: 600;
}

.nav a:hover { color: var(--text); }
.menu-toggle { display: none; }

.hero {
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 34px;
  align-items: center;
  padding: 70px 0 42px;
}

.eyebrow {
  margin: 0 0 14px;
  text-transform: uppercase;
  letter-spacing: .18em;
  font-size: .78rem;
  color: var(--cyan);
  font-weight: 700;
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: .95;
  margin: 0 0 18px;
  text-shadow: 0 0 22px rgba(35, 215, 255, 0.16);
}

.hero-text,
.section-heading p,
.feature-card p,
.addon-note,
.booking-lead,
.small-note,
.footer span,
.package-card li,
.contact-form label,
.booking-box li {
  color: var(--muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 28px 0 30px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  border-radius: 999px;
  font-weight: 700;
  transition: .25s ease;
  border: 1px solid transparent;
}

.btn:hover { transform: translateY(-2px); }

.btn-primary {
  background: linear-gradient(135deg, var(--cyan), var(--blue));
  color: #04101a;
  box-shadow: 0 0 24px rgba(35, 215, 255, 0.28);
}

.btn-secondary {
  border-color: rgba(79, 193, 255, 0.28);
  background: rgba(14, 21, 42, 0.7);
}

.btn-wide { width: 100%; }

.hero-highlights,
.package-grid,
.feature-grid,
.contact-grid,
.addons-layout {
  display: grid;
  gap: 18px;
}

.hero-highlights { grid-template-columns: repeat(3, 1fr); }
.highlight-card,
.package-card,
.glass-panel {
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(14, 20, 42, 0.9), rgba(8, 11, 24, 0.84));
  border-radius: var(--radius);
  box-shadow: var(--glow);
}

.highlight-card {
  padding: 18px;
}

.highlight-card strong {
  display: block;
  margin-bottom: 4px;
}

.hero-visual {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid var(--line);
  box-shadow: 0 0 40px rgba(174, 123, 255, 0.18), 0 0 70px rgba(35, 215, 255, 0.12);
}

.hero-visual::after {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 35%;
  background: linear-gradient(180deg, transparent, rgba(5, 7, 15, .88));
}

.section {
  padding: 56px 0;
}

.section-heading {
  max-width: 780px;
  margin-bottom: 28px;
}
.narrow { max-width: 620px; }
.section-heading h2 {
  font-size: clamp(1.9rem, 3vw, 3rem);
  margin: 0 0 10px;
}

.package-grid { grid-template-columns: repeat(3, 1fr); }
.package-card {
  padding: 24px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.package-card.featured {
  transform: translateY(-6px);
  box-shadow: 0 0 0 1px rgba(35, 215, 255, 0.32), 0 0 45px rgba(35, 215, 255, 0.24);
}
.package-top { margin-bottom: 16px; }
.tag {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(35, 215, 255, 0.12);
  border: 1px solid rgba(35, 215, 255, 0.2);
  color: var(--cyan);
  font-size: .76rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.package-top h3 {
  margin: 14px 0 10px;
  font-size: 1.25rem;
}
.price {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text);
}
.package-card ul {
  padding-left: 18px;
  margin: 0 0 20px;
}
.package-card li + li { margin-top: 8px; }
.text-link {
  margin-top: auto;
  color: var(--cyan);
  font-weight: 700;
}

.addons-layout { grid-template-columns: repeat(2, 1fr); }
.glass-panel { padding: 24px; }
.addon-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(114, 182, 255, 0.12);
}
.addon-item:last-of-type { border-bottom: 0; }
.addon-item strong {
  font-size: 1.2rem;
  color: var(--cyan);
}

.feature-grid { grid-template-columns: repeat(3, 1fr); }
.feature-card { min-height: 100%; }
.feature-card h3 { margin-top: 0; }

.contact-grid { grid-template-columns: 1.05fr .95fr; align-items: start; }
.form-card, .booking-card { min-height: 100%; }
.form-card-head { margin-bottom: 20px; }
.form-card-head h3 { margin: 0 0 10px; }

.contact-form {
  display: grid;
  gap: 16px;
}

.contact-form label {
  display: grid;
  gap: 8px;
  font-size: .95rem;
  font-weight: 500;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(114, 182, 255, 0.18);
  background: rgba(5, 9, 20, 0.92);
  color: var(--text);
  font: inherit;
}
.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: 1px solid rgba(35, 215, 255, 0.5);
  box-shadow: 0 0 0 4px rgba(35, 215, 255, 0.08);
}

.booking-box {
  padding: 22px;
  border: 1px solid rgba(114, 182, 255, 0.12);
  border-radius: 20px;
  background: rgba(6, 9, 20, 0.62);
}
.booking-box + .booking-box { margin-top: 16px; }
.secondary-box ol { margin: 12px 0 0; padding-left: 20px; }
.secondary-box li + li { margin-top: 8px; }
code {
  background: rgba(255,255,255,0.08);
  border-radius: 8px;
  padding: 2px 6px;
}

.footer {
  text-align: center;
  padding: 24px 0 60px;
}
.footer img {
  width: 60px;
  margin: 0 auto 14px;
}
.footer p {
  margin: 0 0 6px;
  font-weight: 700;
}

@media (max-width: 980px) {
  .hero,
  .contact-grid,
  .addons-layout,
  .package-grid,
  .feature-grid,
  .hero-highlights {
    grid-template-columns: 1fr;
  }

  .hero { padding-top: 42px; }
  .package-card.featured { transform: none; }
  .nav {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    left: 0;
    display: none;
    flex-direction: column;
    padding: 18px;
    border-radius: 18px;
    background: rgba(7, 10, 22, 0.96);
    border: 1px solid var(--line);
  }
  .nav.open { display: flex; }
  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,.06);
    color: var(--text);
    border: 1px solid var(--line);
    border-radius: 12px;
    width: 46px;
    height: 46px;
    font-size: 1.2rem;
  }
}
