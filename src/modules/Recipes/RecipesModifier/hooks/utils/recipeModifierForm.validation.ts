import { z } from 'zod';

export const RecipeModifierForm = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
  ingredients: z.array(z.object({
    id: z.number({ invalid_type_error: 'Required' }),
    quantity: z.number({ invalid_type_error: 'Required' }),
  })).min(1, { message: 'At least one ingredient is required' }),
});

export type RecipeModifierFormType = z.infer<typeof RecipeModifierForm>;
