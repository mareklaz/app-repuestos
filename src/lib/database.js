import mongoose from 'mongoose';

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local',
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = (async () => {
      try {
        const mongooseConnection = await mongoose.connect(MONGODB_URI);
        return mongooseConnection;
      } catch (error) {
        cached.promise = null;
        throw error;
      }
    })();
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
