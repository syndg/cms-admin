"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const toggleItems = [
  { label: "Light", value: "light", icon: <Sun size={20} /> },
  { label: "Dark", value: "dark", icon: <Moon size={20} /> },
  { label: "System", value: "system", icon: <Laptop size={20} /> },
];

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-transparent">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-[200px] p-[0.35rem] space-y-1 backdrop-blur-md bg-slate-50/80 dark:bg-slate-950/80 dark:text-slate-300"
      >
        {toggleItems.map(({ label, value, icon }, id) => (
          <DropdownMenuItem
            key={id}
            className="flex justify-between items-center py-[0.6rem] font-medium text-[16px] hover:dark:bg-slate-700/40"
            onClick={() => setTheme(value)}
          >
            {label}
            {icon}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
