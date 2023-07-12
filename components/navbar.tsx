import { UserButton } from "@clerk/nextjs";
import { Separator } from "./ui/separator";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="sticky z-30 top-0 backdrop-blur-md bg-slate-50/80 dark:bg-slate-950/80">
      <nav className="flex items-center justify-between px-4 py-3 max-w-[1400px] mx-auto">
        <Link href="/" className="font-bold text-[25px]">
          Dashboard
        </Link>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
      <Separator />
    </header>
  );
};
