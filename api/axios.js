/* 对axios进行简单的封装 */
import axios from "axios";
import config from "../config";

const baseUrl =
  process.env.NODE_ENV === "develop" ? config.baseUlr.dev : config.baseUlr.prod;

class HttpRequest {
  // 参数是传入的
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      header: {},
    };
    return config;
  }

  // 拦截器，传入的是请求实例对象   
  interceptors(instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    instance.interceptors.response.use(
      function (response) {
        // console.log('response: ', response);
        // 对响应数据做点什么
        return response;
      },
      function (error) {
        // console.log('error: ', error);
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }

  // 调用时传入的参数对象
  request(options) {
    const instance = axios.create()
    // 解构
    options = {
        ...this.getInsideConfig(),
        ...options
    }
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseUrl);
