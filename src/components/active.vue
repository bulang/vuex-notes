<template>
    <div>
        <button @click="add({gap:5})">+5</button>
        <button @click="reduce({gap:4})">-4</button>
        <button @click="toLog('yes')">log</button>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex';
    export default {
       name:"active",
       methods: {
            ...mapMutations(['add', 'reduce']),
            ...mapActions(['toLog'])
       }, 
    }
</script>

<style scoped>

</style>