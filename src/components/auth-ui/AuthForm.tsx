"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { providers } from "@/constants";
import { ProviderType } from "@/types";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signInSchema,
  SignInSchemaType,
  signUpSchema,
  SignUpSchemaType,
} from "@/zod/auth.zod";
import { trpc } from "@/trpc/client";
import toast from "react-hot-toast";
import { useLogin } from "../useLogin";

interface LoginFormProps extends React.ComponentProps<"div"> {
  type: "Signin" | "Signup";
}

const AuthForm = ({ type, className, ...props }: LoginFormProps) => {
  const isSignIn = type === "Signin";

  const { login, loginPending } = useLogin();

  const { mutate, isPending } = trpc.auth.register.useMutation({
    onSuccess: (res) => toast.success(res.message),
    onError: (res) => toast.error(res.message),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType | SignUpSchemaType>({
    resolver: zodResolver(isSignIn ? signInSchema : signUpSchema),
  });

  const onSubmit = async (data: SignInSchemaType | SignUpSchemaType) => {
    if (isSignIn) {
      const res = await login(data.email, data.password);
      if (!res.ok) return toast.error(res.message);
      else return toast.success(res.message);
    } else {
      mutate({ ...(data as SignUpSchemaType) });
    }
  };

  const OAuthLogin = (provider: ProviderType) => {
    console.log("provider", provider);
  };
  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      <Card>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="text-center">
              <h1 className="text-2xl font-bold">
                {isSignIn ? "Welcome back" : "Create your account"}
              </h1>
              <p className="text-muted-foreground">
                {isSignIn
                  ? "Login to your TestimonialsHub account"
                  : "Sign up for a new TestimonialsHub account"}
              </p>
            </div>

            {/* userName Password (Only on Signup) */}
            {!isSignIn && (
              <div className="grid gap-3">
                <Label htmlFor="name">User Name</Label>
                <Input id="name" type="text" {...register("name" as const)} />
                {"name" in errors && errors.name && (
                  <p className="text-sm text-red-500">{errors.name?.message}</p>
                )}
              </div>
            )}

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="grid gap-2 ">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {isSignIn && (
                  <a
                    href="#"
                    className="text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                )}
              </div>
              <Input id="password" type="password" {...register("password")} />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password (Only on Signup) */}
            {!isSignIn && (
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  {...register("confirmPassword" as const)}
                />
                {"confirmPassword" in errors && errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword?.message}
                  </p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-br from-blue-500 to-purple-600"
            >
              {isPending || loginPending
                ? "loading"
                : isSignIn
                  ? "Login"
                  : "Sign Up"}
            </Button>

            {/* Divider */}
            <div className="relative text-center text-sm">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border " />
              </div>
              <span className="relative z-10 bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>

            {/* OAuth Buttons */}
            <div className="grid grid-cols-3 gap-4">
              {providers.map(({ name, icon: Icon }) => (
                <Button
                  key={name}
                  variant="secondary"
                  type="button"
                  disabled={loginPending || isPending}
                  className="w-full flex justify-center "
                  onClick={() => OAuthLogin(name as ProviderType)}
                >
                  <Icon className="color-gradient-to-br from-blue-500 to-purple-600" />
                  <span className="sr-only">
                    {isSignIn ? "Login" : "Signup"} with {name}
                  </span>
                </Button>
              ))}
            </div>

            {/* Switch Link */}
            <div className="text-center text-sm">
              {isSignIn ? (
                <>
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="underline underline-offset-4">
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Link href="/signin" className="underline underline-offset-4">
                    Sign in
                  </Link>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default AuthForm;
