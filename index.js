// dotenv file require
require('dotenv').config()

// Other imports
const express = require('express');
const app = express();
const port  = 3000;
const router = require('./router/router')

app.use(express.json())
// Routes from external router
app.use("/", router)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})