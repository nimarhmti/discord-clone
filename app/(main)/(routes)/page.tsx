import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="bg-appBase  h-full">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
