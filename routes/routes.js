let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next){
    res.json({'message': 'hello, I am an Azure App!'})
})

module.exports = router