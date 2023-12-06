const Team = require("../model/teamModel");

const createTeam = async (req, res) => {
  try {
    const newTeam = new Team(req.body);
    const createdTeam = await newTeam.save();
    res
      .status(201)
      .json({ message: "Team created successfully.", team: createdTeam });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create team", error: err.message });
  }
};

const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find({});
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTeamById = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id);
    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ message: "Team Not Found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to get team", error: error.message });
  }
};

module.exports = {
  createTeam,
  getAllTeams,
  getTeamById,
};
