// Import required modules
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
// Require database connection
require("./Conn/db");

// Define the port
const port = process.env.PORT;

// Configure CORS
const corsOptions = {
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Parse JSON request bodies
app.use(express.json());

// Define routes
app.use("/api/contact", require("./routers/contact"));

// Start the server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
