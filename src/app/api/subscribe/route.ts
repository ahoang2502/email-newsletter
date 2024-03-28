import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { connectDb } from "@/shared/libs/db";
import Subscriber from "@/models/subscribers.model";
import { validateEmail } from "@/shared/utils/ZeroBounceApi";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const apiKey = data.apiKey;

    const decoded: any = jwt.verify(apiKey, process.env.JWT_SECRET_KEY!);

    await connectDb();

    // Check if subscriber already existed
    const existingSubscriber = await Subscriber.findOne({
      email: data.email,
      newsLetterOwnerId: decoded?.id,
    });
    if (existingSubscriber)
      return NextResponse.json({ error: "Email already subscribed!" });

    // Validate email
    const validationResponse = await validateEmail({
      email: data.email,
    });
    if (validationResponse.status === "invalid")
      return NextResponse.json({ error: "Email is not valid!" });

    // Create new subscriber
    const subscriber = await Subscriber.create({
      email: data.email,
      newsLetterOwnerId: decoded?.id,
      source: "By API",
      status: "Subscribed",
    });
     const formattedSubscriber = {
       ...subscriber._doc,
       _id: subscriber._doc._id.toString(),
     };

    return NextResponse.json(formattedSubscriber);
  } catch (error) {
    console.log("🔴 [SUBSCRIBE_API]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
