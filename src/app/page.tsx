import { Button } from "@/components/ui/button";
import { getAccessToken } from "@/lib/teachable-sdk/auth";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const token = await getAccessToken(searchParams.code);
  return (
    <main className="flex justify-center items-center">
      <Link
        href={`https://sso.teachable.com/secure/2026611/identity/oauth_provider/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&required_scopes=name:read%20email:read&optional_scopes=courses:read`}
      >
        <Button>Login</Button>
      </Link>
    </main>
  );
}
