const jsonwebtoken = require('jsonwebtoken')

const secret = 'akaning'
const JWT = {
    // 生成jwt的函数
    generate(value, exprires) {
        return jsonwebtoken.sign(value, secret, { expiresIn: exprires })

    },
    // 校验jwt的函数
    verify(token) {
        try {
            return jsonwebtoken.verify(token, secret)
        } catch (e) {
            return false
        }
    }
    //jsonwebtoken.verify函数用于验证一个已经签名的token的有效性.如果通过验证，会返回token中包含的数据信息。如果验证失败，会抛出一个异常。

}


module.exports = JWT