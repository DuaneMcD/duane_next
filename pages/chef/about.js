import Link from 'next/link';
import ChefLayout from '../../components/chef/Layout';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "url": "https://duanemcdonald.com/chef/about",
  "name": "About Chef Duane",
  "mainEntity": { "@type": "Person", "name": "Chef Duane", "jobTitle": "Private Chef" }
};

export default function ChefAbout() {
  return (
    <ChefLayout
      title="About Chef Duane | A Personal Approach to Private Dining"
      description="Meet Chef Duane and learn about the personal, straightforward approach behind each private dining experience for groups of up to 12."
      canonical="/chef/about"
      ogType="profile"
      ogTitle="About Chef Duane | Private Dining"
      ogDescription="A personal, straightforward approach to private dining for local families and intimate groups."
      jsonLd={jsonLd}
    >
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="eyebrow">About</p>
            <h1>A cook at your table.</h1>
            <p className="lede">Private dining is personal. The menu matters, but so do the room, the rhythm and the people who came to share it.</p>
          </div>
          <aside className="page-hero-note">Biography placeholder<br /><br />Add Duane's real training, kitchen history, food philosophy and local connection before launch.</aside>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="photo-placeholder" role="img" aria-label="Placeholder for a portrait of Chef Duane">
            <span>Chef portrait / Google Photos selection</span>
          </div>
          <div>
            <p className="eyebrow">The honest introduction</p>
            <h2>Let the work speak clearly.</h2>
            <p className="lede">Chef Duane creates private meals for local families and groups of up to 12.</p>
            <p>The final story belongs here: where Duane learned to cook, what shaped his point of view, why private dining matters to him and what guests can expect when he enters their home.</p>
            <p>For now, this page deliberately avoids invented credentials and dramatic origin stories. What it can say with confidence is that each booking begins with a conversation and is shaped around the actual people gathering.</p>
          </div>
        </div>
      </section>

      <div className="section dark">
        <div className="wrap">
          <blockquote className="quote">&ldquo;The aim is not to perform at the table. It is to make the table feel complete.&rdquo;</blockquote>
          <p className="fine-print">Draft brand statement&mdash;not a customer testimonial. Review with Duane before launch.</p>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div><p className="eyebrow">Working principles</p><h2>Refined, not rigid.</h2></div>
            <p>The visual language may have a sharp edge. The hospitality should not. Guests should feel looked after, hosts should know what happens next and the food should suit the occasion rather than chase fashion.</p>
          </div>
          <ul className="facts">
            <li><strong>Up to 12</strong><span>Guests per booking</span></li>
            <li><strong>One table</strong><span>Planned around you</span></li>
            <li><strong>Clear terms</strong><span>Scope and price before confirmation</span></li>
          </ul>
        </div>
      </section>

      <section className="section red">
        <div className="wrap section-heading">
          <div><p className="eyebrow">Next</p><h2>Bring the occasion.</h2></div>
          <div>
            <p>Share the rough plan. Chef Duane can help shape the rest once availability and service area are confirmed.</p>
            <div className="button-row"><Link className="button" href="/chef/booking">Make an enquiry</Link></div>
          </div>
        </div>
      </section>
    </ChefLayout>
  );
}