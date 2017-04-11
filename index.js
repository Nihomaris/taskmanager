var express = require('express');
var auth = require('./server/auth');

var app = express();
app.use(express.static('public'));

require('./server/routes/routes')(app);

app.listen(5666, function () {
	console.log("App listening on port 5666");
});

//# sourceMappingURL=index.js.map