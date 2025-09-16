const mongoose = require('mongoose');
const uri = "mongodb+srv://zebsoft:KO1yATRwKBt4sJ1y@zebsoft.iyoy4go.mongodb.net/test";

mongoose.connect(uri).then(()=>{
    console.log('database connected');
});