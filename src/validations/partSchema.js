import { z } from 'zod';

export const partSchema = z.object({
  name: z.string().min(3, { message: 'El nombre de la pieza es obligatorio' }),
  sn: z.string().min(5, { message: 'El número de serie es obligatorio' }),
  description: z.string().optional(),
});
