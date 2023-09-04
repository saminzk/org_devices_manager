const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userRole:{
      type: "string",
    }
  },
  {
    timeStamps: true,
  }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
