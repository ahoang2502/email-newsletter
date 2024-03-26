"use server";

import Subscriber from "@/models/subscribers.model";
import { connectDb } from "@/shared/libs/db";
import { generateAnalyticsData } from "@/shared/utils/AnalyticsGenerator";

export const subscribersAnalytics = async () => {
  try {
    await connectDb();

    const subscribers = await generateAnalyticsData(Subscriber);

    return subscribers;
  } catch (error) {
    console.log("🔴 [SUBSCRIBERS_ANALYTICS] ", error);
  }
};
