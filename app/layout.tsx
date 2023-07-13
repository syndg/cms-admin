import "./globals.css";
import { dark, shadesOfPurple } from "@clerk/themes";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/providers/theme-provider";
import { ToastProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CMS-Admin",
  description: "Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          userButtonPopoverRootBox: "text-slate-50",
          userButtonPopoverCard:
            "bg-slate-950/90 backdrop-blur-lg border-[1.2px] border-slate-600/40",
          userPreviewSecondaryIdentifier: "text-slate-600 mt-1",
          userButtonPopoverActionButtonIcon: "text-slate-300/80",
          userButtonPopoverActionButtonText: "text-slate-300/80",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
