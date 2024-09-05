import DashboardHeader from "@/components/layouts/Dashboard-header";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <DashboardHeader />
      {children}
    </div>
  );
}
