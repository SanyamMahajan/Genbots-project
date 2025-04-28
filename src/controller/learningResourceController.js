const LearningResource = require('../models/learningResourceModel');

exports.getAllLearningResources = async (req, res) => {
  try {
    const resources = await LearningResource.find();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLearningResource = async (req, res) => {
  const { title, content, category } = req.body;

  const newResource = new LearningResource({
    title,
    content,
    category,
  });

  try {
    await newResource.save();
    res.status(201).json(newResource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
