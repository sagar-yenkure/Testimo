"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: `/dashboard`,
      });

      if (res?.error) {
        setError(res.error);
        return { ok: false, message: res.error };
      }

      setMessage("Login successful");
      return { ok: true, message: "Login successful" };
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      setError(errorMessage);
      return { ok: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { login, loginPending: loading, error, message };
}
