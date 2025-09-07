import { TRPC_ERROR_CODE_KEY, TRPCError } from "@trpc/server";

export const apiError = (code: TRPC_ERROR_CODE_KEY, message: string) => {
  throw new TRPCError({
    code,
    message,
  });
};

export function apiResponse<T>(data: T, message = "Success", success: boolean = true) {
  return {
    success,
    message,
    data,
  };
}
