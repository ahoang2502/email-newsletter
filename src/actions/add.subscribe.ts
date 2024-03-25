"use server";

import { clerkClient } from "@clerk/nextjs";

import Subscriber from "@/models/subscribers.model";
import { connectDb } from "@/shared/libs/db";
import { validateEmail } from "@/shared/utils/ZeroBounceApi";

export const subscribe = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  try {
    await connectDb();

    // Fetch all users;
    const allUsers = await clerkClient.users.getUserList();

    // Find the newsletter owner
    const newsLetterOwner = allUsers.find((user) => user.username === username);

    if (!newsLetterOwner) throw Error("Username is not valid");

    // Check if subscriber already existed
    const existingSubscriber = await Subscriber.findOne({
      email,
      newsLetterOwnerId: newsLetterOwner?.id,
    });

    if (existingSubscriber)
      return {
        error: "Email already subscribed!",
      };

    // Validate email
    const validationResponse = await validateEmail({
      email,
    });
    if (validationResponse.status === "invalid")
      return { error: "Email is not valid!" };

    // Create new subscriber
    const subscriber = await Subscriber.create({
      email,
      newsLetterOwnerId: newsLetterOwner?.id,
      source: "By ENewsletter website",
      status: "Subscribed",
    });
    const formattedSubscriber = {
      ...subscriber._doc,
      _id: subscriber._doc._id.toString(),
    };

    return formattedSubscriber;
  } catch (error) {
    console.log("🔴 [ADD_SUBSCRIBE] ", error);
    return {
      error: "An error occurred while subscribing",
    };
  }
};
