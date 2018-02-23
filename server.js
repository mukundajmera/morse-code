//importing libs
var express = require('express');
var bodyParser = require('body-parser');

//for get and post module working using route.js 
var route = require('./routes/route.js');

//configruing port
var port = process.env.PORT || 80 ;

//invoking server
var app = express();

//setting body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:false
}));

//setting views to ejs 
app.set('view engine','ejs');

//setting static path to public folders
app.use(express.static('public'));

app.get('/',route.index);



app.listen(port,function(){
	console.log("Listening to port "+port);
});


