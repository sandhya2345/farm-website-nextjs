import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function DELETE(req, { params }) {
  const client = await clientPromise;
  const db = client.db("appletales");

  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const result = await db.collection("cart").deleteOne({ _id: new ObjectId(id) });

  if (result.deletedCount === 0) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}


export async function PATCH(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("appletales");

    const { id } = params;
    const body = await req.json();
    const { quantity } = body;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    if (!quantity || quantity < 1) {
      return NextResponse.json({ error: "Quantity must be atleast 1" }, { status: 400 });
    }

    const result = await db.collection("cart").updateOne(
      { _id: new ObjectId(id) },
      { $set: { quantity } }
    );

    if (result.itemCount === 0) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 });
  }
}