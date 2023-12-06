const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  teamName: String,
  team: [
    {
      // Embed the user schema directly within the team schema
      _id: String,
      id: String,
      first_name: String,
      last_name: String,
      email: String,
      gender: String,
      avatar: String,
      domain: String,
      available: Boolean,
    },
  ],
});

module.exports = mongoose.model("Team", teamSchema);
