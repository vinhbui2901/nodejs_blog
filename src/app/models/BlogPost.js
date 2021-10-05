const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  name:{type: String}, 
  discription:{type: String},
  details:{type: String}, 
  image:{type: String},
  videoId:{type: String}, 
},{
  timestamps: true
});

module.exports = mongoose.model('BlogPost', BlogPost);