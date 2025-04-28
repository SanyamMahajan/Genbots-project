const PatentConsultation = require('../models/patentConsultation.model');

exports.getAllPatentConsultations = async (req, res) => {
  try {
    const consultations = await PatentConsultation.find();
    res.status(200).json(consultations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPatentConsultation = async (req, res) => {
  const { title, content, industry } = req.body;

  const newConsultation = new PatentConsultation({
    title,
    content,
    industry,
  });

  try {
    await newConsultation.save();
    res.status(201).json(newConsultation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
