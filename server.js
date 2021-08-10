const express = require("express");
const dotenv = require("dotenv");
const skycraperRouter = require("./routes/skycraper.routes");
const port = 3002;
const mongoose = require("mongoose");
const Skycraper = require("./models/skycrapers");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

process.env.USERDB;
process.env.PWDDB;

mongoose.connect(
  `mongodb+srv://${process.env.USERDB}:${process.env.PWDDB}@clusterbluee.48pmq.mongodb.net/skycrapers?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(skycraperRouter);

app.listen(port, () => {
  console.info("API Started!");
});
