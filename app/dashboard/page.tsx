import React from "react";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";
export default async function Dashboard() {
  const session = await auth();
  return (
    <div className="flex gap-x-2">
      <p className="text-4xl underline">{session?.user?.email}</p>

      <form className="w-full space-y-2">
        <Button
          formAction={async () => {
            "use server";
            await signOut();
          }}
        >
          Log out
        </Button>
      </form>
    </div>
  );
}
