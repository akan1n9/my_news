var express = require('express');
const UserController = require('../../controllers/admin/UserController');
var UserRouter = express.Router();
//图片上传
const multer = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })//传过来的文件放到哪个文件夹下,创建multer中间件
// 在Node.js服务器中，当用户上传文件时，服务器需要接收并保存这些文件。
//multer是一个Node.js中间件，它使得处理文件上传变得简单和灵活。用于处理 multipart/form-data 类型的表单数据


/* GET home page. */
UserRouter.post("/adminapi/user/login", UserController.login)
UserRouter.post("/adminapi/user/upload", upload.single('file'), UserController.upload)
UserRouter.post("/adminapi/user/add", upload.single('file'), UserController.add)
UserRouter.get("/adminapi/user/list", UserController.getList)
UserRouter.get("/adminapi/user/list/:id", UserController.getList)

UserRouter.put("/adminapi/user/list/:id", UserController.putList)

UserRouter.delete("/adminapi/user/list/:id", UserController.delList)




module.exports = UserRouter;
