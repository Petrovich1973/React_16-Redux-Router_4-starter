var express = require('express'),
cors = require('cors'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
app = express(),
path = require('path'),
port = process.env.PORT || 4848;




app.use( bodyParser.json() );

app.use( methodOverride() );

app.use( cors({ origin: '*' }) );

app.use(express.static(__dirname + '/../public'));

app.get(/.*/, function (req, res) {
    res.sendFile( path.resolve(__dirname + '/../public/', 'index.html') );
});


//some use


app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found -----------');
});



app.listen(port);
console.log(`Server started! At http://localhost:${port}`);