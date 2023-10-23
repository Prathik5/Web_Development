const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "UserName cannot be empty"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be empty"],
  },
});

userSchema.statics.findAndValidate = async function (username, password) {
  const foundUser = await this.findOne({ userName: username });
  if (!foundUser) {
  }
  const isValid = await bcrypt.compare(password, foundUser.password);
  return isValid ? foundUser : false;
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model("User", userSchema);
