import nodemailer from 'nodemailer';
// const recipient = 'madhurendra.pratap@skyedgedigital.in';
const recipient = 'vermapraween6543@gmail.com';

const sendMail = async (
  subject: string,
  messages: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    projectDescription: string;
  },
  sender: string
): Promise<Boolean> => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Gmail SMTP server
    port: 465, // TLS port
    secure: true, // Use TLS
    auth: {
      user: 'foruselessthing69@gmail.com', // Replace with your Gmail address
      pass: 'vonwoeuigctwxqva', // Replace with your Gmail password or app-specific password
    },
  });

  // Set up email data
  const mailOptions = {
    from: sender, // Replace with your email
    to: recipient, // Recipient's email
    subject: subject,
    text: `
    firstname: ${messages.firstName}
    lastname:  ${messages.lastName}
    email: ${messages.email}
    phone: ${messages.phone}
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
