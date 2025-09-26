const express = require('express'); //express js - framework - node
const app = express();
const port = 4500;
require('./database/connection');
const cors = require('cors');
const userdata = require('./schema/UserSchema');

app.use(cors()); //middleware pipeline req / res pass
app.use(express.json());

app.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        await userdata.insertOne(req.body);
        res.send('registration successful');
    } catch (err) {
        console.log(err);
    };
});

app.get('/userdata', async (req, res) => {
    try {
        const data = await userdata.find();
        console.log(data);
        res.send(data);
    } catch (err) {
        console.log(err);
    };
});

app.delete('/deleteuser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        await userdata.findByIdAndDelete(id);
        res.send('user info deleted!');
    } catch (err) {
        console.log(err);
    };
});

app.get('/userbyid/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await userdata.find({ _id: id });
        res.send(data);
    } catch (err) {
        console.log(err);
    };
})

app.put('/updatebyid/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await userdata.findByIdAndUpdate(id, req.body);
        res.send('data updated');
    } catch (err) {
        console.log(err);
    };
});

app.post('/login', async (req, res) => {
    try {
        const data = req.body;
        const result = await userdata.find({username: data.username});
        console.log(result);
        if(result.length == 0){
            res.send('user not registered');
        }else{
            if(result[0].password == data.password){
                res.send('login successfull');
            }else{
                res.send('invalid username/password');
            };
        };
    } catch (e) {
        console.log(e);
    };
})

app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
});