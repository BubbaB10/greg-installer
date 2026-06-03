import styles from './page.module.css'

const CTA_HREF = 'mailto:support@micro-titan.com?subject=Greg%20Setup'

const features = [
  {
    icon: '🧠',
    title: 'Remembers your context across sessions',
    desc: 'Greg writes everything important to memory files. Pick up any conversation exactly where you left off — even after restarts.',
  },
  {
    icon: '📬',
    title: 'Monitors your inbox and flags what matters',
    desc: 'The support agent triages email every 30 minutes. Urgent items bubble up. Noise stays buried.',
  },
  {
    icon: '⚙️',
    title: 'Runs agents in the background while you focus',
    desc: 'Security scans, bookkeeping, SEO publishing — all happening automatically while you run your business.',
  },
]

const packs = [
  { icon: '🔒', name: 'Security Agent', price: '$150', desc: 'Monitors your workspace for exposed credentials and vulnerabilities.' },
  { icon: '📚', name: 'Bookkeeper Agent', price: '$250', desc: 'Tracks expenses, reconciles Stripe, generates monthly reports.' },
  { icon: '🔍', name: 'SEO Agent', price: '$200', desc: 'Publishes keyword-targeted articles to your site 3x per week.' },
  { icon: '📧', name: 'Support Agent', price: '$150', desc: 'Triages your inbox and escalates only what needs you.' },
]

const steps = [
  { num: '1', text: 'Pay the setup fee' },
  { num: '2', text: 'Schedule a 30-minute call (or async via email)' },
  { num: '3', text: 'Greg walks you through install — live in under an hour' },
  { num: '4', text: 'Done' },
]

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ── Nav ── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.logo}>Greg</span>
          <a href={CTA_HREF} className={styles.navCta}>Get Set Up</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden />
        <div className={styles.container}>
          <div className={styles.badge}>AI Chief of Staff</div>
          <h1 className={styles.headline}>
            Meet Greg. Your<br />
            <span className={styles.accent}>AI Chief of Staff.</span>
          </h1>
          <p className={styles.subheadline}>
            A personal AI assistant that runs on your computer, connects to your Telegram,
            and actually remembers things. Built for entrepreneurs.
          </p>
          <div className={styles.heroCtas}>
            <a href={CTA_HREF} className={styles.ctaPrimary}>
              Get Set Up &rarr;
            </a>
            <a href="#pricing" className={styles.ctaSecondary}>
              See Pricing
            </a>
          </div>
          <p className={styles.heroNote}>
            Starter setup &mdash; $500 one-time &bull; Your API key, your data, your machine
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.section} id="features">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Greg actually does</h2>
          <p className={styles.sectionSub}>Not a chatbot. A capable operator that handles tasks while you focus.</p>
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

      {/* ── Pricing ── */}
      <section className={styles.section} id="pricing">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Pricing</h2>
          <p className={styles.sectionSub}>One-time fees. No subscriptions. Your Anthropic key, your costs.</p>

          {/* Starter card */}
          <div className={styles.starterCard}>
            <div className={styles.starterLeft}>
              <div className={styles.starterBadge}>Most Popular</div>
              <h3 className={styles.starterName}>Starter</h3>
              <p className={styles.starterDesc}>Full installation, personalized persona, basic memory + daily briefing, 30-day email support.</p>
            </div>
            <div className={styles.starterRight}>
              <div className={styles.starterPrice}>$500</div>
              <div className={styles.starterFreq}>one-time</div>
              <a href={CTA_HREF} className={styles.ctaPrimary}>Get Set Up &rarr;</a>
            </div>
          </div>

          {/* Agent packs */}
          <h3 className={styles.packsTitle}>Agent Packs — Add-ons</h3>
          <div className={styles.packsGrid}>
            {packs.map((p) => (
              <div key={p.name} className={styles.packCard}>
                <div className={styles.packHeader}>
                  <span className={styles.packIcon}>{p.icon}</span>
                  <div>
                    <div className={styles.packName}>{p.name}</div>
                    <div className={styles.packPrice}>{p.price} one-time</div>
                  </div>
                </div>
                <p className={styles.packDesc}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Not included */}
          <div className={styles.notIncluded}>
            <strong>Not included:</strong> Anthropic API costs (you pay Claude directly &mdash; typical usage is ~$5&ndash;20/month).
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.finalCta}>
        <div className={styles.finalGlow} aria-hidden />
        <div className={styles.container}>
          <h2 className={styles.finalTitle}>Ready to stop drowning in busywork?</h2>
          <p className={styles.finalSub}>Greg handles the noise. You handle the things only you can do.</p>
          <a href={CTA_HREF} className={styles.ctaPrimary}>
            Get Set Up &rarr;
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
          <p className={styles.footerNote}>Greg is powered by OpenClaw + Anthropic Claude. You bring your own API key. Your data stays on your machine.</p>
        </div>
      </footer>
    </main>
  )
}
