const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Assuming your model is in a file called Contact.js

router.post("/addcontact", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    const newContact = await Contact.create({
      firstName,
      lastName,
      email,
      message
    });

    res.status(201).json({ message: 'Contact added successfully', contact: newContact });
  } catch (error) {
    console.error('Error adding contact:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;