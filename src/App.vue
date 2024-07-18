<script setup lang="ts"> 
  import { ref } from 'vue';

  const username = ref('');
  const password = ref('');
  const onSubmit = (values:string) => {
      console.log('submit', values);
    };


</script>

<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button type="warning">警告按钮</van-button>

    
    <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>

<van-row :gutter="20">
    <van-col :span="5" tag="span">
      <div class="bg-red">张三</div>
    </van-col>
    <van-col :span="5" tag="span">
      <div class="bg-green">李四</div>
    </van-col>
    <van-col :span="5" tag="span">
      <div class="bg-blue">王五</div>
    </van-col>
    <van-col :span="5" tag="span">
      <div class="bg-blue">赵六</div>
    </van-col>
  </van-row>
  <div class = "divbox">test</div>


  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.divbox{
  width: 750px;
  height: 300px;
  background-color: blue;
}

</style>
