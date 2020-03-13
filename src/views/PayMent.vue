<template>
    <PayMentCm :order="orderOne"></PayMentCm>
</template>

<script>
    import PayMentCm from '../components/PayMentCm';
    import {mapState} from 'vuex';
    export default {
        name: "PayMent",
        props:["id","bool"],
        components:{PayMentCm},
        computed:{...mapState(["orderOne"])},
        methods:{
             stringToBoolean(str){
                switch(str.toLowerCase()){
            case "true": case "yes": case "1": return true;
            case "false": case "no": case "0": case null: return false;
                }
            }
        },
        created(){
            if(this.stringToBoolean(this.bool)){
                this.$store.commit("getPayMentData",{id:this.id})
            }
        }
    }
</script>

