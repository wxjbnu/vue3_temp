import axios from './index'
import Vue from "vue"
// export function chapterContent (link) {
//   return axios.get(`/content/chapter/${link}`)
// }
// 书籍信息
export function book(id) {
  return Vue.axios.get(`/api/btoc?view=summary&book=${id}`)
}
export function getList(id) {
  return Vue.axios.get(`/api/list=${id || 0}`)
}