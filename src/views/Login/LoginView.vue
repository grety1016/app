<template>
  <div class="login_background-image">
    <van-nav-bar title="登  录" class="login-nav-bar" />
    <img class="login_img" src="@/assets/log2.png" />
    <van-form @submit="onSubmit">
      <div class=" login_content">
        <van-field v-model="user.userName" left-icon="user" name="userName" label="用户名" placeholder="请输入用户名"
          :rules="userFormRules.user" />
        <van-field v-model="user.userPwd" left-icon="lock" type="password" name="userPwd" label="密 码"
          placeholder="请输入密码" :rules="userFormRules.user" />


      </div>

      <van-button plain hairline type="primary" native-type="submit" class="login_button">
        登 录</van-button>
      <van-button plain hairline type="primary" class="login_button" @click="onRegedit">
        注 册</van-button>
    </van-form>
  </div>

</template>

<script setup lang="ts">

import { reactive } from "vue";
// import { FieldRule, FieldValidateTrigger, FieldRuleValidator } from 'vant'
//引入login从API
import { onLogin } from "@/api/user";
import { useLoginStore } from "@/stores";
import { User } from "@/types/types";
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import { showLoadingToast, showSuccessToast, showNotify, showToast, FieldRule } from 'vant';


//获取pinia的Store
const LoginStore = useLoginStore();

//实例化user类型实例
let user: User = reactive(new User());
//let user: User = reactive(LoginStore.loginUser);

const router = useRouter();
const route = useRoute();

//如下代码用于验证码框失去焦点自动处理非数字的字符
// const onBlur = () => {
//   user.userPwd = user.userPwd.replace(/\D/g, '').trim();
// };

//登录表单提交事件函数
const onSubmit = async () => {
  //获取IP地址
  // axios.get('https://api.ipify.org?format=json')
  //   .then(response => {
  //     console.log('Public IP Address:', response.data.ip);
  //   })
  //   .catch(error => {
  //     console.error('Error getting IP address:', error);
  //   });


  //如果网络慢会在登录时出现登录中的提示图标
  showLoadingToast({
    message: '登录中...',
    forbidClick: true,
    loadingType: 'spinner',
  });
  //调用API接口登录方法
  onLogin(user).then((res) => {
    //判断返回响应代码是否为0，,0为成功，其它为失败
    if (res.data.code === 0) {
      showSuccessToast('登录成功');
      //将登录成功后的用户信息保存到pinia中
      LoginStore.setUserData(res.data);
      //将登录界面中的输入框清空
      //user = Object.assign(user, new User());
      router.push({
        name: 'FlowForm',
        //replace: true
      });
    } else {
      LoginStore.setUserData(res.data);
      showToast({
        message: '用户名或密码错误',
        icon: 'warn-o',
      });
    }
  }).catch((error) => {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    } else {
      console.log('Other error', error.message);
      // 处理其他错误
    }
  });



};

//点击注册按钮事件函数
const onRegedit = () => {
  showNotify({
    type: 'warning',
    message: '未开放注册，请联系管理员开通账号',
    duration: 2000,
  });
}

//定义登录表单验证规则
const userFormRules = {
  user: [
    {
      validator: (rule, value) => {
        if (user.userName === "") {
          showToast('请输入用户名');
          return false;
        } else if (!/^[\u4e00-\u9fa5]{2,6}$/.test(user.userName)) {
          showToast('用户名格式不正确');
          return false;
        } else if (user.userPwd === "") {
          showToast('请输入密码');
          return false;
        } else if (!/^[a-zA-Z0-9_~!@#$%^&*.-]{6,16}$/.test(user.userPwd)) {
          showToast('密码格式不正确');
          return false;
        }
        return true;
      },
      trigger: 'onBlur'
    }
    //如果要绑定钉钉用户手机登录，验证有效的中国大陆手机：/^1[3456789]\d{9}$/
  ] as FieldRule[]
};


</script>

<style scoped></style>
