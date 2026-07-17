import styles from '../page.module.css'

export default function SuccessPage() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.logo}>Greg</span>
        </div>
      </nav>

      <section className={styles.hero} style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className={styles.heroGlow} aria-hidden />
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <div className={styles.badge}>Payment Confirmed</div>
          <h1 className={styles.headline} style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            You&apos;re all set.<br />
            <span className={styles.accent}>Welcome to Greg.</span>
          </h1>
          <p className={styles.subheadline}>
            We received your payment. You&apos;ll hear from us at{' '}
            <a href="mailto:support@micro-titan.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
              support@micro-titan.com
            </a>{' '}
            within 24 hours to schedule your intake call and get everything configured.
          </p>
          <p className={styles.heroNote}>Questions? support@micro-titan.com</p>
        </div>
      </section>
    </main>
  )
}
