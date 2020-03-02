var express = require('express');
var app = express();
var port = 3000;
app.get('/', (request, response) => response.send('<h1>Hello Dog</h1>'));
app.listen(port, () => console.log('Server listening on port' + port));