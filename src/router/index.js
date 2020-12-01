import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "empty" },
    component: () => import("../views/Register.vue")
  },
  {
    path: "/",
    name: "Home",
    meta: { layout: "main-layout" },
    component: () => import("../views/Home.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
