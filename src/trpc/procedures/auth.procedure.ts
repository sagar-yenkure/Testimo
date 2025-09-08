import { RegisterInput } from "@/zod/auth.zod";
import authService from "../services/auth.service";
import { apiError, apiResponse } from "@/utils/apiResponse";
import { ratelimit } from "../middleware/rateLimitor";
import { Context } from "../context";
import { getClientIP } from "@/utils/getClientIP";

const authProcedure = {
  registerUser: async (input: RegisterInput, ctx: Context) => {
    const { success } = await ratelimit.limit(getClientIP(ctx.req));
    if (!success) {
      return apiError(
        "TOO_MANY_REQUESTS",
        "Too many attempts. Please try again later."
      );
    }

    if (input.password !== input.confirmPassword)
      return apiError(
        "PARSE_ERROR",
        "Password does not match with confirm password"
      );

    const isUserAlreadyExist = await authService.isUserExist(input.email);
    if (isUserAlreadyExist)
      return apiError("CONFLICT", "User Already Exist, Please Login");

    const hashedPassword = await authService.createHashedPassword(
      input.password
    );

    const user = await authService.createUser({
      ...input,
      password: hashedPassword,
    });
    return apiResponse(user, "User Is Created Successfully");
  },
};

export default authProcedure;
