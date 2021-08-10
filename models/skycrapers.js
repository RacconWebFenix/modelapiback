const mongoose = require("mongoose");

const skycraperSchema = new mongoose.Schema({
  nome: {
    type: String,
    requerid: true,
  },
  altura: {
    type: String,
    requerid: true,
  },
  localizacao: {
    type: String,
    requerid: true,
  },
  desc: {
    type: String,
    requerid: true,
  },
  imagemURL: {
    type: String,
    requerid: true,
  },
  created_at: {
    type: Date,
    requerid: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("skycraper", skycraperSchema, "skycraper");
