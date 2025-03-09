import { z } from 'zod';

export const partSchema = z.object({
  name: z.string().min(1, { message: 'El nombre de la pieza es obligatorio' }),
  sn: z.string().min(1, { message: 'El número de serie es obligatorio' }),
  description: z.string().optional(),
});
