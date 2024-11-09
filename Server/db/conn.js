const mongoose = require('mongoose');

const DB = process.env.DATABASE;
console.log('Database', DB);
mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((err) => console.log(  err ,'Connection Unsuccessful :('));
