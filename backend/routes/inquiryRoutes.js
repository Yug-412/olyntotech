 const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");

/* SAVE CONTACT MESSAGE */
router.post("/", async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ message: "Inquiry saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save inquiry" });
  }
});

/* GET ALL INQUIRIES (ADMIN) */
router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch inquiries" });
  }
});

/* DELETE INQUIRY (OPTIONAL) */
router.delete("/:id", async (req, res) => {
  await Inquiry.findByIdAndDelete(req.params.id);
  res.json({ message: "Inquiry deleted" });
});

module.exports = router;
