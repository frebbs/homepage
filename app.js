// Bring in express and create the app
const express = require('express');
const app = express()

// Load DOTENV config
require('dotenv').config();

// Pretty the console with chalk
const chalk = require('chalk');

// Set the port from env, if not set, default the port to 3000
const PORT = process.env.SERVER_PORT || 3000;

// Bring in the routers
const rootRouter = require('./routes/rootRouter');

// Bring in some middleware for express
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the public directory for static files
app.use(express.static('public'));



// Use the routes

app.use('/', rootRouter);






app.listen(PORT, () => {
    console.log(chalk.blue(`Running on localhost:${PORT}`));
})