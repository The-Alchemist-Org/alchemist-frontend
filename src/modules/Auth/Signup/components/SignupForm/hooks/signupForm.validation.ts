import { z } from 'zod';

export const SignupValidation = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(7, 'Password must be at least 7 characters long.'),
  firstName: z.string().min(2, 'First name must be at least 2 characters long.'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters long.'),
  confirmedPassword: z.string(),
}).refine((data) => data.password === data.confirmedPassword, {
  message: 'Passwords do not match',
  path: ['confirmedPassword'],
});

export type SignupFormType = z.infer<typeof SignupValidation>;
