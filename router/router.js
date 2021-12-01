const axios = require('axios').default;
const express = require('express');
const router = express.Router();
const { linkRequest, requestHeaders } = require('../rebrandly/rebrandly_config')

router.get('/',  async (req, res) => {
    res.json({"message":"Hello from router"})
})

router.get("/another", (req, res) => {
    res.json({"message":"testing another route"})
})

router.get('/shorten', (req, res) => {
    
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