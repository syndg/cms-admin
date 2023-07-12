import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";

interface AddNewProps {
  align?: "center" | "start" | "end" | undefined;
}

export const AddNew: React.FC<AddNewProps> = ({ align = "end" }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Plus className="w-4 h-4" />
          <span className="sr-only">Add new</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={8}
        className="w-[200px] p-2 backdrop-blur-md bg-slate-50/80 dark:bg-slate-950/80"
        align={align}
      >
        <DropdownMenuItem asChild>
          <Link href="/posts/new">New post</Link>
        </DropdownMenuItem>
        <Separator className="my-2" />
        <DropdownMenuItem asChild>
          <Link href="/categories/new">New category</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
