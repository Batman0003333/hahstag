const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Event", eventSchema);
