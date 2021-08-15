const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(PORT, () => console.log(`Server Running at port: ${PORT}`));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zachspiel1122@gmail.com',
    pass: 'yzxklivlividkuou',
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: 'zachspiel1122@gmail.com',
    subject: 'Message recieved from Continental Weather Service Website!',
    html: `<p>Message from: ${name}</p>
            <p>${name}'s email: ${email}</p>
            <p>Message: ${message}</p>
            <img src="cid:CWS@logo.ee" style="width:55px;height:55px;margin-left:auto'margin-right:auto;"/>
            `,
    attachments: [
      {
        filename: 'favicon.jpg',
        path: path.join(__dirname, '..', 'public', 'images', 'favicon.jpg'),
        cid: 'CWS@logo.ee',
      },
    ],
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log('Message cannot be sent');
      res.json({ status: 'ERROR' });
    } else {
      console.log('Message sent');
      res.json({ status: 'Message Sent' });
    }
  });
});
