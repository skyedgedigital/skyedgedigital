import { IPotentialClients } from '@/interfaces/PotentialCLients.interface';
import nodemailer from 'nodemailer';

const sendMail = async (
  subject: string,
  messages: IPotentialClients,
  sender: string
): Promise<Boolean> => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Gmail SMTP server
    port: 465, // TLS port
    secure: true, // Use TLS
    auth: {
      user:
        process.env.NODE_ENV === 'production'
          ? process.env.OFFICIAL_MAIL // email address which will used to send email
          : process.env.DEV_OFFICIAL_MAIL,
      pass:
        process.env.NODE_ENV === 'production'
          ? process.env.OFFICIAL_MAIL_APP_PASS
          : process.env.DEV_OFFICIAL_MAIL_APP_PASS, // app password from same email
    },
  });

  // Set up email data
  const mailOptions = {
    from: sender, // Replace with your email
    to:
      process.env.NODE_ENV === 'production'
        ? process.env.FORM_RECIPIENT_MAIL // email address which will used to send email
        : process.env.DEV_FORM_RECIPIENT_MAIL, // Recipient's email
    subject: subject,
    text: `
    firstname: ${messages.firstName}
    lastname:  ${messages.lastName}
    email: ${messages.email}
    phone: ${messages.phoneNo}
    projectDescription: ${messages.projectDescription}
    `,
  };

  try {
    const res = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully', res);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export default sendMail;
