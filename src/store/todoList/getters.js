/*
 * @Author: liu wang wang
 * @Date: 2020-08-17 15:13:37
 * @LastEditTime: 2020-08-17 17:45:15
 * @LastEditors: liu wang wang
 * @Description: 
 * @FilePath: \vuex-notes\src\store\todoList\getters.js
 */
import _ from 'lodash';
export default {
    getList:(state)=>{
        let list = _.cloneDeep(state.list);
        let newlist = list.map((info, index)=>{
            info['title'] = `${index+1}、【${info.readed?'已读':'未读'}】--${info['title']}`;
            return info;
        });
        return newlist;
    },
    getReaded:(state, getters) => (status) => {
        return getters.getList.filter((info)=>{
            return info.readed === status;
        });
    }
}