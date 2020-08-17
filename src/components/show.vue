<template>
    <div>
        <p>{{number}}</p>
        <p>{{getInfo}}</p>
        <p>{{getCustomInfo(0)}}</p>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    export default {
        name:'show',
        computed:{
           ...mapState(['number']),
           ...mapGetters(['getInfo', 'getCustomInfo'])
        }
    }
</script>

<style scoped>

</style>