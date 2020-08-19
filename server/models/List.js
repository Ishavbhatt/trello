var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var listSchema = new Schema(
  {
    mTitle: String,
    card: [
      {
        type: Schema.Types.ObjectId,
        ref: "Board",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", listSchema);
