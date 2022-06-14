const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./authRouter");
const mainRouter = require("./mainRouter");
const profileRouter = require("./profileRouter");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/main", mainRouter);

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Admin:admin@cluster0.qqxj2.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
