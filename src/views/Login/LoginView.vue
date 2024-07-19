<template>
  <div>
    <van-nav-bar title="登录" class="login-nav-bar" />
    <van-form>
      <van-field v-model="user.userName" left-icon="user" name="userName" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请输入用户名' }]" />
      <van-field v-model="user.userPwd" left-icon="lock" type="password" name="userPwd" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请输入密码' }]" />
      <van-button block type="primary" native-type="submit" @click="printMsg">提交</van-button>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface IUser {
  userName: string;
  userPwd: string;
}

const user: IUser = reactive<IUser>({ userName: "", userPwd: "" } as IUser);
const printMsg = function (): void {
  console.log("用户名：", user.userName, "  密码：", user.userPwd);
};
</script>

<style scoped></style>
