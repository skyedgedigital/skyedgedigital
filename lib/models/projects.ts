import mongoose, { Schema, Document } from 'mongoose';

export interface Project extends Document {
  name: string;
  description: string;
  logo: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  }
}, {
  timestamps: true  // This automatically adds createdAt and updatedAt fields
});

// Only create the model if it doesn't already exist
export const Project = mongoose.models.Project || mongoose.model<Project>('Project', ProjectSchema);
