'use server';
import User from '@/models/User';
import connectDB from './database';

export async function createUser(name, email, password) {
  try {
    await connectDB();
    const user = new User({ name, email, password });
    await user.save();
    return { success: true, message: 'Usuario creado con éxito' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Usuario creado con éxito' };
  }
}
