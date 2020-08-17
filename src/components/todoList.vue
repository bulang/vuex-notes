<!--
 * @Author: liu wang wang
 * @Date: 2020-08-17 15:33:44
 * @LastEditTime: 2020-08-17 17:59:53
 * @LastEditors: liu wang wang
 * @Description: 
 * @FilePath: \vuex-notes\src\components\todoList.vue
-->
<template>
    <div>
        <h3>totoList</h3>
        <button @click="add({title:'12346789',readed:false})">添加</button>
        <h4>未加工</h4>
        <div v-for="(info,index) in list" :key="'list'+index">
            <p>{{info.title}}</p>
        </div>
        <h4>加工后</h4>
        <div v-for="(info,index) in getList" :key="'getList'+index">
            <p>
            {{info.title}}
            <button v-if="info['readed']==false" @click="read({idx:index})">阅读</button>
            </p>
        </div>
        <button @click="getReadedList(true)">已读</button>
        <button @click="getReadedList(false)">未读</button>
        <div v-for="(info,index) in mylist" :key="info['title'] + index">
            <p>{{info.title}}</p>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
    export default {
        name:'totoList',
        data() {
            return {
                mylist:[]
            }
        },
        computed:{
            ...mapState('todoList',['list']),
            ...mapGetters('todoList',['getList'])
        },
        mounted() {
            this.getReadedList(true);
        },
        methods:{
            getReadedList(status){
               this.mylist = this.$store.getters['todoList/getReaded'](status);
            },
            ...mapActions('todoList', ['add']),
            ...mapMutations('todoList',['read'])
        }
        
    }
</script>

<style scoped>

</style>