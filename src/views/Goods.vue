<template>
    <GoodsCm :items="GoodsData" :idGood="dataId" :idGoods="dataIds"></GoodsCm>
</template>

<script>
    import GoodsCm from '../components/GoodsCm';
    import {mapState} from 'vuex';
    export default {
        props:["dataIds","dataId"],
        name: "Good",
        components:{GoodsCm},
        computed:{
            ...mapState(["GoodsData"])
        },
        mounted(){
            this.$store.dispatch("getGoodsAsync",{ids:this.dataId,id:this.dataIds})
        }
    }
</script>

<style scoped>

</style>