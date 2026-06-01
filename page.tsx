import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background:
            'radial-gradient(ellipse 60% 50% at 70% 40%, rgba(232,197,71,0.07) 0%, transparent 70%), var(--primary)',
          paddingTop: 'var(--nav-height)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* decorative bg text */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            right: '-5%',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(8rem, 20vw, 16rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.02)',
            userSelect: 'none',
            lineHeight: 1,
          }}
        >
          LUCIDO
        </span>

        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <div className="animate-fade-up" style={{ marginBottom: '1rem' }}>
              <span className="glow-dot" style={{ marginRight: '0.5rem' }} />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}
              >
                Available for opportunities
              </span>
            </div>

            <h1
              className="animate-fade-up delay-1"
              style={{ marginBottom: '1.25rem', lineHeight: 1.1 }}
            >
              Hi, I&apos;m{' '}
              <span style={{ color: 'var(--gold)' }}>Lucido</span>
              <br />
              <span style={{ fontStyle: 'italic', fontSize: '0.85em', color: 'var(--text-muted)' }}>
                Developer &amp; Creator
              </span>
            </h1>

            <p
              className="animate-fade-up delay-2"
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
                maxWidth: '520px',
              }}
            >
              I craft beautiful, functional digital experiences. Passionate about
              clean code, thoughtful design, and continuous learning.
            </p>

            <div
              className="animate-fade-up delay-3"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Link href="/projects" className="btn btn-primary">
                View My Work →
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: 'var(--text-dim)',
              textTransform: 'uppercase',
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, var(--gold), transparent)',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Navigate</span>
            <h2>Explore My Portfolio</h2>
          </div>

          <div className="grid-3">
            {[
              { href: '/about',        emoji: '👤', title: 'About Me',        desc: 'Who I am, my story and values' },
              { href: '/skills',       emoji: '⚡', title: 'Skills',          desc: 'Technologies and tools I use' },
              { href: '/projects',     emoji: '🚀', title: 'Projects',        desc: 'Things I have built' },
              { href: '/hobbies',      emoji: '🎨', title: 'Hobbies',         desc: 'What I do for fun' },
              { href: '/education',    emoji: '🎓', title: 'Education',       desc: 'My academic background' },
              { href: '/achievements', emoji: '🏆', title: 'Achievements',    desc: 'Awards and recognitions' },
              { href: '/resume',       emoji: '📄', title: 'Resume / CV',     desc: 'My professional summary' },
              { href: '/contact',      emoji: '✉️', title: 'Contact',         desc: 'Let\'s work together' },
              { href: '/gallery',      emoji: '🖼️', title: 'Gallery',         desc: 'A visual collection' },
            ].map(({ href, emoji, title, desc }) => (
              <Link key={href} href={href} className="card" style={{ display: 'block' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{emoji}</div>
                <h4 style={{ marginBottom: '0.25rem' }}>{title}</h4>
                <p style={{ fontSize: '0.85rem' }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
