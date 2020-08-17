<template>
  <div id="app">
    <show :number = "num" />
    <active @add="add" @reduce="reduce"/>
  </div>
</template>

<script>
import show from '@/components/show.vue'
import active from '@/components/active.vue'
export default {
  name: 'App',
  data() {
    return {
      num: 132
    }
  },
  components:{
    show,
    active
  },
  methods:{
    add(number){
      this.num = this.num + number;
    },
    reduce(number){
      this.num = this.num - number;
    }
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
