const logger = require("log4js").getLogger("services/apiService");
const modules = require("../config/mysqlConfig");
const BaseController = require('../controllers/baseController');
const mysql = require("mysql");
const $sql = require("./sqlMap");
//连接数据库
const conn = mysql.createConnection(modules.connection);

/**
 * 数据处理层
 * 主要对数据库进行一系列的操作
 */
class ApiService extends BaseController {
  constructor() {
    super();
    this.baseController = new BaseController();
  }
  //注册
  userRegister (number, password) {
    return new Promise((resolve, reject) => {
      try {
        const select_number = $sql.user.select_number;
        const sql_add = $sql.user.add;
        conn.query(select_number, number, function (err, results) {
          if (err) logger.error(error);
          if (results[0] === undefined) {
            conn.query(sql_add, [number, password], function (err, addData) {
              if (err) logger.error(error);
              if (results) {
                resolve(BaseController(constructor));
                console.log("您的信息注册成功！");
              }
            });
          } else {
            //当前注册name与数据库重复时，返回-1:提示已存在的用户名！
            resolve("已存在的账号!");
            console.log("已存在的账号!");
          }
        });
      } catch (error) {
        reject(error)
      }
    });
  }

  //登陆
  userLand (number, password) {
    return new Promise((resolve, reject) => {
      try {
        const sql_number = $sql.user.select_number;
        const sql_pwd = $sql.user.select_password;
        conn.query(sql_number, number, function (err, results) {
          if (err) logger.error(error);
          if (results[0] === undefined) {
            resolve({ msg: "您输入的的账号不正确！" })
            console.log("您输入的的账号不正确！");
          } else {
            conn.query(sql_pwd, password, function (err, results) {
              if (err) logger.error(error);
              if (results[0] === undefined) {
                resolve({ msg: '密码输入错误！' })
                console.log("密码输入错误！");
              } else {
                resolve({ msg: "登陆成功" })
                console.log("用户" + number + "登陆成功");
              }
            });
          }
        });
      } catch (error) {
        reject(error)
      }
    });
  }
}

module.exports = ApiService;