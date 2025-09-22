const express = require('express'); //express js - framework - node
const app = express();
const port = 4500;
require('./database/connection');
const cors = require('cors');
const userdata = require('./schema/UserSchema');

app.use(cors()); //middleware pipeline req / res pass
app.use(express.json());

app.post('/register', async (req, res)=>{
    try{
        console.log(req.body);
        await userdata.insertOne(req.body);
        res.send('registration successful');
    }catch(err){
        console.log(err);
    };
});

app.listen(port, ()=>{
    console.log(`server is running on port no ${port}`);
});