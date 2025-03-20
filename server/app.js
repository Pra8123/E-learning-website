const express = require("express");
const mongoose = require('mongoose');
const routes = require('./Routes/index');
require('dotenv').config(); 
const app = express();
const port = 5407;


const mongoURI = process.env.MONGO_URI;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type', 'Authorization');
    next();
})

app.use('/', routes);

// mongoose.connect(
//     'mongodb://localhost:27017/elearning',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// ).then(success => {
//     console.log("✅ MongoDB Connected Successfully");

//     app.listen(port, () => {
//         console.log(`Server is running on ${port}`);
//     });

// }).catch(error => {
//     console.log("❌ MongoDB Connection Error: " + error);
// });

mongoose.connect(
    mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(success => {
    console.log("✅ MongoDB Connected Successfully");

    app.listen(port, () => {
        console.log(`Server is running on ${port}`);
    });

}).catch(error => {
    console.log("❌ MongoDB Connection Error: " + error);
});
