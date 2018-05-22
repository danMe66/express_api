const express = require('express')
const checkAuth = require('../middlewares/authorization')
const router = express.Router()
const ApiController = require('../controllers/apiController')

const apiController = new ApiController()

/**
 * 在这里定义路由
 */

//登陆注册路由
router.post('/users', checkAuth, apiController.userLogin.bind(apiController))

module.exports = router