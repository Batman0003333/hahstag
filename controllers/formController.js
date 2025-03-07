const Form = require("../models/Form");

const submitForm = async (req, res) => {
  try {
    const { userId, eventId, responses } = req.body;
    const newForm = new Form({ userId, eventId, responses });
    await newForm.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Form submission failed" });
  }
};

module.exports = { submitForm };
