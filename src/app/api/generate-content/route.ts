import { geminiSession } from "@/lib/google";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await geminiSession(body.contentPrompt);
    return NextResponse.json({
      content: res,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "Internal Server Error",
    });
  }
}
