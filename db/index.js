const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOD_URI, { useNewUrlParser: true}, err => {
    console.log(err || 'successfully connected to MLab');
} );

module.exports = mongoose;