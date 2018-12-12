const Project = require('../models/project');

module.exports = {
    index : (req, res) =>{
        Project.find({}, (err, projects) => {
            if (err) res.json({ success: false, err});
                     res.json({ success: true, projects});
        });
    },
    create: (req, res) => {
        Project.create(req.body, (err, newProject) => {
            if (err) res.json({ success: false, err});
                     res.json({ success: true, newProject});
        });
    },
    show: (req, res) => {
        Project.findById(req.params.id, (err, project) => {
            if (err) res.json({ success: false});
                 res.json({ success: true, project});
        }); 
    },
    update: (req, res) => {
        Project.findByIdAndUpdate(req.params.id, req.body, (err, updatedProject) => {
            if (err) res.json({ success: false});
                 res.json({ success: true, updatedProject});
        }); 
    },
    destroy: (req, res) => {
        Project.findByIdAndDelete(req.params.id, (err, deletedProject) => {
            if (err) res.json({ success: false, err});
                     res.json({ succes: true, deletedProject});
        });
    }
}