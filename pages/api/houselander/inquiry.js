import nodemailer from 'nodemailer';

const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const body = req.body;
  const name = clean(body.name, 100),
    email = clean(body.email, 160),
    phone = clean(body.phone, 30),
    arrival = clean(body.arrival, 10),
    departure = clean(body.departure, 10);
  if (body.website || !name || !email || !phone || !arrival || !departure)
    return Response.json(
      { error: 'Please complete all fields.' },
      { status: 400 },
    );
  if (Date.now() - Number(body.startedAt) < 1800)
    return Response.json(
      { error: 'Please take a moment and try again.' },
      { status: 400 },
    );
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    phone.replace(/\D/g, '').length < 10
  )
    return Response.json(
      { error: 'Please check your contact details.' },
      { status: 400 },
    );
  const a = new Date(`${arrival}T12:00:00`),
    d = new Date(`${departure}T12:00:00`),
    nights = Math.round((d - a) / 86400000);
  if (
    !Number.isFinite(nights) ||
    nights < 3 ||
    arrival < new Date().toISOString().slice(0, 10)
  )
    return Response.json(
      { error: 'Please choose valid dates with a three-night minimum.' },
      { status: 400 },
    );
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.RENTAL_NOTIFICATION_EMAIL
  ) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_PORT) === '465',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.RENTAL_NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `Outer Banks inquiry — ${arrival} to ${departure}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nArrival: ${arrival}\nDeparture: ${departure}\nNights: ${nights}\nSource: ${clean(body.source, 80)}\nUTM: ${JSON.stringify(body.utm || {})}`,
    });
  }
  return res.status(200).json({
    success: true,
    redirectUrl: process.env.PROPERTY_AVAILABILITY_URL || null,
  });
}
