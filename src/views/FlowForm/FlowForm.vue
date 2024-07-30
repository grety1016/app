<template>
    <van-nav-bar title="金 蝶 流 程" class="login-nav-bar" />
    <button @click="onOutLogin">退出登录</button>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/index'
import { useRouter } from 'vue-router';


const loginStore = useLoginStore();
const router = useRouter();
const onOutLogin = () => {
    loginStore.loginUser.token = '';
    router.push({ name: 'Login' });
}

</script>

<style scoped></style>