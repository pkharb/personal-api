require('dotenv').config();

const express = require('express'),
      app = express(),
      PORT = process.env.PORT || 3000,
      routesInfo = require('./models/endpoint'),
      path = require('path');


// database connection
require('./db');

// app middleware
app.use(express.static(path.join(__dirname, 'public', 'views')));
app.use(express.json());

// routes
const projectRouter = require('./routers/projectRouter');
const profileRouter = require('./routers/profileRouter');

app.use('/api/projects', projectRouter);
app.use('/api/profile', profileRouter);
app.use('/api/info', (req, res) => {
    res.json({ success: true, routesInfo});
});
app.get('/', (req, res) => {
    res.sendFile('index.html');
});
// listen on PORT
app.listen(PORT, err => {
    console.log(err || `server listening to ${PORT}`);
});