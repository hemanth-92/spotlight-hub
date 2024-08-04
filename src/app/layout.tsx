import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/provider";
import { Toaster } from "sonner";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotlight Hub",
  description:
    "Spotlight Hub is a comprehensive image management solution that leverages GitHub for storage, APIs for dynamic image handling, and AI for image enhancement and smart cropping. It integrates with jsDelivr CDN for efficient image serving",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    url: siteConfig.url,
    locale: "en_IN",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "flex min-h-screen flex-col scroll-smooth supports-[min-h-[100dvh]]:min-h-[100dvh]",
        )}
      >
        <Provider>
          {children}
          <Toaster richColors position="bottom-center" />
        </Provider>
      </body>
    </html>
  );
}
