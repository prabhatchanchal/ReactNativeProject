const express = require("express");

const mongoose = require("mongoose");

const router = express.Router();

const User = mongoose.model("User");

// login route
router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(422).send({ error: "must provide email or password" });
  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).send({ error: "email not found" });
    await user.comparePassword(password);
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: "invalid password or email" });
  }
  res.status(200).send({ message: "ok" });
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = new User({ email, password, name });
    await user.save();
    res.send("ok");
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post("/search", async (req, res) => {
  const { name } = req.body;
  try {
    const user = await User.find({ name });
    res.send(user);
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
