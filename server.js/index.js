const express = require("express");
const app = express();

const mongoose = require("mongoose");

const cors = require("cors");

const User = require("./modal/user.modal");

const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/julie-cabin");

app.post("/api/register", async (req, res) => {
  console.log(req.body);

  try {
    await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "fail", error: "Duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  console.log(req.body);

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        email: user.email,
      },
      "chinmay007"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.listen(5000, () => {
  console.log("hey");
});
