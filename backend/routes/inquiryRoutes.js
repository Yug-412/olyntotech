import express from "express";
import Inquiry from "../models/Inquiry.js";

const router = express.Router();

/* SAVE INQUIRY */
router.post("/", async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();

    res.status(201).json({
      success: true,
      message: "Inquiry saved successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

/* GET ALL INQUIRIES (SHARED DB) */
router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

/* DELETE INQUIRY (REAL DB DELETE) */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Inquiry.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ success: false });
    }

    res.json({
      success: true,
      message: "Inquiry deleted from database",
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

export default router;
