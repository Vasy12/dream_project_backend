const express = require('express');

const app = express();


app.get('/', 
    function(req, res, next){
        req.count++;
	res.send(`Test`);
}
);

app.listen(3000);
