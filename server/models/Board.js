var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var boardList = new Schema(
  {
    title: String,
    data: String,
    comment: [
      {
        type: Schema.Types.ObjectId,
        ref: "List",
      },
    ],
    description: String,
    list: {
      type: Schema.Types.ObjectId,
      ref: "List",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Board", boardList);
