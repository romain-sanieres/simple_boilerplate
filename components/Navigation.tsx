import React from "react";
import Link from "next/link";
import { MenuIcon, SquareArrowOutUpRight } from "lucide-react";
import { auth } from "@/auth";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Navigation = async () => {
  const session = await auth();

  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="font-bold text-lg">simple_boilerplate</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {session ? (
            <Link
              href="/dashboard"
              className="font-medium hover:text-primary transition"
              prefetch={false}
            >
              Dashboard
            </Link>
          ) : null}
          <Link
            href="#"
            className="font-medium hover:text-primary transition flex items-center gap-x-1"
            prefetch={false}
          >
            <span>Github</span>
            <SquareArrowOutUpRight className="size-4 stroke-1 mb-1" />
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="md:hidden">
            <div className="flex flex-col items-start space-y-4 p-4">
              {session ? (
                <SheetTrigger asChild>
                  <Link
                    href="/dashboard"
                    className="font-medium hover:text-primary transition"
                    prefetch={false}
                  >
                    Dashboard
                  </Link>
                </SheetTrigger>
              ) : null}
              <SheetTrigger asChild>
                <Link
                  href="#"
                  className="font-medium hover:text-primary transition"
                  prefetch={false}
                >
                  Github
                </Link>
              </SheetTrigger>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
