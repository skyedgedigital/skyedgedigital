import connectDB from '@/lib/db';
import PotentialClients from '@/lib/models/potentialClients';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectDB();
    const potentialClients = await PotentialClients.find();
    return new NextResponse(JSON.stringify(potentialClients), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(
      'Error fetching potential clients: ' + error.message,
      { status: 500 }
    );
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await connectDB();
    const body = await request.json();
    const { firstName, lastName, email, phone, projectDescription } = body;
    console.log(firstName, lastName, email, phone, projectDescription);
    const potentialClient = await PotentialClients.create({
      firstName,
      lastName,
      email,
      phone,
      projectDescription,
    });
    return new NextResponse(JSON.stringify(potentialClient), {
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(
      'Error creating potential client: ' + error.message,
      { status: 500 }
    );
  }
};
