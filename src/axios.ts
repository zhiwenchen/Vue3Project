import axios from "axios"
import { useCookies } from "@vueuse/integrations/useCookies";
import { ElNotification } from "element-plus";

const service = axios.create({
    baseURL: "/api"
})

// request拦截器
service.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = useCookies().get("token")
    if (token) {
        config.headers["token"] = token
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// response拦截器
service.interceptors.response.use(function (response) {
    // 处理响应数据
    return response.data.data;
  }, function (error) {
    // 处理响应错误数据
    ElNotification({
        message: error.response.data.msg || "请求失败",
        type: 'error',
        duration: 2000
    })
    return Promise.reject(error);
  });

export default service