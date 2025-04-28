const mongoose = require('mongoose');

const patentConsultationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  industry: { type: String, required: true }, // E.g. 'Technology', 'Healthcare', etc.
});

module.exports = mongoose.model('PatentConsultation', patentConsultationSchema);

