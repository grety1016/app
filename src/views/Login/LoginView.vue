<template>
  <div class="login_background-image">
    <van-nav-bar title="登  录" class="login-nav-bar" />
    <img class="login_img" src="@/assets/log2.png" />
    <van-form @submit="onSubmit">
      <div class=" login_content">
        <van-field v-model="user.userName" left-icon="user" name="userName" label="用户名" placeholder="请输入用户名"
          :rules="userFormRules.userName" />
        <van-field v-model="user.userPwd" left-icon="lock" type="password" name="userPwd" label="密 码"
          placeholder="请输入密码" :rules="userFormRules.userPwd" />
      </div>

      <van-button plain hairline type="primary" native-type="submit" class="login_button">登
        录</van-button>
      <van-button plain hairline type="primary" class="login_button" @click="onRegedit">注
        册</van-button>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
// import { FieldRule, FieldValidateTrigger, FieldRuleValidator } from 'vant'
//引入login从API
import { login } from "@/api/user";
import { showLoadingToast, showSuccessToast, showNotify, showToast, FieldRule } from 'vant';




//定义user类型接口
interface IUser {
  userName: string;
  userPwd: string;
}
//实例化user类型实例
const user: IUser = reactive<IUser>({} as IUser);
//登录表单提交事件函数
const onSubmit = async () => {


  //如果网络慢会在登录时出现登录中的提示图标
  showLoadingToast({
    message: '登录中...',
    forbidClick: true,
    loadingType: 'spinner',
  });
  //调用API接口登录方法
  const res = await login(user);

  //判断返回响应代码是否为0，,0为成功，其它为失败
  if (res.data.code === 0) {
    showSuccessToast('登录成功');

  } else {
    showToast({
      message: '用户名或密码错误',
      icon: 'warn-o',
    });
    // showFailToast('用户名或密码错误');
  }

};

//点击注册按钮事件函数
const onRegedit = async () => {
  showNotify({
    type: 'warning',
    message: '未开放注册，请联系管理员开通账号',
    duration: 2000,
  });
}

//定义登录表单验证规则
const userFormRules = {
  userName: [
    { required: true, message: '请输入用户名', trigger: 'onBlur' },
    { pattern: /^[\u4e00-\u9fa5]{2,6}$/, message: '用户名格式不正确', trigger: 'onBlur' }
  ] as FieldRule[],
  userPwd: [
    { required: true, message: '请输入密码', trigger: 'onBlur' },
    { pattern: /^[a-zA-Z0-9_~!@#$%^&*.-]{6,16}$/, message: '密码格式不正确', trigger: 'onBlur' }
  ] as FieldRule[],
};



</script>

<style scoped></style>
