import mongoose from 'mongoose';
import { env } from '../utils/evn.js';

export const initMongoConnection = async () => {
  try {
    const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://skripkinlexxx:<db_password>@mycluster.8smoy.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster`,
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
