import { NextResponse, NextRequest } from "next/server";
import connect from "@/lib/mongodb";
import Post from "@/models/post";

type ParamsType = { id: string };

export async function DELETE(
  req: NextRequest,
  ctx: { params: ParamsType | Promise<ParamsType> }
) {
  try {
    const params: ParamsType = await ctx.params;
    const id = params?.id;
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

    await connect();
    const removed = await Post.findByIdAndDelete(id);
    if (!removed) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ message: 'Deleted' }, { status: 200 });
  } catch (err) {
    console.error('Delete post error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
