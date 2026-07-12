import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'jjkjkjkjkjkknmnmn',
  description: 'f===fsdhfdhkcbnbvnbksfhf',
};

export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh' }}>
      <nav style={{ background: '#262626', padding: '1rem 2rem', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>jjkjkjkjkjkknmnmn</h1>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>
      <section id="hero" style={{ background: 'linear-gradient(135deg, #262626 0%, #1e1b4b 100%)', color: 'white', padding: '6rem 2rem', textAlign: 'center', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', margin: '0 0 1rem' }}>Welcome to jjkjkjkjkjkknmnmn</h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>We provide professional services tailored to your needs.</p>
        <a href="#contact" style={{ background: 'white', color: '#262626', padding: '0.875rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '700', fontSize: '1rem' }}>Get Started Today</a>
      </section>
      <section id="about" style={{ padding: '5rem 2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111' }}>About Us</h2>
        <p style={{ color: '#555', lineHeight: 1.8, maxWidth: '700px', margin: '1rem auto 0' }}>We are a professional business dedicated to serving our clients with excellence.</p>
      </section>
      <footer style={{ background: '#111', color: '#aaa', textAlign: 'center', padding: '2rem' }}>
        <p>© 2026 jjkjkjkjkjkknmnmn. All rights reserved.</p>
      </footer>
    </main>
  );
}
