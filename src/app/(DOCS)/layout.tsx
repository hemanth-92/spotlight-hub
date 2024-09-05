import { SiteHeader } from "@/components/layouts/site-header";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <>
          <SiteHeader />
          {children}
          </>
  );
}
