<template>
  <div id="root">222</div>
  <img src="../assets/vue.svg" alt="" />
  <button @click="count++">{{ count }}</button>
</template>

<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const count = ref(0);
console.log("Vue 3 子应用初始化");

onBeforeMount(() => {
  console.log("Vue 3 子应用即将挂载");
});

onMounted(() => {
  console.log("Vue 3 子应用已挂载");
  console.log(console.log(document.querySelectorAll("#root")));
});

onBeforeUpdate(() => {
  console.log("Vue 3 子应用数据即将更新");
});

onUpdated(() => {
  console.log("Vue 3 子应用数据已更新");
});

onBeforeUnmount(() => {
  console.log("Vue 3 子应用即将卸载");
});

onUnmounted(() => {
  console.log("Vue 3 子应用已卸载");
});
</script>

<style lang="scss" scoped></style>
