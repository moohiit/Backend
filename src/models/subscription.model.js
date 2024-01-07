import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
  subscriber: {
    type: Schema.Types.ObjectId,//one who is subscribing
    ref: "User"
  },
  channel: {
    type: Schema.Types.ObjectId,//one who is being subscribed
    ref: "User"
  }
}, { timestamps: true })

export default mongoose.model("Subscription", subscriptionSchema);