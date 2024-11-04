import mongoose from 'mongoose';

const connectDB = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log('Already connected to MongoDB');
    return;
  }
  if (connectionState === 2) {
    console.log('Connecting to MongoDB...');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: 'skyedgedigital',
      bufferCommands: true,
    });
    console.log('Connected to MongoDB');
  } catch (error: any) {
    console.log('Error connecting to MongoDB', error);
    throw new Error('Error: ', error);
  }
};

export default connectDB;
