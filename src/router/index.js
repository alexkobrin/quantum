import { createRouter, createWebHistory } from "vue-router";

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
    meta: { layout: "main" },
    component: () => import("../views/Home.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    meta: { layout: "main" },
    component: () => import("../views/Cart.vue")
  },
  {
    path: "/product",
    name: "Product",
    meta: { layout: "main" },
    component: () => import("../views/ProductPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
