import mongoose from "mongoose";
import { createAstraUri, driver } from "stargate-mongoose";

export const connectDb = async () => {
  try {
    // const uri = createAstraUri(
    //   process.env.ASTRA_DB_API_ENDPOINT!,
    //   process.env.ASTRA_DB_APPLICATION_TOKEN!
    // );

    const uri = process.env.MONGO_URI!;

    // Check if there's an existing connection
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }

    // mongoose.set("autoCreate", true);
    // mongoose.setDriver(driver);

    await mongoose
      .connect(
        uri,
        {
          authSource: "admin",
          user: process.env.MONGO_USER,
          pass: process.env.MONGO_PASSWORD,
        }
        //    {
        //   isAstra: true,
        // }
      )
      .then((res) => console.log("🟢 Connected to database"))
      .catch((error) =>
        console.log("🔴 Error1 connecting to database ", error)
      );
  } catch (error) {
    console.log("🔴 Error2 connecting to database ", error);
  }
};
