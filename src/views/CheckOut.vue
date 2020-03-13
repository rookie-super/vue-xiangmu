<template>
    <CheckOutCm :items="CheckOutData" :its="AddressData"></CheckOutCm>
</template>

<script>
    import CheckOutCm from '../components/CheckOutCm';
    import {mapState} from 'vuex'
    export default {
        name: "CheckOut",
        components:{
            CheckOutCm
        },
        computed:{
            ...mapState(["CheckOutData","AddressData"])
        },
        mounted(){
            this.$store.dispatch("getAddressAsync")
        }
    }
</script>

