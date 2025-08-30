"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { motion } from "framer-motion";
import UserAvatar from "./user-ui/UserAvatar";
import Link from "next/link";
import { useSession } from "next-auth/react";

const menuItems = [{ label: "Account", href: "/profile" }];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const gradientButtonClasses =
    "md:w-fit w-full bg-gradient-to-br from-blue-500 to-purple-600 hover:cursor-pointer p-2 rounded-lg px-2";
  const logoutButtonClasses =
    "md:w-fit w-full bg-gradient-to-r hover:cursor-pointer from-red-600 to-red-600 hover:from-red-700 hover:to-red-700";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4">
      <div className="max-w-[75rem] container mx-auto">
        <div className="flex h-16 items-center  justify-between">
          {/* Logo */}
          <Link
            href={"/"}
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <Heart className="h-4 w-4 text-white fill-current" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Testimo
            </span>
          </Link>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <UserAvatar user={session.user} />
            ) : (
              <Link href="/signin" className={gradientButtonClasses}>
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden hover:cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t"
          >
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ))}

              <Link href="/signin" className={gradientButtonClasses}>
                Get Started
              </Link>
              <Button size="sm" className={logoutButtonClasses}>
                Log Out
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
