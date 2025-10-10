import { NextResponse } from "next/server";
import connect from "@/db";
import tarie from "@/models/tarie"; 

export const GET = async () => {
  try {
    await connect();
    const comments = await tarie.find()
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error" + error, { status: 500 });
  }     

};