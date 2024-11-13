import mongoose from 'mongoose';

export interface IPotentialClients extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  projectDescription: string;
}
