require('dotenv').config();
const massive = require('massive');
const express= require('express');
const app = express();
const cors = require('cors');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if ( process.env.NODE_ENV === 'test' ){
  require('dotenv').config({path: '.env.test'});
} else if (process.env.NODE_ENV === 'development'){
  require('dotenv').config({path: '.env.development'});
}
const port = process.env.PORT || 9090;

// Destructure env file.
// const {SERVER_PORT} = process.env;
const {
  DATABASE_USER ,
  DATABASE_PASSWORD ,
  DATABASE_HOST ,
  DATABASE_PORT ,
  DATABASE_NAME 
} = process.env

// Connect to Database.
const client = {
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  database: DATABASE_NAME,
};

massive(client)
.then((db)=>{console.log("Database Connected"); app.set('db', db) })
.catch((err)=>{console.log(err)})

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
app.get('/api/usersByName', users_controller.getUsersByName);
app.post('/api/users', users_controller.post);
app.put('/api/users', users_controller.put);
app.delete('/api/users', users_controller.delete);

// Run Server.
app.listen(port, ()=>console.log(`running on port: ${port}`));