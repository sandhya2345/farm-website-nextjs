import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("appletales");

  const cart = await db.collection("cart").find().toArray();
  return NextResponse.json(cart);
}

export async function POST(req) {
  const client = await clientPromise;
  const db = client.db("appletales");
  const body = await req.json();

  const { slug, quantity } = body;

  if (!slug || !quantity) {
    return NextResponse.json({ error: "slug and quantity required" }, { status: 400 });
  }

  const result = await db.collection("cart").insertOne({ slug, quantity });

  return NextResponse.json({ success: true, id: result.insertedId });
}
