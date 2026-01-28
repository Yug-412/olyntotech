import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import inquiryRoutes from "./routes/inquiryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* DB CONNECTION */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

/* ROUTES */
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.use("/api/inquiries", inquiryRoutes);
app.use("/api/admin", adminRoutes);

/* SERVER */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
