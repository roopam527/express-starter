const express = require('express');
const mongoose = require('mongoose');
require('./models/User');

const User = mongoose.model('users');//users is a collection name

//add url as first parameter
mongoose.connect('',{ useNewUrlParser: true } )
 
const app = express(); 

app.get('/',async (req,res)=>{
    const data = await User.find({})
    console.log(data)
    res.send(data)
})
const PORT = process.env.PORT || 5000
 app.listen(PORT) 