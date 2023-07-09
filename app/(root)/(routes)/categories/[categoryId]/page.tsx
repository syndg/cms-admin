import prismadb from "@/lib/prismadb";

import { CategoryForm } from "@/components/category-form";

const PostPage = async ({ params }: { params: { categoryId: string } }) => {
  const post = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  return (
    <div className="flex-col max-w-[1400px] mx-auto">
      <div className="flex-1 space-y-4 px-4 pt-6">
        <CategoryForm initialData={post} />
      </div>
    </div>
  );
};

export default PostPage;
