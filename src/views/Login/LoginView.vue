<template>
  <div class="login_background-image">
    <van-nav-bar title="登录" class="login-nav-bar" />
    <van-form>
      <div class=" container">
        <van-field v-model="user.userName" left-icon="user" name="userName" label="用户名" placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="user.userPwd" left-icon="lock" type="password" name="userPwd" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
      </div>

      <van-button plain icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png" type="primary"
        @click="onSubmit">登 录</van-button>
      <van-button plain icon="https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png" type="primary">注
        册</van-button>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
// import { FieldRule, FieldValidateTrigger, FieldRuleValidator } from 'vant'
//引入login从API
import { login } from "../../api/user";
import { showLoadingToast, showSuccessToast, showFailToast } from 'vant';




//定义user类型接口
interface IUser {
  userName: string;
  userPwd: string;
}
//实例化user类型实例
const user: IUser = reactive<IUser>({ userName: "", userPwd: "" } as IUser);
//登录表单提交事件函数
const onSubmit = async () => {

  if (user.userName !== "" && user.userPwd !== "") {

    //如果网络慢会在登录时出现登录中的提示图标
    showLoadingToast({
      message: '登录中...',
      forbidClick: true,
      loadingType: 'spinner',
    });

    const res = await login(user);


    if (res.data.code === 0) {
      showSuccessToast('登录成功');

    } else {
      showFailToast('登录失败');
    }
  }
};



</script>

<style scoped></style>
