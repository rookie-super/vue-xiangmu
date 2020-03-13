<template>
  <div>
    <HomeCm :itemDate="HomeData"></HomeCm>
  </div>
</template>

<script>
  import {mapState} from "vuex"
import HomeCm from "../components/HomeCm";
export default {
  name: 'Home',
    computed:{
        ...mapState(["HomeData"])
    },
  components: {HomeCm},
    mounted(){
      this.$store.dispatch("getHomeAsync")
    }
}

</script>
