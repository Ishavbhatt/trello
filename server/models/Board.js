var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var boardSchema = new Schema(
  {
    board: {
      type: Array,
    },
    name: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Board", boardSchema);
