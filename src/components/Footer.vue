<template>
    <div class="footer_bigest_box">
        <div class="footer_big_box">
            <p>
                <a href="#" class="a">关于我们</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">联系我们</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">联系客服</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">合作招商</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">商家帮助</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">营销中心</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">手机京东</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">友情链接</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">销售联盟</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">京东社区</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">风险监测</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">隐私政策</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">京东公益</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">English Site</a>
                <span class="shuXian">|</span>
                <a href="#" class="a">Media & IR</a>
            </p>
            <div class="footer_mid_box">
                <p>
                    <a href="#">京公网安备 11000002000088号</a>
                    <span class="shuXian">|</span>
                    <a href="#">互联网药品信息服务资格证编号(京)-经营性-2014-0008</a>
                    <span class="shuXian">|</span>
                    <a href="#">京ICP证070359号</a>
                    <span class="shuXian">|</span>
                    <a href="#">新出发京零 字第大120007号</a>
                </p>
                <p>
                    <a href="#">互联网出版许可证编号新出网证(京)字150号</a>
                    <span class="shuXian">|</span>
                    <a href="#">出版物经营许可证</a>
                    <span class="shuXian">|</span>
                    <a href="#">网络文化经营许可证京网文[2014]2148-348号</a>
                    <span class="shuXian">|</span>
                    <a href="#">违法和不良信息举报电话：4006561155</a>
                </p>
                <p>
                    <a href="#">Copyright&nbsp; © &nbsp;2004 &nbsp;- &nbsp;2020&nbsp; &nbsp; 京东JD.com &nbsp;版权所有</a>
                    <span class="shuXian">|</span>
                    <a href="#">消费者维权热线：4006067733&nbsp;经营证照</a>
                    <span class="shuXian">|</span>
                    <a href="#">营业执照</a>
                    <span class="shuXian">|</span>
                    <a href="#">(京)网械平台备字(2018)第00003号</a>
                </p>
            </div>
            <div class="footer_mid2_box">
                <a href="#">
                    <i class="xiaoTuTongYong smallImg1"></i>
                    Global Site
                </a>
                <span class="shuXian">|</span>
                <a href="#">
                    <i class="xiaoTuTongYong smallImg2"></i>
                    Сайт России
                </a>
                <span class="shuXian">|</span>
                <a href="#">
                    <i class="xiaoTuTongYong smallImg3"></i>
                    Situs Indonesia
                </a>
                <span class="shuXian">|</span>
                <a href="#">
                    <i class="xiaoTuTongYong smallImg4"></i>
                    Sitio de España
                </a>
                <span class="shuXian">|</span>
                <a href="#">
                    <i class="xiaoTuTongYong smallImg5"></i>
                    เว็บไซต์ประเทศไทย
                </a>
            </div>
            <p>
                <a href="#">京东旗下网站：&nbsp;京东钱包</a>
                <span class="shuXian">|</span>
                <a href="#">京东智联云</a>
            </p>
            <div class="footer_end_box">
                <a href="#" class="bigTuPian bigImg1">可信网站信用评估</a>
                <a href="#" class="bigTuPian bigImg2"></a>
                <a href="#" class="bigTuPian bigImg3"></a>
                <a href="#" class="bigTuPian bigImg4"></a>
                <a href="#" class="bigTuPian bigImg5"></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .footer_bigest_box{
        margin: 0;
        padding: 0;
        font-size: 12px;
        color: #666;
    }
    .footer_big_box{
        width: 1190px;
        height: 250px;
        padding: 15px 0;
        border-top: 1px solid #e1e1e1;
        text-align: center;
        margin: 0 auto;
    }
    .a{
        color: #666;
        text-decoration: none;
    }
    .shuXian{
        margin: 0 10px;
        color: #ccc;
    }
    .footer_mid_box{
        padding: 10px 0;
        line-height: 22px;
    }
    .footer_mid_box a{
        color: #999;
        text-decoration: none;
    }
    .footer_mid2_box a{
        color: #999;
        text-decoration: none;
    }
    .xiaoTuTongYong{
        display: inline-block;
        background-image: url(../assets/img/footer.png);
        background-repeat: no-repeat;
        width: 15px;
        height: 12px;
        margin-top: -1px;
        margin-right: 10px;
    }
    .smallImg1{
        background-position: -108px -155px;
    }
    .smallImg2{
        background-position: -168px -155px;
    }
    .smallImg3{
        background-position: -148px -155px;
    }
    .smallImg4{
        background-position: -128px -155px;
    }
    .smallImg5{
        background-position: -108px -172px;
    }
    .footer_big_box>p>a{
        color: #999;
        text-decoration: none;
    }
    .footer_end_box{
        margin: 25px 0;
    }
    .bigTuPian{
        overflow: hidden;
        display: inline-block;
        margin: 0 3px;
        width: 103px;
        height: 32px;
        line-height: 1000px;
        background-image: url(../assets/img/footer.png);
        background-repeat: no-repeat;
    }
    .bigImg1{
        background-position: -205px -111px;
    }
    .bigImg2{
        background-position: -205px -74px;
    }
    .bigImg3{
        background-position: -205px -37px;
    }
    .bigImg4{
        background-position: -205px 0;
    }
    .bigImg5{
        background-position: 0 -155px;
    }
</style>