// Import required modules
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
// Require database connection
require("./Conn/db");

// Define the port
const port = 5000;

// Configure CORS
const corsOptions = {
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Parse JSON request bodies
app.use(express.json());

// Define routes
app.use("/api/contact", require("./routers/contact"));
app.get("/",(req,res)=>{
    res.send("hello world")
})

// Start the server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
