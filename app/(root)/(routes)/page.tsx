import { Button } from "@/components/ui/button";
import prismadb from "@/lib/prismadb";
import { Plus } from "lucide-react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export default async function HomePage() {
  const posts = await prismadb.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      category: true,
    },
  });

  if (posts.length === 0) {
    return (
      <section className="py-12 grid place-content-center space-y-6 max-w-[1400px]">
        <h1 className="font-semibold text-2xl">No new posts</h1>
        <Link href="/posts/new" className="mx-auto">
          <Button className="text-md font-semibold">
            <Plus className="w-4 h-4 mr-2" />
            Add new
          </Button>
        </Link>
      </section>
    );
  }

  return (
    <section className="grid space-y-4 px-4 py-10 w-screen max-w-[1400px] mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Posts</h1>
        <div className="flex space-x-4">
          <Link href="/categories">
            <Button variant="outline">View categories</Button>
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
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="px-4 py-3 space-y-1  rounded-md border hover:bg-accent"
          >
            <p className="text-2xl leading-6 font-semibold">{post.title}</p>
            <p className="text-slate-100/60">{post.content}</p>
            <Badge variant="outline" className="rounded-xl">
              {post.category.name}
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  );
}
