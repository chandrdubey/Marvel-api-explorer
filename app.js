const express = require('express');
const app     =  express();
const passport = require('passport');
const db  = require('./src/backend/config/mongoose');  // get mongoose configratuiton

require('dotenv').config();
const routes =  require('./src/backend/routes'); // getting routes 

const cors    = require('cors'); // express middleware which used to cross-orign requset

const port  = process.env.PORT || 5000; //setting up our port

app.use(cors());
app.use(express.json()); //it used to convert the body of a requset in json format

app.use(passport.initialize()); //intialising passport globally
app.use(passport.session());  // it will maintain session for us
app.use('/',routes);     // it handle the all the routes


app.listen(port , (err) =>{
    if(err)
    {
        console.log(`there is an error ${err}`);
    }
    console.log(`the server is running on ${port}`);
});

