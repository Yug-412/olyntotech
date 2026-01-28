import express from "express";

const router = express.Router();

const admins = [
  { id: "1", username: "yash", password: "Yash@123" },
  { id: "2", username: "jeel", password: "Jeel@123" },
  { id: "3", username: "yug", password: "Yug@1234" },
];

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const admin = admins.find(
    (a) => a.username === username && a.password === password
  );

  if (!admin) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  res.json({
    success: true,
    adminId: admin.id,
    username: admin.username,
  });
});

export default router;
