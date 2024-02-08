'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const req = require('express/lib/request');


const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080

app.get('/', (req, res, next) => {

    const serverIpAddress = req.socket.localAddress;

    res.status(200).send(`Hello World!  my IP address is ${serverIpAddress}`);
});

app.listen(PORT, () => console.log('Listening on port: ', PORT));