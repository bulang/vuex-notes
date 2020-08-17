<template>
    <div>
        <button @click="add({gap:5})">+5</button>
        <button @click="reduce({gap:4})">-4</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
       name:"active",
       methods: {
           ...mapMutations(['add', 'reduce'])
       }, 
    }
</script>

<style scoped>

</style>