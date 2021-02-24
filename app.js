const express = require('express');
const app     =  express();
const passport = require('passport');
const db  = require('./src/backend/config/mongoose');  // get mongoose configratuiton
// const passportLocal =require("./src/backend/config/passport_local_strategy");
const passportJwt = require("./src/backend/config/passport-jwt-strategy");

require('dotenv').config();
const routes =  require('./src/backend/routes'); // getting routes 

const cors    = require('cors'); // express middleware which used to cross-orign requset

const PORT  = process.env.PORT || 5000; //setting up our port
// app.get('/', (req, res)=>{
//     res.send("welcome to our wbesite");
// });
app.use(cors());
app.use(express.json()); //it used to convert the body of a requset in json format

app.use('/',routes);  
// app.use('*', (req, res)=>{
//     res.send("hello");
// });   // it is used to handle  all routes

app.listen(PORT , (err) =>{
    if(err)
    {
        console.log(`there is an error ${err}`);
    }
    console.log(`the server is running on ${PORT}`);
});

