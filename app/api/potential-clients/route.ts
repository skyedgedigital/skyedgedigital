import { NextRequest, NextResponse } from 'next/server';
import sendMail from '@/utils/sendmail'; // Adjust the import path as necessary
import connectDB from '@/utils/db';
import PotentialClients from '@/lib/models/potentialClients';

export async function POST(req: NextRequest) {
  await connectDB();

  const { firstName, lastName, email, phone, projectDescription } =
    await req.json();
  console.log(
    'RECEIVED INFOS',
    firstName,
    lastName,
    email,
    phone,
    projectDescription
  );

  // Validate data
  if (!firstName || !lastName || !email || !phone || !projectDescription) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 }
    );
  }

  try {
    // Save data to MongoDB
    const newPotentialClient = new PotentialClients({
      firstName,
      lastName,
      email,
      phone,
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
        phone,
        projectDescription,
      },
      email
    );

    if (emailSent) {
      return NextResponse.json(
        { message: 'Form submitted successfully and email sent' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Form submitted but failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
