import axios from "axios";

function upload(path, userForm) { 
    const params = new FormData();
    // FormData是一个用于存储和发送表单数据的Web API接口。它可以用来创建一个表单对象，将键值对添加到其中，并将该表单数据发送给服务器。
    // 在使用FormData对象发送POST请求时，浏览器会自动设置正确的请求头，并将数据编码为multipart/form-data格式，以确保文件的正确传输。
    for (let i in userForm) {
        params.append(i, userForm[i]);
    }
    return axios.post(path, params, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res=>res.data)
}

export default upload