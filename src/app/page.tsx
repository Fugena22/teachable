import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <Link href="https://sso.teachable.com/secure/2026611/identity/oauth_provider/authorize?client_id=NABnQHrCV13tix15hoQ1o0jzYK720JYW&response_type=code&required_scopes=name:read%20email:read&optional_scopes=courses:read">
        <Button>Login</Button>
      </Link>
    </main>
  );
}
