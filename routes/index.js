const userApi = require('./userApi')

module.exports = function RouterModule (app) {
  //定义统一的路由前缀
  app.use('/v1/apidemo', userApi)
};
