'use server';
import connectDB from '@/lib/database';
import Part from '@/models/Part';
import { revalidatePath } from 'next/cache';

export async function createPart(data) {
  try {
    await connectDB();
    await Part.create(data);
    revalidatePath('/parts');
    return {
      success: true,
      message: 'PIEZA creada correctamente',
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Error al crear la PIEZA' };
  }
}

export async function getParts() {
  try {
    await connectDB();
    const parts = await Part.find();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(parts)),
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Error al obtener las PIEZAS' };
  }
}

export async function getPartById(id) {
  try {
    await connectDB();
    const part = await Part.findById(id);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(part)),
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Error al obtener la PIEZA' };
  }
}

export async function updatePart(data) {
  try {
    await connectDB();
    console.log('DATA EN UPDATE =>', data);
    const part = await Part.findByIdAndUpdate(data.id, data, {
      new: true,
    });
    revalidatePath(`/parts/${data._id}`);
    return {
      success: true,
      message: 'PIEZA actualizada correctamente',
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Error al actualizar la PIEZA' };
  }
}

export async function deletePart(id) {
  try {
    await connectDB();
    await Part.findByIdAndDelete(id);
    revalidatePath('/parts');
    return {
      success: true,
      message: 'PIEZA eliminada correctamente',
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Error al eliminar la PIEZA' };
  }
}
