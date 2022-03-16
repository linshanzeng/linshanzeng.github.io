---
title: 实现复利计算器
date: 2022-03-17 00:00:00
categories:
 - 前端
tags:
 - 实战
---

参考安卓应用《复利计算器》，实现类似功能，正在开发中

<!-- more -->

<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

<style>
    .main {
        border-style: solid;
        border-width: 1px;
        border-color: grey;
        font-size: 15px;
        font-family: Lobster, monospace;
        padding: 20px;
    }
    button {
        border-style: solid;
        border-width: 1px;
        border-color: grey;
        border-radius: 10px;
        width: 75px;
        height: 25px;
        background-color: #249FFD;
    }
    .div01 {
        margin-top: 10px;
    }
</style>

<script>
    function cal() {
        console.log(111);
    }
</script>

<div class="main">
    <form action="#">
        计算项目：<br>
        <div class="div01"><label for="radio01">
            <input type="radio" id="radio01" value="复利" name="radioGroup01" required>复利
        </label>
        <label for="radio02">
            <input type="radio" id="radio02" value="定投本利" name="radioGroup01" checked>定投本利
        </label></div>
        <hr>
        <div class="div01">投资本金：<input type="text" placeholder="请输入投资本金" required></div>
        <hr>
        <div class="div01">定投金额：<input type="text" placeholder="请输入每期定投金额" required></div>
        <hr>
        定投周期：<br>
        <div class="div01"><label for="radio11">
            <input type="radio" id="radio11" value="每年" name="radioGroup11" required>每年
        </label>
        <label for="radio12">
            <input type="radio" id="radio12" value="每月" name="radioGroup11" checked>每月
        </label></div>
        <hr>
        <div class="div01">年利率(%)：<input type="text" placeholder="请输入投资年化收益率" required></div>
        <hr>
        <div class="div01">到期本利和：<input type="text" placeholder="计算得出" disabled></div>
        <div class="div01"><button type="submit">计算</button></div>
    </form>
    <!-- <img src="#" alt="参考图"> -->
    <!-- ![参考图](/docs/.vuepress/public/fund.HEIC) -->
</div>
