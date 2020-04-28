require('dotenv').config();
const express= require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 9090;
const { Client } = require('pg');

// Destructure env file.
// const {SERVER_PORT} = process.env;
const {
  DATABASE_USER ,
  DATABASE_PASSWORD ,
  DATABASE_HOST ,
  DATABASE_PORT ,
  DATABASE_NAME 
} = process.env
console.log( {DATABASE_USER})

// Connect to Database.

const client = new Client({
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  database: DATABASE_NAME,
});

client.connect()
.then(() => console.log("connected -----------"))
.then(() => client.query("select * from users"))
.then((results) => console.log("results from query", {r:results.rows}))
.catch(e=> console.log("error ----------", e))
.finally(()=>client.end());

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