/*
 * @Author: liu wang wang
 * @Date: 2020-08-17 15:16:51
 * @LastEditTime: 2020-08-17 17:56:57
 * @LastEditors: liu wang wang
 * @Description: 
 * @FilePath: \vuex-notes\src\store\todoList\mutations.js
 */
export default {
    read:(state, payload)=>{
        state.list[payload['idx']].readed = true;
    },
    add:(state, payload)=>{
        state.list.push(payload);
    }
}