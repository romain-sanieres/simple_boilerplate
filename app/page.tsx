import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  if (!session)
    return (
      <main className="flex justify-center items-center w-full min-h-dvh">
        <div className="flex flex-col gap-y-2 w-96">
          <p className="text-4xl underline">Boilerpla.te</p>
          <Link href={"/dashboard"}>Dash</Link>
          <div className="flex gap-x-2">
            <form className="w-full space-y-2">
              <Button
                formAction={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </main>
    );

  return (
    <main className="flex justify-center items-center w-full min-h-dvh">
      <div className="flex flex-col gap-y-2 w-96">
        <p className="text-4xl underline">{session.user?.email}</p>
        <Link href={"/dashboard"}>Dash</Link>

        <div className="flex gap-x-2">
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
      </div>
    </main>
  );
}
