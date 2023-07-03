import { UserButton } from "@clerk/nextjs";
import { Separator } from "./ui/separator";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0">
      <nav className="flex items-center justify-between px-4 py-3 max-w-[1400px] mx-auto">
        <Link href="/" className="font-bold text-2xl">
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

export default Navbar;
