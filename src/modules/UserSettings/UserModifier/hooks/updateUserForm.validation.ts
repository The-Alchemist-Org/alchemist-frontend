import { z } from 'zod';

export const UpdateUserValidation = z.object({
  email: z.string().email('Invalid email address.'),
  firstName: z.string().min(2, 'First name must be at least 2 characters long.'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters long.'),
  password: z.string().optional().transform((value) => (value?.length === 0 ? undefined : value)),
  confirmedPassword: z.string().optional().transform((value) => (
    value?.length === 0 ? undefined : value
  )),
}).refine(
  (data) => data.password === undefined || data.password.length >= 7,
  {
    message: 'Password must be at least 7 characters long',
    path: ['password'],
  },
).refine((data) => data.password === data.confirmedPassword, {
  message: 'Passwords do not match',
  path: ['confirmedPassword'],
});

export type UpdateUserFormType = z.infer<typeof UpdateUserValidation>;
