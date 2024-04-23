import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-50">
      <h1>Next.js Lab 3 - Auth</h1>
        <Link href="/user-profile">Profile</Link>
    </main>
  );
}

