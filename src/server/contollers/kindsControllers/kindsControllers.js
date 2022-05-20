const Kind = require("../../../database/models/Kind");

const getKinds = async (req, res) => {
  const kinds = await Kind.find();
  res.status(200).json(kinds);
};
module.exports = { getKinds };
