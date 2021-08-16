const express = require('express');
const fetchYoutube = require('../utils/fetchYoutube');
const router = express.Router();
router.get('/',(req, res)=>{
    fetchYoutube().then((serverResponse)=>{
        res.status(200).json(serverResponse.data.items)
    })
})
module.exports = router;