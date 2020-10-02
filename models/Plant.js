const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const plantSchema = new Schema({
  nickname: String,
  category: {
    type: String,
    enum: ['cactus', 'flower', 'succulent', 'herb', 'homeplant']
  },
  water: {
    type: String,
    enum: ['low', 'medium', 'high']
  },
  sun: {
    type: String,
    enum: ['low', 'medium', 'high']
  },
  trim: Boolean,

  description: String,

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  score: Number,

  imgPath: [String],

});

const Plant = mongoose.model('Plant', plantSchema);
module.exports = Plant;
