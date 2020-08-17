/*
 * @Author: liu wang wang
 * @Date: 2020-08-17 15:17:06
 * @LastEditTime: 2020-08-17 17:49:52
 * @LastEditors: liu wang wang
 * @Description: 
 * @FilePath: \vuex-notes\src\store\todoList\actions.js
 */
export default {
    add:({commit}, payload)=>{
        setTimeout(()=>{
            console.log('模拟异步，1秒后添加')
            commit('add', payload)
        },1000);
    }
}