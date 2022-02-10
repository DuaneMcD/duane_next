// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import nodemailer from 'nodemailer';

const handleContact = (req, res) => {
  console.log(req.body);
  res.status(200).json('req.body');
};

export default handleContact;
