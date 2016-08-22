var express = require("express");

var app = express();

app.use("/assets", express.static( __dirname + "/assets") );
app.use("/app", express.static( __dirname + "/app") );
app.use("/node_modules", express.static( __dirname + "/node_modules") );

app.get("/backoffice", function( req, res ) {
	res.sendFile( __dirname + "/app/index.html" );
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
