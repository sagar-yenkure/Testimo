import { ZodError } from "zod";

export function zodError(error: ZodError | undefined): string {
  return error?.issues?.[0]?.message ?? "Validation error";
}
