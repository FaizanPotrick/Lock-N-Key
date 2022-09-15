const express = require("express");
const router = express.Router();
const User = require("../schema/User");

router.get("/api/admin/users", async (req, res) => {
  const user_response = await User.find();
  res.status(200).json(user_response);
});

router.get("/api/admin/winners", async (req, res) => {
  const user_response = await User.find({
    attempted: true,
    is_winner: true,
  });
  res.status(200).json(user_response);
});

module.exports = router;
