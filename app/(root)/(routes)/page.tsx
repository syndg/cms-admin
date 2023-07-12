import prismadb from "@/lib/prismadb";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { AddNew } from "@/components/add-new";
import { Menubar } from "@/components/MenuBar";
import { PostCard } from "@/components/post-card";

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
        <AddNew align="center" />
      </section>
    );
  }

  return (
    <section className="grid space-y-4 px-4 py-8 w-screen max-w-[1400px] mx-auto">
      <Menubar
        heading="Posts"
        viewButtonText="View Categories"
        viewButtonhref="/categories"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map(({ id, title, content, category, imageUrl }) => (
          <PostCard
            key={id}
            id={id}
            title={title}
            category={category}
            content={content}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
