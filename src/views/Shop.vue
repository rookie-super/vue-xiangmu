<template>
    <ShoCm :items="ShopData.data" :idEs="ShopData.id"></ShoCm>
</template>

<script>
    import ShoCm from '../components/ShopCm';
    import {mapState} from  "vuex"
    export default {
        props:["ids"],
        name: "Sho",
        components:{
            ShoCm
        },
        computed:{
            ...mapState(["ShopData"])
        },
        mounted(){
            this.$store.dispatch("getShopAsync",this.ids);
        }
    }
</script>

<style scoped>

</style>