import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";
import Image from "next/image";

type PropsType = {
  provider: string;
};

export const OauthButton = ({ provider }: PropsType) => {
  return (
    <Button
      variant={"secondary"}
      className="w-full"
      formAction={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Image
        src={`/images/${provider.toLowerCase()}.svg`}
        height={500}
        width={500}
        alt={`connect with ${provider}`}
        className="size-4"
      />
    </Button>
  );
};
