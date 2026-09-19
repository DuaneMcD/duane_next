'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/houselander.module.css';

const photos = [
  ['/houselander/living-room.jpg', 'Sunlit living room'],
  ['/houselander/ocean-living.jpg', 'Ocean-view living space'],
  ['/houselander/bedroom.jpg', 'Quiet bedroom retreat'],
  ['/houselander/pool.jpg', 'Private pool'],
  ['/houselander/bathroom.jpg', 'Spa-like bath'],
];

function getUtm() {
  if (typeof window === 'undefined') return {};

  const p = new URLSearchParams(window.location.search);
  return Object.fromEntries(
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']
      .filter(k => p.get(k))
      .map(k => [k, p.get(k)]),
  );
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

export default function HouseLanderClient() {
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    arrival: '',
    departure: '',
    website: '',
  });
  const [startedAt] = useState(() => Date.now());
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [utm] = useState(getUtm);
  const set = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async e => {
    e.preventDefault();
    setStatus({ type: 'idle', message: '' });
    if (form.name.trim().length < 2 || form.name.length > 100)
      return setStatus({ type: 'error', message: 'Please enter your name.' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return setStatus({
        type: 'error',
        message: 'Please enter a valid email.',
      });
    if (form.phone.replace(/\D/g, '').length < 10)
      return setStatus({
        type: 'error',
        message: 'Please enter a valid phone number.',
      });
    const a = new Date(`${form.arrival}T12:00:00`),
      d = new Date(`${form.departure}T12:00:00`),
      nights = Math.round((d - a) / 86400000);
    if (!form.arrival || form.arrival < today())
      return setStatus({
        type: 'error',
        message: 'Choose an arrival date from today onward.',
      });
    if (!form.departure || !Number.isFinite(nights) || nights < 3)
      return setStatus({
        type: 'error',
        message: 'This retreat has a three-night minimum.',
      });
    setStatus({ type: 'loading', message: 'Checking your dates…' });
    try {
      const res = await fetch('/api/houselander/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: 'House Lander',
          page: window.location.href,
          utm,
          startedAt,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Please try again.');
      if (data.redirectUrl) window.location.assign(data.redirectUrl);
      else
        setStatus({
          type: 'success',
          message:
            'Thank you — we received your dates and will be in touch shortly.',
        });
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    }
  };
  return (
    <main className={styles.lander}>
      <section className={styles.hero}>
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>OUTER BANKS · NORTH CAROLINA</p>
          <h1>A slower kind of luxury.</h1>
          <p>
            Morning light, salt air, and a private place to settle into the
            coast.
          </p>
          <a className={styles.button} href='#dates'>
            See Available Dates <span>→</span>
          </a>
        </div>
      </section>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>THE HOUSE</p>
        <h2>Space to exhale.</h2>
        <p>
          Designed for long mornings and easy evenings, this private retreat
          brings the best of the Outer Banks close: wide beaches, warm water,
          and room for the people you came to be with.
        </p>
        <div className={styles.details}>
          <span>Private retreat</span>
          <span>Three-night minimum</span>
          <span>From $1,000 / night</span>
        </div>
      </section>
      <section className={styles.gallery}>
        <div className={styles.galleryCopy}>
          <p className={styles.eyebrow}>A LITTLE PREVIEW</p>
          <h2>Come for the view. Stay for the feeling.</h2>
        </div>
        <div className={styles.carousel}>
          <Image
            src={photos[index][0]}
            alt={photos[index][1]}
            fill
            sizes='(max-width: 768px) 100vw, 60vw'
            quality={85}
            className={styles.carouselImage}
          />

          <button
            type='button'
            className={`${styles.carouselButton} ${styles.previousButton}`}
            aria-label='Previous photo'
            onClick={() =>
              setIndex((index + photos.length - 1) % photos.length)
            }>
            <span aria-hidden='true'>‹</span>
          </button>

          <button
            type='button'
            className={`${styles.carouselButton} ${styles.nextButton}`}
            aria-label='Next photo'
            onClick={() => setIndex((index + 1) % photos.length)}>
            <span aria-hidden='true'>›</span>
          </button>

          <p className={styles.carouselCaption}>
            {photos[index][1]} · {index + 1} / {photos.length}
          </p>
        </div>
      </section>
      <section className={styles.formSection} id='dates'>
        <div>
          <p className={styles.eyebrow}>SEE WHEN THE COAST IS CALLING</p>
          <h2>Find your dates.</h2>
          <p>
            Tell us a little about your stay and we’ll show you current
            availability for this Outer Banks retreat.
          </p>
        </div>
        <form className={styles.form} onSubmit={submit} noValidate>
          <label>
            <span>Your name</span>
            <input
              name='name'
              value={form.name}
              onChange={set}
              maxLength={100}
              required
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={set}
              maxLength={160}
              required
            />
          </label>
          <label>
            <span>Phone</span>
            <input
              type='tel'
              name='phone'
              value={form.phone}
              onChange={set}
              maxLength={30}
              required
            />
          </label>
          <div className={styles.dateRow}>
            <label>
              <span>Preferred Arrival</span>
              <input
                type='date'
                name='arrival'
                min={today()}
                value={form.arrival}
                onChange={set}
                required
              />
            </label>
            <label>
              <span>Preferred Departure</span>
              <input
                type='date'
                name='departure'
                min={form.arrival || today()}
                value={form.departure}
                onChange={set}
                required
              />
            </label>
          </div>
          <label className={styles.honeypot} aria-hidden='true'>
            <span>Website</span>
            <input
              name='website'
              tabIndex={-1}
              autoComplete='off'
              value={form.website}
              onChange={set}
            />
          </label>
          <button
            className={styles.button}
            disabled={status.type === 'loading'}>
            See Available Dates <span>→</span>
          </button>
          {status.message && (
            <p
              className={status.type === 'error' ? styles.error : styles.notice}
              role='status'>
              {status.message}
            </p>
          )}
          <small>
            Three-night minimum. Your information is used to assist with your
            stay and will not reserve the property.
          </small>
        </form>
      </section>
      <footer className={styles.footer}>
        PRIVATE OUTER BANKS RETREAT <span>·</span> A SLOWER KIND OF LUXURY
      </footer>
    </main>
  );
}
