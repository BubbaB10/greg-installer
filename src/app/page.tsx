import styles from './page.module.css'

const CTA_HREF = '/checkout'

const features = [
  {
    icon: '🧬',
    title: "Spec'd to your specific life",
    desc: "Before going live, we map your world — your projects, your people, your goals, your rhythms. Greg starts knowing your context, not a generic template.",
  },
  {
    icon: '⚙️',
    title: 'Works in the background while you focus',
    desc: 'Scheduled tasks, monitoring, reminders, research — all happening automatically based on what your life actually needs. Not what a generic product decided.',
  },
  {
    icon: '🧠',
    title: 'Remembers everything that matters',
    desc: 'Greg writes important context to memory files. Every conversation picks up exactly where the last one left off, even after restarts.',
  },
  {
    icon: '📬',
    title: 'Reaches you where you already are',
    desc: "Greg lives in Telegram. No new app to check, no dashboard to remember. It messages you. You message it back.",
  },
]

const examples = [
  { icon: '📅', name: 'Schedule & reminders', desc: 'Catches commitments from conversation and turns them into reminders before they slip.' },
  { icon: '📊', name: 'Business monitoring', desc: 'Watches MRR, flags anomalies, surfaces what needs attention.' },
  { icon: '🔍', name: 'Research & synthesis', desc: 'Deep-dives a topic and comes back with what you actually need to know.' },
  { icon: '📧', name: 'Inbox triage', desc: 'Monitors email, escalates only what needs you, buries noise.' },
]

const steps = [
  { num: '1', text: "Tell us about your life — your goals, projects, people, and rhythms" },
  { num: '2', text: "We build your Greg — spec'd to your specific world, not a template" },
  { num: '3', text: 'Go live in under an hour via a 30-minute call or async setup' },
  { num: '4', text: 'Greg handles the background. You handle what only you can do.' },
]

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ── Nav ── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.logo}>Greg</span>
          <a href={CTA_HREF} className={styles.navCta}>Get Your Greg</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden />
        <div className={styles.container}>
          <div className={styles.badge}>Personal AI Chief of Staff</div>
          <h1 className={styles.headline}>
            An assistant for<br />
            <span className={styles.accent}>however your life unfolds.</span>
          </h1>
          <p className={styles.subheadline}>
            Greg isn&apos;t a generic AI product. It&apos;s a personal assistant spec&apos;d to your specific life —
            your business, your family, your goals — and it works in the background so nothing slips through the cracks.
          </p>
          <div className={styles.heroCtas}>
            <a href={CTA_HREF} className={styles.ctaPrimary}>
              Get Your Greg &rarr;
            </a>
            <a href="#pricing" className={styles.ctaSecondary}>
              See Pricing
            </a>
          </div>
          <p className={styles.heroNote}>
            $500 one-time setup &mdash; personalized to you &bull; Your API key, your data, your machine
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.section} id="features">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What makes Greg different</h2>
          <p className={styles.sectionSub}>Not a chatbot. Not a template. A capable operator built around your actual life.</p>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.num} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                <p className={styles.stepText}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Examples ── */}
      <section className={styles.section} id="examples">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Greg can do for you</h2>
          <p className={styles.sectionSub}>Every Greg is different — built around what your life actually needs. Here are some examples.</p>
          <div className={styles.packsGrid}>
            {examples.map((e) => (
              <div key={e.name} className={styles.packCard}>
                <div className={styles.packHeader}>
                  <span className={styles.packIcon}>{e.icon}</span>
                  <div>
                    <div className={styles.packName}>{e.name}</div>
                  </div>
                </div>
                <p className={styles.packDesc}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className={styles.section} id="pricing">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Pricing</h2>
          <p className={styles.sectionSub}>One-time setup fee. No subscription. Personalized to you from day one.</p>

          <div className={styles.starterCard}>
            <div className={styles.starterLeft}>
              <div className={styles.starterBadge}>Get Your Greg</div>
              <h3 className={styles.starterName}>Full Setup</h3>
              <p className={styles.starterDesc}>Pre-launch intake call to map your life and goals. Full installation, personalized persona and memory, custom task configuration, and 30-day email support.</p>
            </div>
            <div className={styles.starterRight}>
              <div className={styles.starterPrice}>$500</div>
              <div className={styles.starterFreq}>one-time</div>
              <a href={CTA_HREF} className={styles.ctaPrimary}>Get Your Greg &rarr;</a>
            </div>
          </div>

          <div className={styles.notIncluded}>
            <strong>Not included:</strong> Anthropic API costs (you pay Claude directly &mdash; typical usage is ~$5&ndash;20/month). Additional specialized capabilities can be scoped and added after your initial setup.
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.finalCta}>
        <div className={styles.finalGlow} aria-hidden />
        <div className={styles.container}>
          <h2 className={styles.finalTitle}>Ready for an assistant who actually knows your life?</h2>
          <p className={styles.finalSub}>Greg handles the noise. You handle the things only you can do.</p>
          <a href={CTA_HREF} className={styles.ctaPrimary}>
            Get Your Greg &rarr;
          </a>
          <p className={styles.finalContact}>
            Questions? <a href="mailto:support@micro-titan.com" className={styles.emailLink}>support@micro-titan.com</a>
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>Greg by <strong>Micro Titan LLC</strong> &bull; <a href="mailto:support@micro-titan.com" className={styles.footerLink}>support@micro-titan.com</a></p>
          <p className={styles.footerNote}>
            Greg is powered by NanoClaw + Anthropic Claude. You bring your own API key. Your data stays on your machine. &bull;{' '}
            <a href="/legal" className={styles.footerLink}>Privacy &amp; Terms</a>
          </p>
        </div>
      </footer>
    </main>
  )
}
