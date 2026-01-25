import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ===============================
   MIDDLEWARE
================================ */
app.use(cors());
app.use(express.json());

/* ===============================
   MONGODB CONNECTION
================================ */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

/* ===============================
   ADMIN DATA (STATIC)
================================ */
const admins = [
  { id: "1", username: "yash", password: "Yash@123" },
  { id: "2", username: "jeel", password: "Jeel@123" },
  { id: "3", username: "yug", password: "Yug@1234" },
];

/* ===============================
   INQUIRY MODEL
================================ */
const inquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

const Inquiry = mongoose.model("Inquiry", inquirySchema);

/* ===============================
   ROUTES
================================ */

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ADMIN LOGIN 🔐  ← WRITE HERE
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  const admin = admins.find(
    (a) => a.username === username && a.password === password
  );

  if (!admin) {
    return res.status(401).json({
      success: false,
      message: "Invalid username or password",
    });
  }

  res.json({
    success: true,
    adminId: admin.id,
    username: admin.username,
  });
});

// SAVE inquiry (from contact form)
app.post("/api/inquiries", async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// VIEW inquiries (admin)
app.get("/api/inquiries", async (req, res) => {
  const data = await Inquiry.find().sort({ createdAt: -1 });
  res.json(data);
});

/* ===============================
   SERVER
================================ */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
