<script setup lang="ts">
import { defineAsyncComponent } from 'vue';


//@ts-ignore  这个语句没用，只是开发时用来测试备注的
const FlowForm = defineAsyncComponent(() => import('@/views/FlowForm/FlowForm.vue'));


</script>

<template>
  <div>
    <!-- <FlowForm /> -->
    <router-view></router-view>
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

.divbox {
  width: 750px;
  height: 300px;
  background-color: blue;
}
</style>
