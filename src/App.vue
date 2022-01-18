<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import naiveMessage from './components/naiveMessage.vue'
</script>

<template>
    <n-message-provider>
        <naive-message />
        <router-view />
    </n-message-provider>
</template>

<style>
@import '@/sass/global.scss';
</style>
