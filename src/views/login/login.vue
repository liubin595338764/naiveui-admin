<template>
    <div class="loginPage">
        <p>登录</p>
        <div class="btn">
            <button @click="loginHandler">
                登录
            </button>
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
.loginPage {
    position: relative;
    height: 100%;
    width: 100%;
}
.btn {
    margin-top: 100px;
}
</style>