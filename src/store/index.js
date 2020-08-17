
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
        },
        log:(state, msg)=>{
            console.log(msg)
        }
    },
    actions:{
        toLog:({dispatch}, msg)=>{
           dispatch('promiseLog',msg).then(()=>{
               console.log('success');
           }).catch(()=>{
               console.log('error');
           })
        },
        promiseLog:({commit},msg)=>{
            return new Promise((resolve, reject)=>{
                const i = ~~(Math.random()*10);
                console.log(i)
                if(i<5){
                    commit('log',msg)
                    resolve();
                }else{
                    reject();
                }
            });
        }
    }
})

export default store;