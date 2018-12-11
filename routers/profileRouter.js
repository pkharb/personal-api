const
    Profile = require('../controllers/profile'),
    express = require('express'),
    router = express.Router();

// Profile route
router.get('/', Profile.show);

module.exports = router;