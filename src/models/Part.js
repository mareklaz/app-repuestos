import mongoose from 'mongoose';

const PartSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sn: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    virtuals: true,
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);

export default mongoose.models.Part || mongoose.model('Part', PartSchema);
