import nodemailer from 'nodemailer';

async function handleContact(req, res) {
  const { user, email, message } = req.body;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.NEXT_PUBLIC_USER,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  if (req.method === 'POST') {
    try {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: `${process.env.NEXT_PUBLIC_USER}`, // sender address
        replyTo: `${email}`,
        to: 'mcdonald.duane13@gmail.com', // receiver
        subject: `Message from ${email}`, // Subject line
        html: `<div>${user} at ${email}</div> 
      <p> Has submitted a new message: </p> 
      <p> ${message} </p> <br>
      
      `,
      });

      console.log('Message sent: %s', info.messageId);
      res.status(201).json(res.data);
    } catch (err) {
      res.status(500).json(err);
      console.error(err);
    }
  } else {
    res.status(405);
    res.end();
  }
}

export default handleContact;
