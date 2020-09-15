const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/test', function(req, res){
  res.status(200).json({
        message: `This works :)`
    });
});

module.exports = app;
