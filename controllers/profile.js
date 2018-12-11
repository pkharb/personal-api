const Profile = require('../models/profile');

module.exports = {
    show: (req, res) => {
                    res.json({ success: true, Profile});
    }
}