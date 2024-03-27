"use server";

import Stripe from "stripe";
import { currentUser } from "@clerk/nextjs";

import Membership from "@/models/membership.model";
import { connectDb } from "@/shared/libs/db";

export const addStripe = async () => {
  try {
    await connectDb();

    const user = await currentUser();

    const membership = await Membership.findOne({ userId: user?.id });

    if (membership) return;
    else {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2023-10-16",
      });

      await stripe.customers
        .create({
          email: user?.emailAddresses[0].emailAddress,
          name: user?.firstName! + user?.lastName,
        })
        .then(async (customer) => {
          await Membership.create({
            userId: user?.id,
            stripeCustomerId: customer.id,
            plan: "LAUNCH",
          });
        });
    }

    return;
  } catch (error) {
    console.log("🔴 [STRIPE] ", error);
  }
};
