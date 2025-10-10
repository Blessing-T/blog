import { NextResponse } from "next/server";
import connect from "@/db";
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
