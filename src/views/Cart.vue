<template>
    <CartCm :items="CartPanelData"></CartCm>
</template>

<script>
    import {mapState} from "vuex"
    import CartCm from "../components/CartCm"
    export default {
        name: "Cart",
        components:{CartCm},
        computed:{...mapState(["CartPanelData"])},
    }
</script>

<style scoped>

</style>