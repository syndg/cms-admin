import prismadb from "@/lib/prismadb";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const CategoryPage = async () => {
  const categories = await prismadb.category.findMany();

  return (
    <section className="grid space-y-4 px-4 py-10 w-screen max-w-[1400px] mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Categories</h1>
        <div className="flex space-x-4">
          <Link href="/">
            <Button variant="outline">View posts</Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Plus className="w-4 h-4" />
                <span className="sr-only">Add new</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-[200px] p-2"
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
        </div>
      </div>
      <Separator />
      <div className="grid space-y-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="px-4 py-3 space-y-1  rounded-md border hover:bg-accent"
          >
            <p className="text-2xl leading-6 font-semibold">{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
