"use server";

import { connectDb } from "@/shared/libs/db";
import Email from "@/models/email.model";

export const getEmailDetails = async ({
  title,
  newsLetterOwnerId,
}: {
  title: string;
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();

    const email = await Email.findOne({
      title,
      newsLetterOwnerId,
    });

    const formattedEmail = { ...email._doc, _id: email._doc._id.toString() };

    return formattedEmail;
  } catch (error) {
    console.log("🔴 [GET_EMAIL_DETAILS]", error);
  }
};
