const express = require("express");
const http = require("http");
require("dotenv").config();


const app = express();
const server = http.createServer(app);
server.listen( process.env.PORT||8000, () => console.log('Listening on port :' + process.env.PORT||8000))