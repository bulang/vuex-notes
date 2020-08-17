
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        number:123,
        name:'bulang',
        sex:'boy',
        infos:[{
            name:'kaisa',
            sex:'boy'
        },{
            name:'jiecaowa',
            sex:'girl'
        }]
    },
    getters:{
        getInfo:state=>{
            return `my name is ${state.name}, ${state.sex}`;
        },
        getCustomInfo:state => index => {
            return `my name is ${state.infos[index]['name']}, ${state.infos[index]['sex']}`;
        }
    },
    mutations:{
        add:(state, payload)=>{
            state.number+=payload.gap;
        },
        reduce:(state, payload)=>{
            state.number-=payload.gap;
        }
    }
})

export default store;