import { Button } from "@/components/ui/button";

export default async function Home() {
  const createAdmin = async () => {
    "use server"
    console.log("test")
  };
  return (
    <main className="flex justify-center items-center w-full min-h-dvh">
      <div className="flex flex-col gap-y-2 w-96">
        <p className="text-4xl underline">Boilerpla.te</p>
        <div className="flex gap-x-2">
          <form className="w-full space-y-2">
            <Button
              
              formAction={async () => {
                "use server";
                await createAdmin();
              }}
            >
              Add Admin
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
