import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const post = await prismadb.post.create({
      data: {
        userId,
        ...body,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log("Posts", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
