<template>
    <div class="products-catagory">
        <div class="content">
            <HomeCmCn v-for="items in itemDate" :item="items.data[0]" :its="items.id"></HomeCmCn>
        </div>
    </div>
</template>

<script>
    import HomeCmCn from "./HomeCmCn";
    export default {
        props:["itemDate"],
        name: "contect",
        components: {HomeCmCn}
    }
</script>

<style>
    .products-catagory {
        width: 100%;
    }
    .products-catagory  .content{
        margin: 0 auto;
        width: 960px;
        column-count: 3;
        column-width: 300px;
        column-gap: 20px;
    }
    .single-products-catagory {
        position:relative;
        z-index: 1;
        break-inside: avoid;
        top: 0;
    }
    .single-products-catagory a {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 10; }
    .single-products-catagory a::after {
        -webkit-transition-duration: 250ms;
        transition-duration: 250ms;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        background-color: rgba(60, 60, 60, 0.7);
        z-index: 1;
        opacity: 0;
        visibility: visible; }
    .single-products-catagory a img {
        width: 100%; }
    .single-products-catagory .hover-content {
        position: absolute;
        top: 40px;
        left: 40px;
        z-index: 10; }
    .single-products-catagory .hover-content .line {
        width: 80px;
        height: 3px;
        background-color: #fbb710;
        display: block;
        margin-bottom: 15px; }
    .single-products-catagory .hover-content p {
        font-size: 16px;
        color: #6d6d6d;
        line-height: 1;
        margin-bottom: 5px;
        -webkit-transition-duration: 250ms;
        transition-duration: 250ms; }
    .single-products-catagory .hover-content h4 {
        margin-bottom: 0;
        -webkit-transition-duration: 250ms;
        transition-duration: 250ms; }
    .single-products-catagory:hover a::after, .single-products-catagory:focus a::after {
        opacity: 1;
        visibility: visible; }
    .single-products-catagory:hover .hover-content p,
    .single-products-catagory:hover .hover-content h4, .single-products-catagory:focus .hover-content p,
    .single-products-catagory:focus .hover-content h4 {
        color: #fff; }

    /* CSS Document */
    /*html,body { user-select: none; -moz-user-select: none; -webkit-user-select: none; }*/
    body,
    ul,
    ol,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    input,
    select,
    textarea,
    form {
        margin: 0;
        padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
        font-weight: 400;
    }
    html {
        height: 100%;
        background: #ededed;
    }
    body {
        font-family: "PingFang SC", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Microsoft Yahei", 微软雅黑, STHeiti, 华文细黑, sans-serif;
        color: rgb(102, 102, 102);
        font-size: 14px;
        min-width: 1220px;
    }
    li {
        list-style: none;
    }
    img {
        border: none;
        display: block;
    }
    input,
    select,
    textarea,
    button {
        font-family: tahoma, arial, 'Hiragino Sans GB', '微软雅黑', sans-serif;
        outline: none;
        border: none;
        background-color: transparent;
    }
    em,
    i,
    dfn {
        font-style: normal;
    }
    textarea {
        resize: none;
        overflow: auto;
        outline: none;
    }
    a {
        text-decoration: none;
        color: #666;
        outline: none;
        cursor: pointer;
    }
    a:hover {
        outline: none;
    }
    button {
        cursor: pointer;
    }
    button:focus {
        border: none;
        outline: none;
    }
    pre {
        white-space: pre-wrap!important;
        word-wrap: break-word!important;
        *white-space:normal!important;
    }
    .fl {
        float: left;
    }
    .fr {
        float: right;
    }
    .clear:after,
    .clear:before {
        content: "";
        display: table;
    }
    .clear:after {
        clear: both;
    }
    .clear {
        *zoom: 1;
    }
    .store-content{
        width: 1220px;
        min-height: 600px;
        padding: 0 0 25px;
        margin: 0 auto;
        position: relative;
    }
    .hide{
        display: none!important;
    }
    .fn-left, .fn-right{
        display: inline;
    }
    .fn-left{
        float: left;
    }
    .fn-right{
        float: right;
    }
</style>