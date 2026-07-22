import Link from 'next/link';
import ChefLayout from '../../components/chef/Layout';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many guests can Chef Duane serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "The current service is intended for local families and private groups of up to 12." }
    },
    {
      "@type": "Question",
      "name": "How is pricing handled?",
      "acceptedAnswer": { "@type": "Answer", "text": "Final pricing will be provided in a written proposal after the occasion, guest count, menu direction, location and service needs are understood." }
    },
    {
      "@type": "Question",
      "name": "Can dietary requirements be accommodated?",
      "acceptedAnswer": { "@type": "Answer", "text": "Dietary needs should be disclosed during the enquiry. Chef Duane will confirm what can be accommodated before a booking is accepted." }
    }
  ]
};

export default function ChefBooking() {
  return (
    <ChefLayout
      title="Booking & Private Chef FAQ | Chef Duane"
      description="Start a private chef enquiry with Chef Duane and find answers about group size, menus, dietary needs, pricing and booking."
      canonical="/chef/booking"
      ogTitle="Booking & Private Chef FAQ | Chef Duane"
      ogDescription="Enquire about a private meal for up to 12 and review the booking FAQ."
      jsonLd={jsonLd}
    >
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div>
            <p className="eyebrow">Booking</p>
            <h1>Give me the rough plan.</h1>
            <p className="lede">A date, a place, a guest count and a reason to gather are enough to begin.</p>
          </div>
          <aside className="page-hero-note">Enquiry form preview<br /><br />This draft does not transmit or store form data.</aside>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div><p className="eyebrow">Enquiry</p><h2>Start the conversation.</h2></div>
            <p>Complete this preview to see the intended booking experience. Submission will be connected only after a secure form provider and notification email are selected.</p>
          </div>
          <form className="form-preview" data-preview-form>
            <p className="preview-notice"><strong>Draft mode:</strong> this form cannot submit. No information entered here is sent or saved.</p>
            <div className="form-grid">
              <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" /></div>
              <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" /></div>
              <div className="field"><label htmlFor="date">Preferred date</label><input id="date" name="date" type="date" /></div>
              <div className="field"><label htmlFor="guests">Number of guests</label>
                <select id="guests" name="guests">
                  <option value="">Choose one</option>
                  <option>2&ndash;4</option>
                  <option>5&ndash;8</option>
                  <option>9&ndash;12</option>
                </select>
              </div>
              <div className="field"><label htmlFor="location">Town / neighbourhood</label><input id="location" name="location" autoComplete="address-level2" placeholder="Service area to be checked" /></div>
              <div className="field"><label htmlFor="occasion">Occasion</label><input id="occasion" name="occasion" placeholder="Birthday, family dinner, just because&hellip;" /></div>
              <div className="field full"><label htmlFor="details">What do you have in mind?</label>
                <textarea id="details" name="details" placeholder="Tell me about the gathering, menu direction, dietary needs and anything else that matters."></textarea>
              </div>
            </div>
            <div className="form-actions">
              <button className="button" type="submit" disabled>Send enquiry &middot; integration pending</button>
              <small>Before launch: connect secure form handling, spam protection, privacy notice and confirmation email.</small>
            </div>
          </form>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <p className="eyebrow">The path to dinner</p>
          <h2>Four clear moves.</h2>
          <div className="process">
            <article><h3>Enquiry</h3><p>The basic details arrive and availability is checked.</p></article>
            <article><h3>Consultation</h3><p>Menu direction, dietary needs, venue and service are discussed.</p></article>
            <article><h3>Proposal</h3><p>Scope, menu, terms, price and payment schedule are set out.</p></article>
            <article><h3>Confirmation</h3><p>The date is secured only under the agreed booking and payment terms.</p></article>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap">
          <p className="eyebrow">Frequently asked</p>
          <h2>Before you book.</h2>
          <div className="faq-list">
            <details><summary>How many guests can you serve?</summary><p>The current service is designed for local families and private groups of up to 12.</p></details>
            <details><summary>Where do you work?</summary><p>The service area has not been confirmed for this draft. Add the towns, radius or travel policy before publishing.</p></details>
            <details><summary>How much does it cost?</summary><p>Prices have not yet been set for the site. A final quote should reflect the guest count, menu, ingredients, venue, staffing, travel and agreed level of service. Exact minimums, deposits and payment terms will be added before bookings open.</p></details>
            <details><summary>Can you accommodate allergies or dietary requirements?</summary><p>Share all dietary needs and allergies in the enquiry. Chef Duane will discuss the brief and confirm what can be accommodated before accepting the booking. The final site should include a reviewed allergen statement.</p></details>
            <details><summary>Do you cook in my kitchen?</summary><p>The operating details still need Duane's confirmation. The final booking page should explain preparation, kitchen requirements, equipment access, arrival time, service and cleaning.</p></details>
            <details><summary>How do payment and cancellation work?</summary><p>Payment processing, deposits, cancellation terms and refunds are not active in this draft. They will be stated clearly before any payment is collected.</p></details>
            <details><summary>Is there a customer portal?</summary><p>A portal is planned but not connected. A first version could securely hold proposals, invoices, payment links, menus and booking details after the workflow is chosen.</p></details>
          </div>
        </div>
      </section>

      <section className="section red">
        <div className="wrap section-heading">
          <div><p className="eyebrow">Prefer email or text?</p><h2>Those channels are coming.</h2></div>
          <div>
            <p>Phone, email and chat-to-text details will appear here once the business contact channels are confirmed.</p>
            <div className="button-row"><Link className="button" href="/chef/contact">See contact options</Link></div>
          </div>
        </div>
      </section>
    </ChefLayout>
  );
}