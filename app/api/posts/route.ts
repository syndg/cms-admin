import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const posts = await prismadb.post.findMany();

    return NextResponse.json(posts);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    const body = await req.json();

    const name = user?.firstName;

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const post = await prismadb.post.create({
      data: {
        name,
        ...body,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

}
