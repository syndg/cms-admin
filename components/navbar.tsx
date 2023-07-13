import { UserButton } from "@clerk/nextjs";
import { Separator } from "./ui/separator";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky z-30 top-0 backdrop-blur-lg bg-slate-50/20 dark:bg-slate-950/90">
      <nav className="flex items-center justify-between px-4 py-[0.6rem] max-w-[1400px] mx-auto">
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
