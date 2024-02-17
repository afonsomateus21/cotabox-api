import { model, Schema } from "mongoose";

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  participation: Number,
  createdAt: Date
})

export default model("User", userSchema);