const mongoose = require("mongoose");
const eventsSchema = new mongoose.Schema(
  {
    eventname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "no photo",
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      default: Date.now,
    },
    Duration: {
      type: Number,
      default: 0,
    },
    eventformat: {
      type: String,

      enum: {
        values: ["online", "offline", "hybrid"],
      },
    },
    location: {
      type: String,
      default: "no location",
    },
    eventtype: {
      type: String,
      enum: {
        values: ["festival", "music", "fashion", "government"],
      },
      default: "festival",
    },
    ispublic: {
      type: Boolean,
      default: false,
    },
    isfeatured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: {
        values: ["UNPUBLISHED", "PUBLISHED", "POSTPONED"],
      },
      default: "UNPUBLISHED",
    },
    eventstatus: {
      type: String,
      enum: {
        values: ["PRIVATE", "PUBLIC"],
      },
      default: "PRIVATE",
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

mongoose.model("Event", eventsSchema);
