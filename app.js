const express = require('express');

const app     =  express();

require('dotenv').config();

const cors    = require('cors'); // express middleware which used to cross-orign requset

const port  = process.env || 3000;

app.use(cors());

app.use(express.json());

app.listen(port , (err) =>{
    if(err)
    {
        console.log(`there is an error ${err}`);
    }
    console.log(`the server is running on ${port}`);
});

