<template>
    <div>
        <button @click="add(5)">+5</button>
        <button @click="reduce(4)">-4</button>
    </div>
</template>

<script>
    export default {
       name:"active",
       methods: {
           add(number){
               this.$emit('add', number);
           },
           reduce(number){
               this.$emit('reduce', number);
           }
       }, 
    }
</script>

<style scoped>

</style>