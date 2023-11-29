const express= require('express');
const app =  express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sachinrao9450:Cel123451234@cluster0.ogdvtio.mongodb.net/').then(()=>app.listen(4500, ()=>{
    console.log('server is running');
})).then(()=>console.log("log is here")).catch((err)=> console.log(err, "error is here"));

app.use('/', (req, res)=>{
 res.send("Hello welcome to the node phhjhgjjroject");
});

// app.listen(4500, ()=>{
//     console.log('server is running');
// })