<template>
    <div class="loginContainer">
        <h3 class="title">
            系统登录
        </h3>
        <div class="inputBar">
            <n-input v-model:value="value" type="text" placeholder="基本的 Input" />
        </div>
    </div>
</template>

<script setup>
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
.loginContainer {
    width: 520px;
    padding: 20px;
    .title {
        text-align: center;
        padding: 30px 0;
        font-size: 16px;
    }
}
</style>