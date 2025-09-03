import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("appletales");
    const variety = await db.collection("varieties").findOne({ slug: params.slug });

    if (!variety) {
      return NextResponse.json({ error: "Variety not found" }, { status: 404 });
    }

    return NextResponse.json(variety);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
