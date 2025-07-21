const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  link: { type: String },
  tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema); 