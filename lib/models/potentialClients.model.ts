import { Schema, model, models } from 'mongoose';

const potentialClientsSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
    projectDescription: { type: String, required: true },
    status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'approved', 'rejected'],
    },
  },
  { timestamps: true }
);

const PotentialClients =
  models.PotentialClients || model('PotentialClients', potentialClientsSchema);

export default PotentialClients;
