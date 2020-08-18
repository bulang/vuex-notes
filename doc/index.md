### Vuex
> 概念

为`Vue.js`程序开发的一套状态管理器  



#### `State`  

> 项目的数据源，整个项目的状态都保存在`state`里面。

```javascript
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
```



**组件中获取state的方法：**  

+ `this.$store.state.key`
+ 使用辅助函数`mapState()`把state里面的值映射为组件的计算属性并展开，在组件的模板里面便可以直接使用：  
     ```javascript
     computed:{
        ...mapState(['key']),
     }
     ```



#### `Mutation`

> 提交`mutation`是唯一可以改变`state`的方法；

第一个参数为`state`，第二个参数为自定的参数`payload`；

使用使用同步方式操作`state`，否则异步数据挖法追踪导致`devtools`里面的记录的历史快照会出问题；

```javascript
// 例：
mutations:{
    add:(state, payload)=>{
        state.number+=payload.gap;
    },
    reduce:(state, payload)=>{
        state.number-=payload.gap;
    }
}
```

**组件中提交`mutation`的方法：**

+ `this.$store.commit('add',{gap:5})`

+ 使用辅助函数`mapMutations()`把对应的`mutaions`映射到组件的`methods`里面并展开，在组件的模板里面便可以直接使用：

  ```javascript
  // 例
  import { mapMutations } from 'vuex';
  export default {
      name:"active",
      methods: {
          ...mapMutations(['add', 'reduce'])
      }, 
   }
  ```

  

#### `Action`

> **主要作用：执行异步操作（如：接口请求等）并提交`mutaion`;**

- 第一个参数为与`Store`实例一样具有相同方法的`context`对象，可以通过解构的方式获取对象上的方法；

- 第二个参数为自定义传的值；
- `actions`之间可以互相派发；

```javascript
// 例：
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
},
```

**在组件中派发`actions`的方法:**

- `this.$store.dispatch('toLog','yes')`

- 使用辅助函数`mapActions()`把`actions`映射到组件的`methods`里面，然后在组件的模板里面直接调用

  ```javascript
  // 例：
  import {  mapActions } from 'vuex';
  export default {
      name:"active",
      methods: {
          ...mapActions(['toLog'])
      }, 
  }
  ```



#### `Getter`

> **主要作用：对`state`数据进行加工，用来派生新的状态** 

- 第一个参数为`state`用来提供数据；

- 第二个参数可以传入其他的`getters`，使用其他`getter`加工后的数据；
- 可以在`getter`中返回一个函数，这样我们在使用的时候就可以传递参数，根据参数来决定返回的数据；

```javascript
// 例：
getters:{
    getInfo:state=>{
        return `my name is ${state.name}, ${state.sex}`;
    },
    getCustomInfo:state => index => {
        return `my name is ${state.infos[index]['name']}, ${state.infos[index]['sex']}`;
    }
}
```

**在组件中使用`getters`**

- `this.$store.getters.getInfo`

- 使用辅助函数`mapGetters`把`getter`映射到组建的`computed`里面，然后在组件模板中直接使用；

  ```javascript
  // 例：
  import { mapGetters } from 'vuex'
  export default {
      name:'show',
      computed:{
          ...mapGetters(['getInfo', 'getCustomInfo'])
      }
  }
  ```



#### `Module`

当项目足够大的时候，所有的`state`，`mutaions`，`actions`，`getters`放到一个文件里面会非常难维护，所以我们需要把`state`，`mutaions`，`actions`，`getters`分别提出来放到各自的文件并导出。