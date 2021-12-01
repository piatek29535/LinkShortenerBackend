// dotenv file require
require('dotenv').config()

// Other imports
const express = require('express');
const app = express();
const port  = 3000;
app.use(express.json())
const router = require('./router/router')
const database = require('./database/database')

// Routes from external router
app.use("/", router)

app.get('/asdasd', async (req, res) => {
    try {
        await database.authenticate();
        console.log("Working tho!")
    } catch (error) {
        console.log("asdasdasd")
    }

    res.json({"message":"Database is working fine, but not in router..."})
})

// app.post('/shorten',(req, res) => {

//     request({
//         uri:'https://api.rebrandly.com/v1/links',
//         method:"POST",
//         body:JSON.stringify(linkRequest),
//         headers:requestHeaders
//     }, (err, response, body) => {
//         let link = JSON.parse(body)
//         res.json({
//             "message":link
//         })
//     })

// })

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})