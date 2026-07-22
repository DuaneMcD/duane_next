import Link from 'next/link';
import ChefLayout from '../../components/chef/Layout';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Chef Duane",
  "url": "https://duanemcdonald.com/chef/",
  "description": "Private chef services for local families and groups of up to 12.",
  "publisher": { "@type": "Person", "name": "Chef Duane" }
};

export default function ChefHome() {
  return (
    <ChefLayout
      title="Chef Duane | Private Dining for Families & Groups"
      description="Private chef experiences for local families and intimate groups of up to 12, thoughtfully planned and cooked in your home."
      canonical="/chef"
      ogTitle="Chef Duane | Private Dining for Families & Groups"
      ogDescription="Personal, considered private dining for local families and groups of up to 12."
      jsonLd={jsonLd}
    >
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Private chef · tables of up to 12</p>
            <h1>Dinner, with intent.</h1>
            <p className="lede">A private meal should feel generous, precise and entirely yours—not like a restaurant transplanted into the living room.</p>
            <div className="button-row">
              <Link className="button" href="/chef/booking">Plan your table</Link>
              <Link className="button alt" href="/chef/services">See the services</Link>
            </div>
          </div>
          <aside className="hero-aside" aria-label="Service summary">
            <span className="frame-number">12</span>
            <p>Local families · private groups · gatherings at home<br /><br /><strong>Service area:</strong> To be confirmed</p>
          </aside>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="wrap"><p>GOOD FOOD / SHARP DETAILS / NO THEATRE FOR THE SAKE OF IT / YOUR TABLE / YOUR PEOPLE /</p></div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div><p className="eyebrow">The proposition</p><h2>Formal enough to matter. Relaxed enough to enjoy.</h2></div>
            <p>Chef Duane plans, prepares and serves an occasion around the people at your table. The approach is direct: listen well, cook thoughtfully and let dinner feel like dinner.</p>
          </div>
          <div className="cards">
            <article className="card">
              <span className="card-index">01 / INTIMATE</span>
              <h3>Private dinners</h3>
              <p>A considered menu and in-home service for a birthday, anniversary, reunion or evening worth marking.</p>
              <Link href="/chef/services#private-dinners">Explore private dinners</Link>
            </article>
            <article className="card">
              <span className="card-index">02 / GENEROUS</span>
              <h3>Family tables</h3>
              <p>Food made for sharing, lingering and bringing everyone together—without putting the host to work.</p>
              <Link href="/chef/services#family-tables">Explore family tables</Link>
            </article>
            <article className="card">
              <span className="card-index">03 / YOURS</span>
              <h3>Bespoke occasions</h3>
              <p>A flexible starting point for small celebrations and ideas that do not fit neatly into a package.</p>
              <Link href="/chef/services#bespoke">Explore bespoke occasions</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap split">
          <div className="photo-placeholder" role="img" aria-label="Placeholder for an original photo of Chef Duane cooking">
            <span>Original kitchen portrait goes here</span>
          </div>
          <div>
            <p className="eyebrow">Meet Chef Duane</p>
            <h2>The person at the stove.</h2>
            <p className="lede">No invented legend. No inflated biography. Just an introduction to Duane's point of view, experience and way of working—once those details are ready to tell.</p>
            <p>This first draft leaves room for a real story in Duane's own words. Until then, the promise is simple: personal attention, clear communication and food shaped around the occasion.</p>
            <div className="button-row">
              <Link className="button" href="/chef/about">Read the draft story</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2>From first note to final plate.</h2>
          <div className="process">
            <article><h3>Enquire</h3><p>Share your date, group size, location and what you have in mind.</p></article>
            <article><h3>Shape</h3><p>Discuss the occasion, preferences, dietary needs and practical details.</p></article>
            <article><h3>Confirm</h3><p>Approve the written proposal, menu, price and booking terms.</p></article>
            <article><h3>Gather</h3><p>Welcome your people. Chef Duane takes care of the agreed service.</p></article>
          </div>
        </div>
      </section>

      <section className="section red">
        <div className="wrap section-heading">
          <div><p className="eyebrow">Your table is waiting</p><h2>Tell me what you're planning.</h2></div>
          <div>
            <p>Start with the date, number of guests and the reason you're gathering. If the idea is still rough, that is fine.</p>
            <div className="button-row"><Link className="button" href="/chef/booking">Start an enquiry</Link></div>
          </div>
        </div>
      </section>
    </ChefLayout>
  );
}