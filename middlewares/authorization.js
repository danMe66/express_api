const logger = require("log4js").getLogger("middlewares/authorization");

//做一个检查，提前拦截错误的方法，加到路由地址的后边router.get('/:webinarId/online_audiences', checkAuth, webinarController.getOnlineAudienceList.bind(webinarController))
function checkKeys(next) {
    console.log('*****检查验证*****')
    next()
}

module.exports = checkKeys;
