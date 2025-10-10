import { NextResponse } from "next/server";
import connect from "@/db";
import Comment from "@/models/comment";

export async function POST(req: Request) {
  try {
    const { postId, name, text } = await req.json();

    if (!postId || !name || !text) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await connect();

    const newComment = await Comment.create({ postId, name, text });

    return NextResponse.json(
      { message: "Comment added successfully", comment: newComment },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("postId");

    await connect();

    const comments = await Comment.find(postId ? { postId } : {}).sort({ createdAt: -1 });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
