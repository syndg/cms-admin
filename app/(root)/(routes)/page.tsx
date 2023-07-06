import { Button } from "@/components/ui/button";
import prismadb from "@/lib/prismadb";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default async function HomePage() {
  const posts = await prismadb.post.findMany({
    orderBy: { createdAt: "desc" },
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
      <div className="flex">
        <h1 className="font-semibold text-3xl">Posts</h1>
        <Link href="/posts/new" className="ml-auto">
          <Button variant="outline">
            <Plus className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <Separator />
      <div className="grid space-y-4">
        {posts.map((post, i) => (
          <Link
            key={i}
            href={`/posts/${post.id}`}
            className="px-4 py-2 rounded-md border hover:bg-accent"
          >
            <p className="text-lg font-semibold">{post.title}</p>
            <p>{post.content}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
