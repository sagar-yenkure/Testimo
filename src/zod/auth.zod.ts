import z from "zod";

export const signInSchema = z.object({
  email: z.email({ error: "Please enter a valid email address" }),

  password: z
    .string({
      error: "Password is required",
    })
    .min(6, { error: "Password must be at least 6 characters long" }),
});

export const signUpSchema = signInSchema
  .extend({
    name: z.string({ error: "userName is Required" }),
    confirmPassword: z
      .string({
        error: "Confirm password is required",
      })
      .min(6, { error: "Confirm password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const registerZod = z.object({
  name: z.string("Username is required"),
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginZod = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginInput = z.infer<typeof loginZod>;
export type RegisterInput = z.infer<typeof registerZod>;
export type SignInSchemaType = z.infer<typeof signInSchema>;
export type SignUpSchemaType = z.infer<typeof signUpSchema>;
