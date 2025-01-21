import User from "../models/user.mjs";

// Seed function to add a test user
export const seed = async (req, res) => {
  try {
    const user = new User({
      name: "Test User",
      email: "testuser@example.com",
      password: "password123",
      gradeLevel: 5,
      createdPlaylists: [],
    });
    await user.save();
    res.status(201).send("User seeded successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get all users
export const getEntries = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default { seed, getEntries };
