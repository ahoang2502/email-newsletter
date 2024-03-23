"use server";

import { connectDb } from "@/shared/libs/db";
import Email from "@/models/email.model";

export const getEmails = async ({
  newsLetterOwnerId,
}: {
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();

    const emails = await Email.find({
      newsLetterOwnerId,
    });

    const formattedEmails = emails.map((email) => ({
      ...email._doc,
      _id: email._doc._id.toString(),
    }));

    return formattedEmails;
  } catch (error) {
    console.log("🔴 [GET_EMAILS]", error);
  }
};
