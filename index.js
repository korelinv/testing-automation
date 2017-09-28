const express = require('express');

let app = express();

app.use(express.static('slides'));

app.listen(8080);
