<template>
 <div id="main">
        <div class="account-content">
            <div class="account-order">
                <div class="gray-box">
                    <div class="title columns-title pre-title">
                        <h2>我的订单</h2>
                        <div class="gray-btn-menu sort-status-menu">
                            <span class="label" @click="ulXian"><i class="arrow"></i> 支付状态 </span>
                            <ul class="menu-list" :style="'display:'+newPlay ">
                                <li :class="{'selected':boolQb}" @click="liXianQb()">
                                    <a href="javascript:;">全部</a>
                                </li>
                                <li :class="{'selected':boolWz}" @click="liXianWz()">
                                    <a href="javascript:;">未支付</a>
                                </li>
                                <li :class="{'selected':boolYz}" @click="liXianYz()">
                                    <a href="javascript:;">已支付</a>
                                </li>
                                <li :class="{'selected':boolGb}" @click="liXianGb()">
                                    <a href="javascript:;">关闭</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="js-list-inner">
                        <div class="box-inner order-cart order-list-cart clear" v-for="order in orders" v-if="((order.payBool)||boolX)&&((!order.payBool)||boolY)">
                            <div class="gray-sub-title cart-title">
                                <span class="date">{{order.date}}</span>
                                <span class="order-id">订单编号： <a href="javascript:;">{{order.orderNum}}</a> </span>
                                <span class="order-detail"><a>详细&gt;</a> </span>
                                <span class="sub-total">总应付</span>
                                <span class="num">数量</span>
                                <span class="price">单价</span>
                            </div>
                            <div class="cart">
                                <div class="cart-items clear" v-for="item in order.listData">
                                    <div class="prod-info clear">
                                        <div class="items-thumb">
                                            <a href="javascript:;" target="_blank"><img :src="item.img"></a>
                                        </div>
                                        <div class="items-params clear">
                                            <div class="name vh-center">
                                                <a href="javascript:;" target="_blank" title="title">{{item.name}}</a>
                                            </div>
                                            <div class="detail">{{item.name_title}}</div>
                                        </div>
                                        <div class="operation">
                                            <div class="operation-list"></div>
                                        </div>
                                        <div class="num">{{item.num}}</div>
                                        <div class="price">￥ {{item.money}}.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="prod-operation">
                                <div class="total">￥ {{order.sum}}.00</div>
                                <div class="status">
                                    <a class="blue-small-btn js-payment-order" @click="quFuKuan(order)" v-if="!order.payBool">现在付款</a>
                                    <span v-else>已付款</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() { 
    return {
        newPlay:"none",
        bool:true,
        boolQb:true,
        boolWz:false,
        boolYz:false,
        boolGb:false,
        boolX:true,
        boolY:true,
        fanHui:false
    }
  },
  computed: {
    ...mapState(['orders'])
  },
    methods:{
        ulXian(){
            this.newPlay="block"
        },
        liXianQb(){
            this.boolWz=false; this.boolYz=false; this.boolGb=false;
            this.boolQb=true;
            this.boolX=true;
            this.boolY=true;
            this.newPlay="none"
        },
        liXianWz(){
            this.boolQb=false; this.boolYz=false; this.boolGb=false;
            this.boolWz=true;
            this.boolX=true;
            this.boolY=false;
            this.newPlay="none"
        },
        liXianYz(){
            this.boolQb=false; this.boolWz=false; this.boolGb=false;
            this.boolYz=true;
            this.boolX=false;
            this.boolY=true;
            this.newPlay="none"
        },
        liXianGb(){
            this.boolQb=false; this.boolWz=false; this.boolYz=false;
            this.boolGb=true;
            this.newPlay="none"
        },
        quFuKuan(order){
            this.$store.commit("getPayMentData2",{data:order});
            this.$router.push("/payment/"+order.diZhi.id+"/"+this.fanHui)
        }
    }
 }
</script>

<style>
.account-content{
	padding: 50px;
}
.gray-box{
	overflow: hidden;
    border: 1px solid #D1D1D1;
    border-color: rgba(0,0,0,.14);
    border-radius: 8px;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
}
.gray-box .title{
	height: 60px;
    padding: 0 10px 0 28px;
    background: #F5F5F5;
    background: linear-gradient(#FFF,#F5F5F5);
    border-bottom: 1px solid #DCDCDC;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 1px 7px rgba(0,0,0,.06);
    line-height: 60px;
    color: #646464;
}
.account-order .gray-box{
	margin-bottom: 20px;
}
.gray-box .columns-title h2{
	float: left;
}
.gray-btn-menu{
	display: inline-block;
    height: 36px;
    background: #F2F2F2;
    background: linear-gradient(#FFF,#F5F5F5);
    border: 1px solid #DBDDE2;
    border-radius: 4px;
    line-height: 36px;
    cursor: pointer;
    text-align: center;
    user-select: none;
}
.account-order .sort-status-menu{
	width: 112px;
}
.gray-box .title .gray-btn-menu, .gray-box .title span.gray-normal-btn{
	margin: 10px 0 0 10px;
}
.gray-box .title .gray-btn-menu{
	overflow: visible;
    float: right;
}
.gray-btn-menu .label{
	position: relative;
    z-index: 1;
    display: block;
    padding: 0 13px 0 16px;
    text-align: left;
    color: #666;
}
.gray-box .title .gray-btn-menu .label{
	overflow: visible;
    float: none;
    margin-top: 0;
}
.gray-btn-menu .label .arrow{
	float: right;
    width: 10px;
    height: 7px;
    margin: 16px 0 0 6px;
    background: url(../assets/img/btn-icon-new.png) -15px -571px no-repeat;
}
.gray-btn-menu .menu-list{
    position: absolute;
    right: 61px;
    top: 161px;
    width: 112px;
    padding: 38px 0 6px;
    background: #FFF;
    border: 1px solid #dbdde2;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 #EEE;
}
.gray-btn-menu-on .menu-list, .white-btn-menu-on .menu-list{
	display: block;
}
.gray-btn-menu .menu-list li{
	height: 24px;
    line-height: 24px;
    padding: 0 3px 3px;
    text-align: left;
    font-size: 12px;
}
.gray-btn-menu .menu-list li a{
	display: block;
    padding: 0 15px;
    border-radius: 3px;
    color: #999;
}
.gray-btn-menu .menu-list li a:hover{
	background: #C7C7CA;
    color: #FFF;
}
.gray-btn-menu .menu-list li.selected a{
	background: #8F9096;
    color: #FFF;
    cursor: default;
}
.account-order .sort-time-menu{
	width: 118px;
}
.gray-btn-menu-on .label .arrow, .white-btn-menu-on .label .arrow{
	margin-top: 15px;
    background-position: -15px -521px;
}
.gray-btn-menu-on, .white-btn-menu-on{
	position: relative;
    z-index: 10;
    height: auto;
    background: #FFF;
}
.gray-btn-menu-on{
	border: 1px solid #DBDDE2;
}
.gray-box, .gray-btn-menu-on:hover{
	background: #FFF;
}
.gray-box .gray-sub-title{
	height: 38px;
    padding: 0 24px;
    background: #EEE;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
    line-height: 38px;
    font-size: 12px;
    color: #666;
}
.account-order .gray-box .box-inner:first-child .gray-sub-title{
	border-top: none;
}
.order-list-cart .cart-title span{
	float: right;
    text-align: center;
}
.order-list-cart .cart-title .operation, .order-list-cart .cart-title .order-detail, .order-list-cart .cart-title .sub-total{
	float: right;
}
.order-list-cart .cart-title .date, .order-list-cart .cart-title .order-id{
	float: left;
    text-align: left;
}
.order-list-cart .cart-title .date{
	width: 108px;
    padding-left: 6px;
}
.order-list-cart .cart-title .order-detail{
	width: 82px;
    padding-left: 24px;
    text-align: center;
}
.order-list-cart .cart-title .sub-total{
	width: 102px;
    padding-right: 18px;
    border-left: 1px solid #DBDBDB;
    text-align: right;
}
.order-list-cart .cart-title .operation{
	width: 95px;
    height: 38px;
    padding-right: 23px;
}
.order-list-cart .cart-title .num{
	width: 70px;
    padding-right: 115px;
}
.order-list-cart .cart-title .price{
	width: 85px;
    padding-right: 40px;
    text-align: right;
}
.gray-box .gray-sub-title a{
	color: #ffb300;
}
.order-list-cart .cart{
	float: left;
    width: 1166px;
    padding: 0;
    border-right: 1px solid #EBEBEB;
}
.order-cart .cart-items{
	position: relative;
    padding: 18px 0 28px;
    border-top: 1px solid #EFEFEF;
}
.order-list-cart .cart-items{
	height: 110px;
    padding: 0;
}
.order-cart .cart-items:first-child{
	border-top: none;
}
.order-cart .prod-info{
	position: relative;
    margin-left: 138px;
}
.order-list-cart .prod-info{
	padding: 15px 0 15px 111px;
    margin-left: 0;
    position: relative;
}
.order-list-cart .items-thumb{
	position: absolute;
	left: 30px;
    top: 15px;
    width: 78px;
    height: 78px;
    border: 1px solid #EBEBEB;
    border-radius: 3px;
}
.order-list-cart .items-thumb img{
    width: 78px;
    height: 78px;
}
.order-list-cart .items-params{
	float: left;
    height: 50px;
    padding: 15px 0;
    margin-left: 29px;
    border-bottom: none;
    line-height: 25px;
}
.order-cart .items-params .name{
	overflow: hidden;
    float: left;
    color: #666;
    width: 435px;
    height: 44px;
    text-align: left;
}
.order-list-cart .prod-info .name{
	float: none;
    width: 220px;
    height: 25px;
    line-height: 25px;
}
.order-list-cart .prod-info .vh-center{
	height: auto;
    line-height: 50px;
}
.hide-row, .order-cart .items-params .name, .support-cart .items-detail .detail{
	text-overflow: ellipsis;
    white-space: nowrap;
}
.order-list-cart .prod-info .num, .order-list-cart .prod-info .operation, .order-list-cart .prod-info .price, .order-list-cart .prod-info .subtotal{
	float: right;
    line-height: 80px;
    text-align: center;
}
.order-list-cart .prod-info .operation{
	display: table;
    width: 95px;
    height: 80px;
    padding-right: 23px;
    line-height: 25px;
}
.order-list-cart .prod-info .num{
	width: 70px;
}
.order-list-cart .prod-info .price{
	width: 85px;
    padding-right: 27px;
    text-align: right;
}
.order-list-cart .prod-operation{
	float: right;
    display: table;
    height: 110px;
}
.order-list-cart .prod-operation .total{
	display: table-cell;
    padding-right: 18px;
    line-height: 14px;
    text-align: right;
    vertical-align: middle;
}
.order-list-cart .prod-operation .status{
	display: table-cell;
    width: 80px;
    padding: 0 24px;
    text-align: center;
    vertical-align: middle;
}
.blue-small-btn, .orange-small-btn, .white-gray-small-btn{
	display: inline-block;
    height: 30px;
    padding: 0 13px;
    border-radius: 4px;
    line-height: 30px;
    font-size: 12px;
    cursor: pointer;
}
.blue-small-btn{
	background: #6383C6;
    background: linear-gradient(#7EA3F5,#5A82F0);
    box-shadow: 0 1px 2px rgba(255,255,255,.1) inset, 0 0 0 1px rgba(0,0,0,.2) inset, 0 1px 3px rgba(0,0,0,.1);
    color: #FFF;
}
.blue-small-btn:hover{
	box-shadow: 0 1px 1px #7696DE inset, 0 0 2px #627DCA inset, 0 -2px 3px #5A77C7 inset, 0 0 100px rgba(48,77,147,.4) inset, 0 0 0 1px rgba(0,0,0,.3) inset, 0 1px 3px rgba(0,0,0,.1);
    color: #FFF;
}
</style>