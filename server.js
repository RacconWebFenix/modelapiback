const express = require("express");
const dotenv = require("dotenv");
const skycraperRouter = require("./routes/skycraper.routes");
const mongoose = require("mongoose");
const Skycraper = require("./models/skycrapers");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

process.env.USERDB;
process.env.PWDDB;
process.env.PORT;
mongoose.connect(
  "mongodb+srv://" +
    process.env.USERDB +
    ":" +
    process.env.PWDDB +
    "@clusterbluee.48pmq.mongodb.net/skycrapers?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const corsOptions = {
  origin: "https://app-reacttest.herokuapp.com/",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(skycraperRouter);

app.listen(process.env.PORT || 5000, () => {
  console.info("API Started!");
});
