const
    Project = require('../controllers/project'),
    express = require('express'),
    router = express.Router();

// Project routes
router.get('/', Project.index);
router.post('/', Project.create);
router.get('/:id', Project.show);
router.patch('/:id', Project.update);
//router.put('/:id', Project.replace);
router.delete('/:id', Project.destroy);

// export router
module.exports = router;