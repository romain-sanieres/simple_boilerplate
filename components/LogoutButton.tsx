import { signOut } from "@/auth";
import { Button } from "./ui/button";

export const LogoutButton = () => {
  return (
    <form>
      <Button
        variant={"destructive"}
        formAction={async () => {
          "use server";
          await signOut();
        }}
      >
        Log out
      </Button>
    </form>
  );
};
