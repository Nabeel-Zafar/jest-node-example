const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Score = new Schema({
    fact: {
      type: String
   },
   length: {
      type: Number
   }
}, {
   collection: 'score'
}) 
module.exports = mongoose.model('Score', Score)