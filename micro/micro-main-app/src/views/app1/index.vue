<template>
  <div>
    <h1>子应用👇</h1>
    <div id="root">222</div>
    <micro-app
      name="my-app1"
      url="http://localhost:5174/"
      iframe
      :keep-alive="false"
      @created="created"
      @beforemount="beforemount"
      @mounted="mounted"
      @unmount="unmount"
      @error="error"
    ></micro-app>
  </div>
</template>

<script setup>
const created = () => {
  console.log("micro-app元素被创建");
};
const beforemount = () => {
  console.log("即将渲染");
};

const mounted = () => {
  console.log("已经渲染完成");
  console.log(console.log(document.querySelectorAll("#root")));
};
const unmount = () => {
  console.log("已经卸载");
};
const error = () => {
  console.log("加载出错");
};
</script>

<style lang="scss" scoped></style>
