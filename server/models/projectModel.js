const mongoose = require('mongoose');
const trendController = require('../controllers/trendController');
const validator = require('validator');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    maxLenght: 40,
    minLenght: 2,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  shortDescription: {
    type: String,
    required: true,
    maxLenght: 280,
    minLenght: 10,
  },
  longDescription: {
    type: String,
    required: true,
    maxLenght: 600,
    minLenght: 10,
  },
  investments: {
    type: Number,
    required: true,
    default: 0,
  },
  coverUrl: {
    type: String,
    required: true,
  },
  presentationUrl: {
    type: String,
    required: true,
  },
  screenShotsUrl: [
    {
      type: String,
      required: true,
    },
  ],
  teamMembers: [
    {
      type: String,
    },
  ],
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  demoUrl: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
  },
  trendIndex: {
    type: Number,
    required: true,
    default: 30,
  },
  freeCashFlow: {
    type: Number,
    required: true,
    default: 100000000,
  },
  realisation: {
    type: String,
    required: true,
  },
});

projectSchema.pre('save', async function (next) {
  if (!this.tags) {
    return next(new AppError('Tags are empty', 500));
  }
  this.trendIndex = Math.round(
    await trendController.getIndex(this.tags[0].split(','))
  );
  next();
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
