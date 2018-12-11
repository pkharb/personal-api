const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    languages: String,
    dateCreated: String,
    status: String
}, { timestamps: true});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;