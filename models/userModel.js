import mongoose from 'mongoose';

const userSChema = new mongoose.Schema(
  {
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: 'true',
    },
    password: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      default: true,
    },
    root: {
      type: 'boolean',
      default: false,
    },
    avatar: {
      type: 'string',
      default:
        'http://www.brunningonline.net/simon/blog/archives/South%20Park%20Avatar.jpg',
    },
  },
  {
    timestamps: true,
  }
);

let Dataset = mongoose.models.user || mongoose.model('user', userSChema);
export default Dataset;
