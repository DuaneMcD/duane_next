import Link from 'next/link';

export default function ChefHeader({ current }) {
  const pages = [
    { href: '/chef', label: 'Welcome' },
    { href: '/chef/about', label: 'About' },
    { href: '/chef/services', label: 'Services' },
    { href: '/chef/booking', label: 'Booking / FAQ' },
    { href: '/chef/contact', label: 'Start a conversation', cta: true },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/chef" className="wordmark" aria-label="Chef Duane, home">
          Chef Duane<small>Private dining</small>
        </Link>
        <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>Menu</button>
        <nav className="site-nav" id="site-nav" aria-label="Primary" data-nav>
          <ul>
            {pages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className={p.cta ? 'nav-cta' : undefined}
                  aria-current={current === p.href ? 'page' : undefined}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}