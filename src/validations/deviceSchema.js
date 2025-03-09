import { z } from 'zod';

export const deviceSchema = z.object({
  name: z.string().nonempty({ message: 'El nombre es requerido' }),
  sn: z.string().nonempty({ message: 'El número de serie es requerido' }),
  model: z.string().nonempty({ message: 'El modelo es requerido' }),
  manufacturer: z.string().nonempty({ message: 'El fabricante es requerido' }),
  firmware: z.string().optional(),
  warranty: z
    .object({
      start: z.preprocess(
        (arg) => (arg ? new Date(arg) : undefined),
        z.date().optional(),
      ),
      end: z.preprocess(
        (arg) => (arg ? new Date(arg) : undefined),
        z.date().optional(),
      ),
      type: z.string().optional(),
    })
    .optional(),
  status: z
    .enum(['nuevo', 'reparado', 'mantenimiento', 'averiado'])
    .default('nuevo'),
  description: z.string().optional(),
});
