import { Button } from "@/components/ui/button";
import prismadb from "@/lib/prismadb";
import { Plus } from "lucide-react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import AddNew from "@/components/add-new";

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
        <AddNew />
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
          <AddNew />
        </div>
      </div>
      <Separator />
      <div className="grid space-y-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="px-4 py-3 space-y-2  rounded-md border hover:bg-accent"
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
