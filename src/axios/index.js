import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"
import qs from 'qs'

import router from '@/router'
import store from '@/store'
Vue.use(VueAxios, axios)


//  这个baseUrl要根据实际情况进行改变
axios.defaults.baseURL = "/"
axios.defaults.timeout = 5000
axios.defaults.headers.common["Content-Type"] =
    "application/json; charset=UTF-8"
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"

//请求拦截器新增非get请求添加请求头和token
axios.interceptors.request.use(config => {
  // if (config.method != 'get') {
  //     config.data = qs.stringify(config.data)
  //     config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  // }
  // let token = store.state.token
  // if (token) {
  //     config.headers.common['token'] = token
  // }
  return config;
}, error => {
  return Promise.reject(error)
})

//响应拦截器
axios.interceptors.response.use(response => {
  // console.log(response)
  // 对响应数据做点什么
  return response;
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 401 清除token信息并跳转到登录页面
        // store.commit(types.LOGOUT)
        
        // 只有在当前路由不是登录页面才跳转
        // router.currentRoute.path !== 'login' &&
        //   router.replace({
        //     path: 'login',
        //     query: { redirect: router.currentRoute.path },
        //   })
        break;
      default:
        break;
    }
    console.log('error.response',error.response)
  }
  // 对响应错误做点什么

  return Promise.reject(error);
});

const xhr = {
    get(url, data, config) {
        return new Promise((resolve, reject) => {
            instance.get(url, {params: data}, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    fetch(url, data, config, methods) {
        return new Promise((resolve, reject) => {
            instance[methods](url, data, config).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, data, config) {
        return this.fetch(url, data, config, 'post')
    }
}

export default axios
