import { z } from 'zod';

export const DrinkConfigModifierForm = z.object({
  config: z.array(z.object({
    ingredientId: z.number({ invalid_type_error: 'Required' }),
    amountLeft: z.number(),
  })).optional(),
});

export type DrinkConfigModifierFormType = z.infer<typeof DrinkConfigModifierForm>;
