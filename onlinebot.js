const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is ready!")
})

app.get("/", (req, res) => {
  res.send("Hi Dude");
})

const bot.js = require("express")