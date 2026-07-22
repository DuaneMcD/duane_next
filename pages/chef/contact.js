import Link from 'next/link';
import ChefLayout from '../../components/chef/Layout';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Chef Duane",
  "url": "https://duanemcdonald.com/chef/contact",
  "description": "Contact page for private chef enquiries for groups of up to 12.",
  "mainEntity": { "@type": "Person", "name": "Chef Duane", "jobTitle": "Private Chef" }
};

export default function ChefContact() {
  return (
    <ChefLayout
      title="Contact Chef Duane | Private Chef Enquiries"
      description="Contact Chef Duane about a private meal for a local family or group of up to 12. Share your date, location and occasion to begin."
      canonical="/chef/contact"
      ogTitle="Contact Chef Duane | Private Chef Enquiries"
      ogDescription="Begin a private dining conversation for a local family or group of up to 12."
      jsonLd={jsonLd}
    >
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Say what you have in mind.</h1>
            <p className="lede">No polished brief required. Send the date, location, number at the table and the shape of the occasion.</p>
          </div>
          <aside className="page-hero-note">Contact preview<br /><br />Email, phone and chat-to-text will be connected after Duane confirms the business channels.</aside>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Ways to talk</p>
            <h2>Direct, once connected.</h2>
            <p className="lede">The live site will make it easy to enquire without scattering your details across half a dozen systems.</p>
            <ul className="contact-list">
              <li><strong>Email</strong><span>Business address to be confirmed</span></li>
              <li><strong>Phone / text</strong><span>Business number to be confirmed</span></li>
              <li><strong>Chat-to-text</strong><span>Coming integration</span></li>
              <li><strong>Service area</strong><span>Local coverage to be defined</span></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Best first note</p>
            <h2>Five useful details.</h2>
            <ol className="contact-steps">
              <li>Preferred date or a few possible dates</li>
              <li>Town or neighbourhood</li>
              <li>Number of guests&mdash;up to 12</li>
              <li>The occasion and service you have in mind</li>
              <li>Known dietary requirements or allergies</li>
            </ol>
            <div className="button-row"><Link className="button" href="/chef/booking">Open enquiry preview</Link></div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="section-heading">
            <div><p className="eyebrow">Integrations</p><h2>Useful tools. No false buttons.</h2></div>
            <p>These functions are part of the brief, but none is active in this draft. They will only appear as working actions after secure services, business terms and notifications are tested.</p>
          </div>
          <div className="status-grid status-grid-four">
            <div className="status"><b>Enquiry form</b><span>Preview only</span></div>
            <div className="status"><b>Payment</b><span>Not connected</span></div>
            <div className="status"><b>Customer portal</b><span>Planned</span></div>
            <div className="status"><b>Email signup</b><span>Not connected</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div><p className="eyebrow">What happens next</p><h2>A reply, not a funnel.</h2></div>
            <p>Once contact handling is connected, the confirmation message and expected response time should be stated here. No response-time promise has been invented for this draft.</p>
          </div>
        </div>
      </section>

      <section className="section red">
        <div className="wrap section-heading">
          <div><p className="eyebrow">Not ready to enquire?</p><h2>See how the table takes shape.</h2></div>
          <div>
            <p>Read the service starting points and practical booking answers first.</p>
            <div className="button-row">
              <Link className="button" href="/chef/services">View services</Link>
              <Link className="button alt light-alt" href="/chef/booking#faq">Read the FAQ</Link>
            </div>
          </div>
        </div>
      </section>
    </ChefLayout>
  );
}