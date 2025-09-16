const express = require('express'); //express js - framework - node
const app = express();
const port = 4500;
require('./database/connection');
const cors = require('cors');
const usersdata = require('./schema/UserSchema');

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('this is my first server that i created');
});

app.post('/register', async (req, res)=>{
    try{
        console.log(req.body);
        await usersdata.insertOne(req.body);
        res.send('user registered successfully');
    }catch(err){
        console.log(err);
    };
});

app.listen(port, ()=>{
    console.log(`server is running on port no ${port}`);
});