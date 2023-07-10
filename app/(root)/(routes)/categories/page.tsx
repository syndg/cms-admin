import prismadb from "@/lib/prismadb";

import Link from "next/link";
import { Menubar } from "@/components/MenuBar";

const CategoryPage = async () => {
  const categories = await prismadb.category.findMany();

  return (
    <section className="grid space-y-4 px-4 py-10 w-screen max-w-[1400px] mx-auto">
      <Menubar
        heading="Categories"
        viewButtonText="View posts"
        viewButtonhref="/"
      />
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
