const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://ayush13:ZYD9KR2GX8VePYoB@developwithayush.qj2rqpt.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connection successful")
}).catch(()=>{
    console.log("not connect")
})