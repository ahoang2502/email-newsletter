"use server";

import { currentUser } from "@clerk/nextjs";

import Membership from "@/models/membership.model";
import { connectDb } from "@/shared/libs/db";

export const getMembership = async () => {
  try {
    await connectDb();
    const user = await currentUser();

    if (user) {
      const membership = await Membership.findOne({
        userId: user?.id,
      });

      const formattedMembership = {
        ...membership._doc,
        _id: membership._doc._id.toString(),
      };

      return formattedMembership;
    }
  } catch (error) {
    console.log("🔴 [GET_MEMBERSHIP] ", error);
  }
};
