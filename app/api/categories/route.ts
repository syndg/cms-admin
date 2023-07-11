import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    const body = await req.json();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const post = await prismadb.category.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const posts = await prismadb.category.findMany({
      include: {
        post: true,
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
