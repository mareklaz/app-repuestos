'use server';
import connectDB from '@/lib/database';
import Device from '@/models/Device';
import { revalidatePath } from 'next/cache';

export async function createDevice(data) {
  try {
    await connectDB();
    await Device.create(data);
    revalidatePath('/devices');
    return {
      success: true,
      message: 'Dispositivo creado correctamente',
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Error al crear el dispositivo' };
  }
}

export async function getDevices() {
  try {
    await connectDB();
    const devices = await Device.find();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(devices)),
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Error al obtener los dispositivos' };
  }
}

export async function getDeviceById(id) {
  try {
    await connectDB();
    const device = await Device.findById(id);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(device)),
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Error al obtener el dispositivo' };
  }
}

export async function updateDevice(data) {
  try {
    await connectDB();
    console.log('DATA EN UPDATE =>', data);
    const device = await Device.findByIdAndUpdate(data.id, data, { new: true });
    revalidatePath(`/devices/${data.id}`);
    return {
      success: true,
      message: 'Dispositivo actualizado correctamente',
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Error al actualizar el dispositivo' };
  }
}

export async function deleteDevice(id) {
  try {
    await connectDB();
    await Device.findByIdAndDelete(id);
    revalidatePath('/devices');
    return {
      success: true,
      message: 'Dispositivo eliminado correctamente',
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Error al eliminar el dispositivo' };
  }
}
