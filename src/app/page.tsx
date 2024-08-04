import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-2xl flex-1 flex-col">
      <section className="flex flex-1 flex-col items-center justify-center gap-4">
        <h1
          className="animate-fade-up text-center text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-6xl lg:text-7xl"
          style={{
            animationDelay: "0.25s",
            animationFillMode: "forwards",
          }}
        >
          <Balancer>
            <span className="text-muted-foreground">Spotlight</span> Hub
          </Balancer>
        </h1>
        <div
          className="animate-fade-up text-center text-base text-muted-foreground sm:text-xl"
          style={{
            animationDelay: "0.35s",
            animationFillMode: "forwards",
          }}
        >
          <Balancer>{siteConfig.description}</Balancer>
        </div>
        <div>
          <Button>Get started</Button>
        </div>
      </section>
    </main>
  );
}
