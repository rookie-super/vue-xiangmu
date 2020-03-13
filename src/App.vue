<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Newletter></Newletter>
    <Footer></Footer>
  </div>
</template>
<script>
    import Header from "./components/Header";
    import Newletter from "./components/Newletter";
    import Footer from "./components/Footer";
    export default {
        components: {Footer, Newletter, Header}
    }
</script>
<style>

</style>
