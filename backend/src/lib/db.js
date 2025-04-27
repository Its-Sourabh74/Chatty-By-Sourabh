import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI; // Ensure this is being used
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true, // Optional, can be removed
      useUnifiedTopology: true, // Optional, can be removed
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};
