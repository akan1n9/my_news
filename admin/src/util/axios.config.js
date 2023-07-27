
import axios from 'axios'
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    // 当用户通过身份验证后，服务器会颁发一个Bearer token给客户端，然后客户端可以在每个请求的头部中使用该令牌来访问受保护的资源。
    //Bearer token通常是一个长字符串，类似于一个加密的令牌或密码，客户端在请求时必须将其包含在Authorization头部中，以标识自己的身份和权限。
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // console.log(response.headers)
    const {authorization } = response.headers
    authorization && localStorage.setItem("token",authorization)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const {status} = error.response
    if(status===401){
        localStorage.removeItem("token")
        window.location.href="#/login"
    }
    return Promise.reject(error);
  });
