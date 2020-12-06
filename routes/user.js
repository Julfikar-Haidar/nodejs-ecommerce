const express = require('express')
const router = express.Router()

const {signup,Julfikar} = require('../controllers/user')
const {userSignupValidator} = require("../validator")
router.post('/signup',userSignupValidator,signup)
router.get('/tanjila',Julfikar)


module.exports = router; 