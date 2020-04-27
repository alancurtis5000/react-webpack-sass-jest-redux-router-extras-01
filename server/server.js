require('dotenv').config();
const express= require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 9090;

// Destructure env file.
// const {SERVER_PORT} = process.env;

// Connect to Database.
// use massive

// Middleware import.
const bodyParser= require('body-parser');

// Top Level Middleware.
app.use( express.static( `${__dirname}/../build` ) );
app.use(cors());
app.use(bodyParser.json());


// Controller imports.
const test_controller = require('./controllers/test_controller');
const users_controller = require('./controllers/users_controller');

// Endpoints.
app.get('/api/test', test_controller.get);

app.get('/api/users', users_controller.get);
app.post('/api/users', users_controller.post);

// Run Server.
app.listen(port, ()=>console.log(`running on port: ${port}`));