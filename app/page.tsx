import { auth, signIn } from "@/auth";
import { LoginForm } from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  if (!session)
    return (
      <main className="flex justify-center items-center w-full min-h-dvh">
        <div className="flex flex-col gap-y-2 w-96">
          <p className="text-4xl underline mb-4">Boilerpla.te</p>
          <div className="flex flex-col gap-x-2">
            <LoginForm />
            <form className="w-full flex mt-4 gap-x-2">
              <Button
                className="w-full"
                formAction={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                <Image
                  src={"/images/google.svg"}
                  height={500}
                  width={500}
                  alt="connect with google"
                  className="size-4"
                />
              </Button>
              <Button
                className="w-full"
                formAction={async () => {
                  "use server";
                  await signIn("google");
                }}
              >
                <Image
                  src={"/images/github.svg"}
                  height={500}
                  width={500}
                  alt="connect with google"
                  className="size-4"
                />
              </Button>
            </form>
          </div>
        </div>
      </main>
    );

  return (
    <main className="flex justify-center items-center w-full min-h-dvh">
      <div className="flex flex-col gap-y-2 w-96">
        <Link href={"/dashboard"}>Dash</Link>
      </div>
    </main>
  );
}
