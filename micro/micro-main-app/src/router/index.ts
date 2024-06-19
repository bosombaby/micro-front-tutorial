import { createRouter, createWebHashHistory } from "vue-router";

const publicRoutes = [
  {
    path: "/",
    redirect: "/app2",
  },
  {
    path: "/app1",
    name: "App1",
    component: () => import("@/views/app1/index.vue"),
  },
  {
    path: "/app2",
    name: "App2",
    component: () => import("@/views/app2/index.vue"),
  },
  {
    path: "/app3",
    name: "App3",
    component: () => import("@/views/app3/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
});

export { router };
