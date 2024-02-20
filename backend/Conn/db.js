const mongoose = require('mongoose')


mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Connection successful")
}).catch(()=>{
    console.log("not connect")
})