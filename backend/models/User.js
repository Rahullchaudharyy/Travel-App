import mongoose from "mongoose";


const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    location: {
      // Make sure location is an object with latitude and longitude
      type: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
      },
      required: false, // Make it optional if you want to allow registrations without location
    },
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", userSchema);
export default User;
