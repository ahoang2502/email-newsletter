import mongoose from "mongoose";

const { Schema } = mongoose;

const subscriberSchema = new Schema(
  {
    email: {
      type: String,
    },
    newsLetterOwnerId: {
      type: String,
    },
    source: {
      type: String,
      default: "By ENewsletter website",
    },
    status: {
      type: String,
      default: "Subscribed",
    },
  },
  { timestamps: true }
);

const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);

export default Subscriber;
