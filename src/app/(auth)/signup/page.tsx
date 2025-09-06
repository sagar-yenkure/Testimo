import AuthForm from "@/components/auth-ui/AuthForm";
import { Heart } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_HOST}/signup`
  }
}

const SignUpPage = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col  items-center justify-center gap-6 p-4 md:p-2">
      <div className="flex w-full max-w-sm flex-col gap-3 pt-3">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 hover:cursor-pointer"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
            <Heart className="h-4 w-4 text-white fill-current" />
          </div>
          <span className="text-xl font-bold text-gray-900">
            Testimo
          </span>
        </Link>
        <AuthForm type="Signup" />
      </div>
    </div>
  );
};

export default SignUpPage;
