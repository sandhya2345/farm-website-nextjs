import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("appletales");
    const varieties = await db.collection("varieties").find({}).toArray();
    return NextResponse.json(varieties);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}