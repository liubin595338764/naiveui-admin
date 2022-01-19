<template>
    <div class="loginPage">
        <leftVue class="left-image" />
        <rightVue class="right-image" />
        <p>登录</p>
        <div class="btn">
            <button @click="loginHandler">
                登录
            </button>
        </div>
    </div>
</template>

<script setup>
import leftVue from './components/left.vue';
import rightVue from './components/right.vue';
import {login} from '@/api/user.js';
const loginHandler = ()=>{
    login().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
}
</script>

<style lang="scss" scoped>
.loginPage {
    position: relative;
    height: 100%;
    width: 100%;
}
.btn {
    margin-top: 100px;
}

@media only screen and (max-width: 1920px) {
    .left-image {
        right: calc(50% + 270px);
        width: calc(50% - 270px);
        min-width: 440px;
    }
    .right-image {
        left: calc(50% + 270px);
        width: calc(50% - 270px);
        min-width: 440px;
    }
}

@media only screen and (min-width: 1920px) {
    .left-image {
        left: 0;
        width: 700px;
    }
    .right-image {
        right: 0;
        width: 700px;
    }
}
.left-image {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.right-image {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

@media only screen and (max-width: 1023px) {
    .banner {
        position: static;
        text-align: left;
        padding-left: 16px;
        transform: none;
        padding-top: 60px;
        padding-right: 16px;
        min-height: 550px;
        height: calc(100vh - 124px);
    }
    .left-image {
        position: relative;
        left: -16px;
        min-width: unset;
        width: 300px;
        top: 8px;
        transform: none;
    }
}
</style>