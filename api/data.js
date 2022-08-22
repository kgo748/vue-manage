/* 接口文件 */
import axios from './axios'

/* export const getMenu = (param) => {
    return axios.request({
        url: '/permission/getMenu',
        method: 'post',
        data: param
    })
} */

export const getData = () => {
    // 默认时get请求
    return axios.request({
        url: '/home/getData'
    })
}

export const getUser = (params) => {
    // 默认时get请求
    return axios.request({
        url: '/user/getUser',
        method: 'get',
        params
    })
}