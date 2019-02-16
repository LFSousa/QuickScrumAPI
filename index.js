const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const consign = require('consign');
const app = express();
const http = require('http').Server(app);
const log = require('./resource/utility/log');
const config = require('./resource/constant/config');

app.use(cors());
app.use(bodyParser.json());
consign({'cwd': 'app'}).then('dao').then('route').into(app);


http.listen(config.server_port, () => {

    log.info("Started on port", config.server_port);
});