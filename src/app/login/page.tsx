"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Balancer from "react-wrap-balancer";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="mx-auto max-w-xs md:max-w-lg">
        <CardHeader>
          <h1
            className="animate-fade-up pb-10 text-left text-3xl font-extrabold tracking-tight"
            style={{
              animationDelay: "0.25s",
              animationFillMode: "forwards",
            }}
          >
            <Balancer>
              <span className="text-muted-foreground">Spotlight</span> Hub
            </Balancer>
          </h1>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Securely sign in to spotlight hub through GitHub
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            >
              Sign In with GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
