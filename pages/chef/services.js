import Link from 'next/link';
import ChefLayout from '../../components/chef/Layout';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Private Chef Services",
  "provider": { "@type": "Person", "name": "Chef Duane" },
  "audience": { "@type": "Audience", "audienceType": "Local families and private groups of up to 12" },
  "url": "https://duanemcdonald.com/chef/services"
};

export default function ChefServices() {
  return (
    <ChefLayout
      title="Private Chef Services | Chef Duane"
      description="Explore Chef Duane's private dinners, family tables and bespoke small occasions for local groups of up to 12."
      canonical="/chef/services"
      ogTitle="Private Chef Services | Chef Duane"
      ogDescription="Private dinners, generous family tables and bespoke occasions for up to 12."
      jsonLd={jsonLd}
    >
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="eyebrow">Services</p>
            <h1>One table. Several ways in.</h1>
            <p className="lede">Each format is a starting point, not a straitjacket. Final menus, inclusions and prices are quoted after the details are clear.</p>
          </div>
          <aside className="page-hero-note">Pricing placeholder<br /><br />Add minimum spend, per-person guidance, deposits, travel and any staffing costs before launch.</aside>
        </div>
      </section>

      <div className="section">
        <div className="wrap">
          <p className="eyebrow">Choose a starting point</p>
          <div className="service-list">
            <article className="service-item" id="private-dinners">
              <span className="num">01</span>
              <div><h2>Private dinners</h2><p>A paced meal in your home for an intimate celebration or a night you want to give proper attention.</p></div>
              <ul><li>For groups up to 12</li><li>Menu planned after consultation</li><li>Inclusions to be confirmed in proposal</li><li>Price quoted per occasion</li></ul>
            </article>
            <article className="service-item" id="family-tables">
              <span className="num">02</span>
              <div><h2>Family tables</h2><p>A more generous, shared style of service made for conversation, passing plates and keeping the host out of the kitchen.</p></div>
              <ul><li>For local families and private groups</li><li>Shared or family-style menu direction</li><li>Dietary requirements discussed first</li><li>Price quoted per occasion</li></ul>
            </article>
            <article className="service-item" id="bespoke">
              <span className="num">03</span>
              <div><h2>Bespoke occasions</h2><p>For a small gathering with a particular brief, unusual rhythm or idea that needs a more flexible conversation.</p></div>
              <ul><li>Scope agreed in writing</li><li>Feasibility based on venue and date</li><li>Optional extras to be defined</li><li>Custom proposal and price</li></ul>
            </article>
          </div>
        </div>
      </div>

      <section className="section dark">
        <div className="wrap">
          <div className="section-heading">
            <div><p className="eyebrow">What is included?</p><h2>No vague packages.</h2></div>
            <p>The final site should state exactly what each quote covers: menu planning, ingredient purchasing, preparation, in-home cooking, service, cleaning, staffing and travel. Until Duane confirms his operating model, none of those items is promised automatically.</p>
          </div>
          <div className="status-grid">
            <div className="status"><b>Menu</b><span>Confirmed in proposal</span></div>
            <div className="status"><b>Staffing</b><span>To be defined</span></div>
            <div className="status"><b>Cleanup</b><span>To be defined</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Food direction</p>
            <h2>Built around the room.</h2>
            <p className="lede">The right menu should account for the guests, the kitchen, the season, the dietary brief and the mood of the occasion.</p>
            <p>Sample menus can be added once Duane provides dishes that represent his actual work. They should inspire without pretending every ingredient or format is always available.</p>
          </div>
          <div className="photo-placeholder" role="img" aria-label="Placeholder for an original plated dish photograph">
            <span>Original food photograph goes here</span>
          </div>
        </div>
      </section>

      <section className="section red">
        <div className="wrap section-heading">
          <div><p className="eyebrow">Request a proposal</p><h2>Start with the essentials.</h2></div>
          <div>
            <p>Date, location, number of guests and the shape of the occasion. Dietary information can follow in the enquiry.</p>
            <div className="button-row"><Link className="button" href="/chef/booking">Plan your table</Link></div>
          </div>
        </div>
      </section>
    </ChefLayout>
  );
}