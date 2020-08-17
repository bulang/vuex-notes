<template>
  <div id="app">
    <show />
    <active />
    <todoList />
  </div>
</template>

<script>
import show from '@/components/show.vue'
import active from '@/components/active.vue'
import todoList from '@/components/todoList.vue'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components:{
    show,
    active,
    todoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
