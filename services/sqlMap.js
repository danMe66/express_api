var sqlMap = {
    user: {
        add: 'insert into users(number,password) values (?,?)',
        select_name: 'SELECT * from users where name = ?',    //查询 name
        select_number:'SELECT * from users where number = ?', //查询number是否存在
        select_password: 'SELECT * from users where password = ?',   //查询 password是否正确
    }
}
module.exports = sqlMap;