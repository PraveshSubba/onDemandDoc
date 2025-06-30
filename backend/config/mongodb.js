import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );

    mongoose.connection.on("disconnected", () => {
      console.warn("Database disconnected");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/onDemandDoc`);
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1); // Optional: Exit the app if DB connection fails
  }
};

export default connectDB;
