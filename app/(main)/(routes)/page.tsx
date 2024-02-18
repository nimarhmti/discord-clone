import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const state: boolean = true;
export default function Home() {
  return (
    <main className="">
      <Button className={cn(state && "bg-red-300")}>click</Button>
    </main>
  );
}
