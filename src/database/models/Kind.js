const { Schema, model } = require("mongoose");

const KindSquema = new Schema({
  kind: String,
});

const Kind = model("Kind", KindSquema, "kinds");

module.exports = Kind;
