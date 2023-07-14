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
      <div className="grid grid-cols-2 gap-3 dark:text-slate-300/90">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="px-4 py-[0.6rem] transition-all duration-150 active:scale-[0.95] rounded-md border-slate-300/60 bg-slate-100 border-[1.5px] dark:border-accent dark:bg-slate-800/40 hover:bg-transparent hover:dark:bg-transparent  transition-colors duration-150"
          >
            <p className="text-xl leading-6 font-medium">{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
