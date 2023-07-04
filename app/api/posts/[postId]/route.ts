import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function PATCH(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { title, content } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    if (!content) {
      return new NextResponse("Content is required", { status: 400 });
    }

    if (!params.postId) {
      return new NextResponse("Post not found", { status: 404 });
    }

    const post = await prismadb.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title,
        content,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.log("[POST_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { postId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!params.postId) {
      return new NextResponse("Post not found", { status: 404 });
    }

    const post = await prismadb.post.delete({
      where: {
        id: params.postId,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log("[POST_DELETE", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
