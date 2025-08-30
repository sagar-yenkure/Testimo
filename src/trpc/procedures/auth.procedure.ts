import { RegisterInput } from "@/zod/auth.zod";
import authService from "../services/auth.service";
import { apiError, apiResponse } from "@/utils/apiResponse";

const authProcedure = {
  registerUser: async (input: RegisterInput) => {
    if (input.password !== input.confirmPassword)
      return apiError(
        "PARSE_ERROR",
        "password does not match with confirm password"
      );

    const isUserAlreadyExist = await authService.isUserExist(input.email);
    if (isUserAlreadyExist)
      return apiError("CONFLICT", "User Already Exist, Please Login");

    const user = await authService.createUser(input);
    return apiResponse(user, "User Is Created Successfully");
  },
};

export default authProcedure;
