// Require needed modules
const express = require('express');
const morgan = require('morgan');

//Require our routers
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

// Set port and hostname of server
const hostName = 'localhost';
const port = 3000;

// Build our application
const app = express();

// Use morgan for logging stuff in the console
app.use(morgan('dev'));

// Use our routers
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

// Serve static files
app.use(express.static(__dirname + '/public'));

// Start the server
app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
});
