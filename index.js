const express = require("express");
const app = express();
const port = 5000;
const mongoURI = require('./dev');

const mongoose = require("mongoose");
mongoose.connect(
  mongoURI.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
