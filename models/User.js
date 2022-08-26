import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: { type: String, trim: true },
  password: { type: String, trim: true },
  tc: { type: Boolean}
})

// Model
const UserModel = mongoose.model("user", userSchema)

export default UserModel