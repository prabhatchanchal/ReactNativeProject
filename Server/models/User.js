const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
});

userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  return new Promise((resolve, reject) => {
    if (user.password !== candidatePassword) {
      return reject(false);
    }
    resolve(true);
  });
};

mongoose.model("User", userSchema);
