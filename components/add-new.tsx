import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Plus, PlusSquare, FolderPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";

interface AddNewProps {
  align?: "center" | "start" | "end";
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
        className="w-[200px] p-[0.35rem] backdrop-blur-md bg-slate-50/80 dark:bg-slate-950/80"
        align={align}
      >
        <DropdownMenuItem
          className="py-2 dark:hover:bg-slate-600/70 flex justify-between items-center"
          asChild
        >
          <Link href="/posts/new">
            New post
            <PlusSquare size={20} />
          </Link>
        </DropdownMenuItem>
        <Separator className="my-2" />
        <DropdownMenuItem
          className="py-2 dark:hover:bg-slate-600/70 flex justify-between items-center"
          asChild
        >
          <Link href="/categories/new">
            New category
            <FolderPlus size={20} />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
