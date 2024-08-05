"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ComponentWithAuth = (props: P) => {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        router?.push("/login");
      }
    }, [status, router]);

    if (status === "loading") {
      return <div>Loading...</div>;
    }

    if (status === "authenticated") {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return ComponentWithAuth;
};

export default withAuth;
