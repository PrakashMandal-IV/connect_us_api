const express = require("express");
const http = require("http");
const { init } = require("./middleware/middleware");
const { databaseConnection } = require("./middleware/DBConnection");
require("dotenv").config();


const app = express();

databaseConnection()
init(app);

const server = http.createServer(app);

server.listen( process.env.PORT||8000, () => console.log('Listening on port :' + process.env.PORT||8000))