import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";

// 微前端引入
import { initMicroApp } from "./micro";

// 引入重置样式
import "./style/reset.scss";
// 导入公共样式
import "./style/index.scss";
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import "element-plus/dist/index.css";

initMicroApp();
const app = createApp(App);
app.use(router);
app.mount("#app");
