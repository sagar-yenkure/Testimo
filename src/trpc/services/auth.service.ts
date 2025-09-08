import { prisma } from "@/lib/prisma";
import { RegisterInput } from "@/zod/auth.zod";
import bcrypt from "bcryptjs";

const authService = {
  isUserExist: async (email: string) => {
    return await prisma.user.findUnique({
      where: { email },
    });
  },

  createUser: async (input: RegisterInput) => {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    return await prisma.user.create({
      data: {
        email: input.email,
        name: input.name,
        password: hashedPassword,
      },
      omit: { password: true },
    });
  },

  comparePassword: async (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword);
  },

  createHashedPassword: async (password: string) => {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password, salt);
  },
};

export default authService;
