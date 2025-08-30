import authProcedure from "../procedures/auth.procedure";
import { registerZod } from "@/zod/auth.zod";
import { createTRPCRouter, publicProcedure } from "../init";

const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(registerZod)
    .mutation(async ({ input }) => authProcedure.registerUser(input)),
});

export default authRouter;
