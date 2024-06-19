import microApp from "@micro-zoe/micro-app";

// 初始化 microApp
const initMicroApp = () => {
  microApp.start();

  // microApp.preFetch(
  //   [
  //     { name: "my-app1", url: "http://localhost:5174/", level: 3 }, // 加载资源、解析并渲染
  //   ],
  //   5000
  // );
};

export { initMicroApp };
