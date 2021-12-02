const axios = require('axios').default;
const express = require('express');
const router = express.Router();
const { linkRequest, requestHeaders } = require('../rebrandly/rebrandly_config')
const sequelize = require('../database/database')

// These imports are required for sequelize.sync() function
const User = require('../database/User')
const Link = require("../database/Link")

router.get('/',  async (req, res) => {
    res.json({"message":"Hello from router"})
})

router.get('/shorten', async (req, res) => {
    
    try {
        await sequelize.authenticate()
        console.log("Database connection established!")
        await sequelize.sync({alter:true})
    } catch (error) {
        console.log("We hae got error here!",error)
    }

    axios({
        method:'POST',
        url:'https://api.rebrandly.com/v1/links',
        data:JSON.stringify(linkRequest),
        headers:requestHeaders
    }).then(res => {
        console.log(res.data)
    })

    res.json({"message":"Hello from router POST method!"})
})

module.exports = router;