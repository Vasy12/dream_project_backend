const express = require('express');

const app = express();


app.get('/', function(req, res, next){
    req.count = 0;
	next();
},
    function(req, res, next){
        req.count++;
	res.send(`${req.count}`);
}
);

app.listen(3000);
