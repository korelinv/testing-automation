const express = require('express');

let app = express();

app.use(express.static('shared'));

app.listen(8080);
