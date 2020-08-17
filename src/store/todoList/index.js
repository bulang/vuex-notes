/*
 * @Author: liu wang wang
 * @Date: 2020-08-17 15:30:40
 * @LastEditTime: 2020-08-17 15:56:08
 * @LastEditors: liu wang wang
 * @Description: 
 * @FilePath: \vuex-notes\src\store\todoList\index.js
 */
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}