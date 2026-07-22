import Link from 'next/link';

export default function ChefFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-mark">Dinner,<br />properly personal.</div>
          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="footer-nav">
              <li><Link href="/chef">Welcome</Link></li>
              <li><Link href="/chef/about">About</Link></li>
              <li><Link href="/chef/services">Services</Link></li>
              <li><Link href="/chef/booking">Booking / FAQ</Link></li>
              <li><Link href="/chef/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <p className="fine-print">Email and phone<br />to be added before launch.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© <span data-year>2026</span> Chef Duane</span>
          <span>Private dining · service area to be confirmed</span>
        </div>
      </div>
      <span className="chat-preview" title="Chat-to-text integration pending">Chat / text · coming soon</span>
    </footer>
  );
}