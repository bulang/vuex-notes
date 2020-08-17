### Vuex
> 概念

为`Vue.js`程序开发的一套状态管理器  

> 核心概念  

1. `State`  
   项目的数据源，整个项目的状态都保存在`state`里面。  
   组件中获取state的方法：  
   + `this.$store.state.key`
   + 使用工具函数`mapState()`把state里面的值映射为组件的计算属性并展开：  
        ```javascript
        computed:{
           ...mapState(['key']),
        }
        ```
2. `Mutation`
3. `Action`
4. `Getter`
5. `Module`