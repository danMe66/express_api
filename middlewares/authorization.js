const logger = require("log4js").getLogger("middlewares/authorization");
const BaseController = require('../controllers/baseController')

/**
 *做一个检查，提前拦截错误的方法，加到路由地址的后边router.get('/:webinarId/online_audiences', checkAuth, webinarController.getOnlineAudienceList.bind(webinarController))
 *自定义验证规则
 * @param req
 * @param res
 * @param {*} next
 */
function checkParameter (req, res, next) {
    //console.log('*****自定义验证规则*****')
    const number = req.body.number;
    const password = req.body.password;
    if (!number || number === "" || !password || password === "") {
        return res.status(201).json({
            msg: '请检验您的信息是否全部填写！'
        })
    }
    const myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(number)) {
        return res.status(201).json({
            msg: '请输入正确的手机号码！'
        })
    }
    next()
}

module.exports = checkParameter;
