import mongoose from "mongoose"

// Each document here represents ONE heart reading
const ReadingSchema = new mongoose.Schema({

  // Reference to the user who owns this reading
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  // Current heart rate
  heartRate: {
    type: Number,
    required: true,
  },

  // Average heart rate
  avgHeartRate: {
    type: Number,
    required: true,
  },

  // Oxygen level
  spo2: {
    type: Number,
    required: true,
  },

  // Time when reading was taken
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

// Export Reading model
export default mongoose.model("Reading", ReadingSchema)
