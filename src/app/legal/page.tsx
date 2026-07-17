import styles from '../page.module.css'

export const metadata = {
  title: 'Privacy & Terms — Greg',
}

export default function LegalPage() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.logo}>Greg</span>
          <a href="/" className={styles.navCta}>Back to Greg</a>
        </div>
      </nav>

      <section className={styles.section} style={{ paddingTop: '80px' }}>
        <div className={styles.container} style={{ maxWidth: '720px' }}>

          <h1 className={styles.sectionTitle}>Privacy Policy</h1>
          <p className={styles.sectionSub} style={{ marginBottom: '1.5rem' }}>Last updated: July 2026</p>

          <div className={styles.notIncluded} style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>What We Collect</h3>
            <p>When you purchase Greg and go through the intake process, we collect: your name, email address, and the life context you share with us (goals, projects, people, rhythms) to configure your agent. This intake information is used solely to build and personalize your Greg installation.</p>
          </div>

          <div className={styles.notIncluded} style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>How Greg Works — Your Data Stays Yours</h3>
            <p>Greg runs using your own Anthropic API key and is installed on your own machine or infrastructure. Your ongoing conversations with Greg are processed by Anthropic&apos;s Claude API under your account. Micro Titan LLC does not store, access, or retain your ongoing Greg conversations. Your data stays on your machine.</p>
          </div>

          <div className={styles.notIncluded} style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Payment</h3>
            <p>Payments are processed by Stripe. We receive a payment confirmation and your email address for support purposes. We do not store your card number or financial information.</p>
          </div>

          <div className={styles.notIncluded} style={{ textAlign: 'left', marginBottom: '3rem' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Contact & Deletion</h3>
            <p>To request deletion of your intake data or ask any privacy questions, email <a href="mailto:support@micro-titan.com" style={{ color: 'inherit', textDecoration: 'underline' }}>support@micro-titan.com</a>. We will respond within 30 days.</p>
          </div>

          <h1 className={styles.sectionTitle}>Terms of Service</h1>
          <p className={styles.sectionSub} style={{ marginBottom: '1.5rem' }}>Last updated: July 2026</p>

          <div className={styles.notIncluded} style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>1. The Service</h3>
            <p>Micro Titan LLC (&ldquo;we,&rdquo; &ldquo;us&rdquo;) provides Greg: a personalized AI agent setup and configuration service. The $500 fee covers an intake call, installation, configuration, and 30 days of email support. Greg is not a subscription — it is a one-time setup.</p>
          </div>

          <div className={styles.notIncluded} style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>2. Refund Policy</h3>
            <p>Refunds are available if requested before your intake call is scheduled. Once setup has begun, the fee is non-refundable. To request a refund, contact <a href="mailto:support@micro-titan.com" style={{ color: 'inherit', textDecoration: 'underline' }}>support@micro-titan.com</a> within 48 hours of payment.</p>
          </div>

          <div className={styles.notIncluded} style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>3. AI Disclaimer</h3>
            <p>Greg is powered by Anthropic&apos;s Claude AI. AI outputs are probabilistic and may be incomplete, incorrect, or outdated. You are responsible for reviewing and acting on any information Greg provides. Micro Titan LLC is not liable for decisions you make based on Greg&apos;s outputs.</p>
          </div>

          <div className={styles.notIncluded} style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>4. Your Responsibilities</h3>
            <p>You are responsible for maintaining your Anthropic API key and any infrastructure costs associated with running Greg. You agree not to use Greg for illegal purposes or to automate actions that violate third-party terms of service.</p>
          </div>

          <div className={styles.notIncluded} style={{ textAlign: 'left', marginBottom: '3rem' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>5. Contact</h3>
            <p><a href="mailto:support@micro-titan.com" style={{ color: 'inherit', textDecoration: 'underline' }}>support@micro-titan.com</a> &bull; Micro Titan LLC</p>
          </div>

        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>Greg by <strong>Micro Titan LLC</strong> &bull; <a href="mailto:support@micro-titan.com" className={styles.footerLink}>support@micro-titan.com</a></p>
        </div>
      </footer>
    </main>
  )
}
