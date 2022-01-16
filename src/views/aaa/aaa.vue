<template>
    <div id="ad" class="page" aa="1" bb="2" cc="3">
        这里是aaa页面
        <span>
            这里是span标签
        </span>
    </div>
</template>

<script setup>
function aa() {
    console.log('12');
}

</script>

<style lang="scss" scoped>
.page {
    font-size: 12px;
    span {
        font-size: 13px;
    }
}
</style>