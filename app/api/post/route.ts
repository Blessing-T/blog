import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Post from "@/models/post";

export const GET = async () => {
  try {
    
    await connect();

   
    const posts = await Post.find();

    
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("❌ Database Error:", error);
    return NextResponse.json(
      { error: "Database Error", details: String(error) },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    await connect();

    const newPost = await Post.create({ title, description: content, imageurl: '' });

    return NextResponse.json({ message: 'Created', post: newPost }, { status: 201 });
  } catch (err) {
    console.error('Create post error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
