// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export const sendQuoteRequest = async (req, res) => {
  const {
    name,
    email,
    phone,
    carYear,
    carMake,
    carModel,
    carTrim,
    service,
    comments,
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const emailRequest = await transporter.sendMail({
      from: email,
      to: 'hello@shaunshines.com',
      subject: `Quote request for a ${carMake} ${carModel} ${service} `,
      html: `<p>You have a new quote request from ${name}. </p><br>
      <p>Phone: ${phone} </p><br>
      <p>vehicle: ${carYear} ${carMake} ${carModel} ${carTrim} </p><br>
      <p>Service requested: ${service} </p><br>
      <p>comments: ${comments} </p><br>
      `,
    });
    console.log('Message Sent!', emailRequest.messageid);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};

export default sendQuoteRequest;
