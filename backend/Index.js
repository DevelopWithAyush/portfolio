const express = require('express')
const cors = require('cors')
const app = express()
require("./Conn/db")
const port = 5000

app.use(cors());
app.use(express.json())
app.use("/api/contact",require("./routers/contact"))

app.listen(port,()=>{
    console.log("app listen on the port 5000")
})