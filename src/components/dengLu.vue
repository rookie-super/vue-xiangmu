<template>
    <div class="jieMian">
        <div class="write">
            <div class="header">
                欢迎登录
                <div class="x" @click="cha">
                    x
                </div>
            </div>
            <div class="body">
                <div class="box">
                    <div class="box1">
                        <span>用户名：</span>
                        <input type="text" v-model="name">
                    </div>
                    <div class="box2">
                        <span>&nbsp;密&nbsp;&nbsp;码：</span>
                        <input type="password" class="inp1" v-model="password">
                    </div>
                    <div class="box3">
                        <router-link to="/zhuce">去注册</router-link>
                    </div>
                    <div class="box4">
                        <button class="btn1" @click="quDengLu">登&nbsp;录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from  "vuex"
    export default {
        name: "dengLu",
        data:function () {
            return{
                name:"",
                password:""
            }
        },
        computed:{...mapState(["DengLuData"])},
        methods:{
            quDengLu(){
                if((this.name)&&(this.password)){
                    this.$store.dispatch("getDengLuAsync",{name: this.name, password: this.password})
                    if(this.DengLuData){
                        this.$router.push('/')
                    }else {
                        alert("用户名或密码错误");
                    }
                }else {
                    this.$router.push('/denglu');
                    alert("用户名和密码不能为空")
                }
            },
            cha(){
                this.$router.push('/')
            }
        }
    }
</script>

<style>
    body{
        margin: 0;
    }
    .jieMian{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(102, 102, 102);
        opacity: 1;
        z-index: 999;
    }
    .write{
        width: 450px;
        height: 400px;
        position: fixed;
        left: 50%;
        margin-left: -225px;
        top: 50%;
        margin-top: -200px;
        background-color: white;
        border-radius: 10px;
    }
    .header{
        width: 100%;
        height: 60px;
        background-color: #F5F5F5;
        border-bottom: 1px solid #DCDCDC;
        border-radius: 10px 10px 0 0;
        text-align: center;
        font-size: 20px;
        line-height: 60px;
    }
    .x{
        position: absolute;
        right: 20px;
        top: 0;
        color:#000;
        opacity: 0.2;
        cursor: pointer;
        font-size: 30px;
    }
    .body{
        width: 100%;
        height: 340px;
        border-radius:0 0 10px 10px;
    }
    .box{
        width: 380px;
        height: 310px;
        padding-top: 40px;
        margin: 0 auto;
    }
    .box1,.box2{
        width: 380px;
        height: 60px;
        padding-bottom: 20px;
    }
    .box3{
        width: 100%;
        height: 30px;
    }
    .box4{
        width: 100%;
        height: 100px;
    }
    input{
        width: 300px;
        height: 30px;
    }
    .inp1{
        margin-left: 10px;
    }
    .box3>a{
        float: right;
        text-decoration: none
    }
    .btn1{
        background-color: red;
        color: white;
        width: 130px;
        height: 50px;
        border-radius: 10px;
        border: none;
        position: absolute;
        left: 50%;
        margin-left: -65px;
        top: 50%;
        margin-top: 110px;
        font-size: 20px;
        outline: none;
    }
</style>