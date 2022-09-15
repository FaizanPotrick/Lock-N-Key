const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../schema/User");
const Questions = require("../data/Questions");

router.post("/api/user/registration", async (req, res) => {
  const { team_name, email_address, password } = req.body;
  try {
    const team_name_check = await User.findOne({
      team_name: team_name,
    });
    if (team_name_check !== null) {
      return res.status(201).json("Team Name already exist");
    }
    const email_address_check = await User.findOne({
      email_address: email_address,
    });
    if (email_address_check !== null) {
      return res.status(201).json("Email Address already exist");
    }
    const answers = [
      "00FFFF",
      "A52A2A",
      "ADFF2F",
      "FF0000",
      "FF00FF",
      "FF0700",
    ];

    const user_response = await User.create({
      team_name: team_name,
      email_address: email_address,
      password: bcrypt.hashSync(password, 10),
      answer: answers[Math.floor(Math.random() * answers.length)],
    });
    res
      .cookie("user_id", user_response._id, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .status(200)
      .json("Successfully Registered");
  } catch (error) {
    console.log(error);
    res.status(400).json("Invalid Request");
  }
});

router.put("/api/user/login", async (req, res) => {
  const { email_address, password } = req.body;
  try {
    const user_response = await User.findOne({
      email_address: email_address,
    });
    if (user_response === null) {
      return res.status(201).json("Invalid Credential");
    }
    const passwordMatch = await bcrypt.compare(
      password,
      user_response.password
    );
    if (!passwordMatch) {
      return res.status(201).json("Invalid Credential");
    }
    res
      .cookie("user_id", user_response._id, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .status(200)
      .json("Successfully Logged In");
  } catch (error) {
    console.log(error);
    res.status(400).json("Invalid Request");
  }
});

router.get("/api/user/questions", async (req, res) => {
  const { user_id } = req.cookies;
  try {
    const user_response = await User.findById(user_id);
    res.status(200).json(Questions[user_response.answer]);
  } catch (error) {
    console.log(error);
    res.status(400).json("Invalid Request");
  }
});

router.post("/api/user/submit", async (req, res) => {
  const { user_id } = req.cookies;
  const { answer } = req.body;
  try {
    const user_response = await User.findById(user_id);
    if (user_response.attempted === true) {
      return res.status(201).json("Already Attempted");
    }
    await User.findByIdAndUpdate(user_id, {
      attempted: true,
      is_winner: user_response.answer === answer ? true : false,
    });
    res.status(200).json("Successfully Submitted");
  } catch (error) {
    console.log(error);
    res.status(400).json("Invalid Request");
  }
});

module.exports = router;
