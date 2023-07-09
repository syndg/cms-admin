import prismadb from "@/lib/prismadb";

import { PostForm } from "@/components/post-form";

const PostPage = async ({ params }: { params: { postId: string } }) => {
  const post = await prismadb.post.findUnique({
    where: {
      id: params.postId,
    },
  });

  const categories = await prismadb.category.findMany();

  return (
    <div className="flex-col max-w-[1400px] mx-auto">
      <div className="flex-1 space-y-4 px-4 pt-6">
        <PostForm initialData={post} categories={categories} />
      </div>
    </div>
  );
};

export default PostPage;
