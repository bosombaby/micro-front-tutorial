<template>
  <div class="container">
    <h2>微前端实践 - Micro App</h2>
    <div class="operate">
      <el-button @click="handleRouterClick('App1')">App1</el-button>
      <el-button type="primary" @click="handleRouterClick('App2')"
        >App2</el-button
      >
      <el-button type="success" @click="handleRouterClick('App3')"
        >App3</el-button
      >
    </div>
    <div class="content">
      <suspense>
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive :exclude="exclude" :max="8">
              <component :is="Component" :key="route.path" />
            </keep-alive>
          </transition>
        </router-view>
      </suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const exclude: string[] = [];

const router = useRouter();
const handleRouterClick = (routeName: string) => {
  router.push({ name: routeName });
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 10rem;
}

.container .operate {
  width: 100%;
  height: 50px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .content {
  width: 100%;
  height: 500px;
  background-color: skyblue;
}
</style>
