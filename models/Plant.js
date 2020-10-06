const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  nickname: String,
  category: {
    type: String,
    enum: ['cacti', 'leafyplant', 'succulent', 'fern', 'peperomies']
  },
  water: {
    type: String,
    enum: ["low", "medium", "high"],
  },
  sun: {
    type: String,
    enum: ["low", "medium", "high"],
  },
  soil: String,

  description: String,

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  score: Number,

  imgPath: [String],
});

const Plant = mongoose.model('Plant', plantSchema);
module.exports = Plant;
