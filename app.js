const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const sendMail = require('./controller/sendMail');

app.get('/', (req,res)=>{
    res.send('API is Running');
});

app.post('/email', sendMail);

const start = async () =>{
    try {
        app.listen(port, () =>{
            console.log(`Port is Working:${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();

