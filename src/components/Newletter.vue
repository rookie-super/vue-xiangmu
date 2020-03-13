<template>
    <div class="newLetter_biggest_box">
        <div class="newLetter_big_box">
            <div class="newLetter_mid_box">
                <h5 class="ulShang">购物指南</h5>
                <ul>
                    <li>
                        <a href="#">购物流程</a>
                    </li>
                    <li>
                        <a href="#">会员介绍</a>
                    </li>
                    <li>
                        <a href="#">生活旅行</a>
                    </li>
                    <li>
                        <a href="#">常见问题</a>
                    </li>
                    <li>
                        <a href="#">大家电</a>
                    </li>
                    <li>
                        <a href="#">联系客服</a>
                    </li>
                </ul>
            </div>
            <div class="newLetter_mid_box">
                <h5 class="ulShang">配送方式</h5>
                <ul>
                    <li>
                        <a href="#">上门自提</a>
                    </li>
                    <li>
                        <a href="#">211限时达</a>
                    </li>
                    <li>
                        <a href="#">配送服务查询</a>
                    </li>
                    <li>
                        <a href="#">配送费收取标准</a>
                    </li>
                    <li>
                        <a href="#">海外配送</a>
                    </li>
                </ul>
            </div>
            <div class="newLetter_mid_box">
                <h5 class="ulShang">支付方式</h5>
                <ul>
                    <li>
                        <a href="#">货到付款</a>
                    </li>
                    <li>
                        <a href="#">在线支付</a>
                    </li>
                    <li>
                        <a href="#">分期付款</a>
                    </li>
                    <li>
                        <a href="#">公司转账</a>
                    </li>
                </ul>
            </div>
            <div class="newLetter_mid_box">
                <h5 class="ulShang">售后服务</h5>
                <ul>
                    <li>
                        <a href="#">售后政策</a>
                    </li>
                    <li>
                        <a href="#">价格保护</a>
                    </li>
                    <li>
                        <a href="#">退款说明</a>
                    </li>
                    <li>
                        <a href="#">返修/退换货</a>
                    </li>
                    <li>
                        <a href="#">取消订单</a>
                    </li>
                </ul>
            </div>
            <div class="newLetter_mid_box">
                <h5 class="ulShang">特色服务</h5>
                <ul>
                    <li>
                        <a href="#">夺宝岛</a>
                    </li>
                    <li>
                        <a href="#">DIY装机</a>
                    </li>
                    <li>
                        <a href="#">延保服务</a>
                    </li>
                    <li>
                        <a href="#">京东E卡</a>
                    </li>
                    <li>
                        <a href="#">京东通信</a>
                    </li>
                    <li>
                        <a href="#">京鱼座智能</a>
                    </li>
                </ul>
            </div>
            <div class="newLetter_mid2_box">
                <h5 class="zuiRight">京东自营覆盖区县</h5>
                <div>
                    <div>京东已向全国2661个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。</div>
                    <p>
                        <a href="#">
                            查看详情>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Newletter"
    }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    .newLetter_biggest_box{
        width: 100%;
        height: 160px;
        padding: 20px 0;
        border-top: 1px solid #dedede;
    }
    .newLetter_big_box{
        margin: 0 auto;
        width: 1190px;
        height: 160px;
        overflow: hidden;
    }
    .newLetter_mid_box{
        float: left;
        width: 198px;
        line-height: 22px;
    }
    .ulShang{
        margin-bottom: 5px;
        font-size: 14px;
    }
    .newLetter_mid_box li{
        list-style: none;
    }
    .newLetter_mid_box a{
        color: #666;
        text-decoration: none;
    }
    .newLetter_mid2_box{
        float: right;
        width: 200px;
        height: 150px;
    }
    .zuiRight{
        margin-bottom: 15px;
        font-size: 14px;
        text-align: center;
    }
    .newLetter_mid2_box>div{
        padding: 0 10px;
    }
    .newLetter_mid2_box p{
        text-align: right;
    }
    .newLetter_mid2_box a{
        color: #666;
        text-decoration: none;
    }
</style>