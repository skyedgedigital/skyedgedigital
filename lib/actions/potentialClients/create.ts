'use server';

import { IPotentialClients } from '@/interfaces/PotentialCLients.interface';
import PotentialClients from '@/lib/models/potentialClients.model';
import connectDB from '@/utils/db';
import sendMail from '@/utils/sendmail';

const createPotentialClients = async (ptcData: IPotentialClients) => {
  await connectDB();

  const { firstName, lastName, email, phoneNo, projectDescription } = ptcData;
  console.log(
    'RECEIVED INFOS',
    firstName,
    lastName,
    email,
    phoneNo,
    projectDescription
  );

  // Validate data
  if (!firstName || !lastName || !email || !phoneNo || !projectDescription) {
    return {
      message: 'All fields are required',
      status: 400,
    };
  }

  try {
    // Save data to MongoDB
    const newPotentialClient = new PotentialClients({
      firstName,
      lastName,
      email,
      phoneNo,
      projectDescription,
    });
    const newSavedForm = await newPotentialClient.save();
    // console.log('new saved form', newSavedForm);

    // Send email
    const emailSent = await sendMail(
      'SkyEdge Digital New Form Submission',
      {
        firstName,
        lastName,
        email,
        phoneNo,
        projectDescription,
      } as IPotentialClients,
      email
    );

    if (emailSent) {
      return {
        message: 'Form submitted successfully and email sent',
        status: 200,
      };
    } else {
      return {
        message: 'Form submitted but failed to send email',
        status: 500,
      };
    }
  } catch (error) {
    console.error('Error processing form submission:', error);
    return { message: 'Internal server error', status: 500 };
  }
};

export { createPotentialClients };
