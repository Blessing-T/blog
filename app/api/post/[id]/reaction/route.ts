import { NextResponse, NextRequest } from "next/server";
import connect from "@/lib/mongodb";
import Post from "@/models/post";

type ParamsType = { id: string } | Promise<{ id: string }>;

function isPromise(obj: ParamsType): obj is Promise<{ id: string }> {
  return typeof (obj as Promise<{ id: string }>).then === 'function';
}

export async function POST(req: NextRequest, ctx: { params: ParamsType }) {
  try {
    const params = isPromise(ctx.params) ? await ctx.params : ctx.params;
    const id = params?.id;
    const body = await req.json();
    const { action } = body as { action?: string };

    if (!id || !action || !["like", "dislike"].includes(action)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    await connect();

    const update = action === "like" ? { $inc: { likes: 1 } } : { $inc: { dislikes: 1 } };

    const updated = await Post.findByIdAndUpdate(id, update, { new: true });

    if (!updated) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Updated", post: updated }, { status: 200 });
  } catch (err) {
    console.error("Reaction error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
