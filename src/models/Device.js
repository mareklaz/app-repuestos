import mongoose from 'mongoose';

const DeviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sn: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    firmware: {
      type: String,
      required: false,
    },
    warranty: {
      start: {
        type: Date,
        required: false,
      },
      end: {
        type: Date,
        required: false,
      },
      type: {
        type: String,
        required: false,
      },
    },
    status: {
      enum: ['nuevo', 'reparado', 'mantenimiento', 'averiado'],
      type: String,
      required: true,
      default: 'nuevo',
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

export default mongoose.models.Device || mongoose.model('Device', DeviceSchema);
