const Event = require("../models/Event");

const createEvent = async (req, res) => {
  try {
    const { eventName, description, date } = req.body;
    const newEvent = new Event({ eventName, description, date });
    await newEvent.save();
    res.status(201).json({ message: "Event created successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Event creation failed" });
  }
};

const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

module.exports = { createEvent, getEvents };
