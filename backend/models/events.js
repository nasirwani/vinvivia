const mongoose = require("mongoose");
const eventsSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    eventLogo: {
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
   eventDuration: {
      type: Number,
      default: 0,
    },
    eventFormat: {
      type: String,

      // enum: {
      //   values: ["Online", "in-Person", "Hybrid"],
      // },
    },
    location: {
      type: String,
      default: "no location",
    },
    tenantName: {
      type: String,
      default: "no tenant name",
    },
    eventtype: {
      type: String,
      // enum: {
      //   values: ["festival", "music", "fashion", "government"],
      // },
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
