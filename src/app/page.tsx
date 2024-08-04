import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="mx-auto flex max-w-2xl flex-1 flex-col">
      <section className="flex flex-1 flex-col items-center justify-center gap-4">
        <h1>
          <Balancer className="text-3xl">
            <span className="text-muted-foreground">Spotlight</span> Hub
          </Balancer>
        </h1>
        <div>
          <Button>
            Get started
          </Button>
        </div>
      </section>
    </main>
  );
}
