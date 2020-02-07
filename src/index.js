const express = require('express');

const app = express();


app.get('/', 
    function(req, res, next){
	res.send(`Test`);
}
);

app.listen(3000);
