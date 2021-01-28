const express = require('express');
// CommonJS module syntax

// another syntax: if you have ES 2015 modules
// import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.send({bye : 'buddy'});
});

const PORT = process.env.PORT || 5000;
// dynamic port, or default using 5000

app.listen(PORT);
// port 

// route: localhost:5000