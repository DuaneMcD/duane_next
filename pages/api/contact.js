import nodemailer from 'nodemailer';

async function handleContact(req, res) {
  const { user, email, message } = req.body;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `${email}`, // sender address
      to: 'mcdonald.duane13@gmail.com', // receiver
      subject: 'Message from DuaneMcDonald.com', // Subject line
      html: `<div>${user}</div> 
      <p> Has submitted a new message: </p> 
      <p> ${message} </p> <br>
      
      `,
    });

    console.log('Message sent: %s', info.messageId);
    res.status(201).json(res.data);
  } catch (err) {
    console.error(err);
  }
}

export default handleContact;
