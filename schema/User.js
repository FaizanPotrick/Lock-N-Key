const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    team_name: {
      type: String,
      unique: true,
      required: true,
      maxLength: 30,
      lowercase: true,
    },
    email_address: {
      type: String,
      unique: true,
      required: true,
      maxLength: 30,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    attempted: {
      type: Boolean,
      default: false,
      required: true,
    },
    is_winner: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
