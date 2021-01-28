import { createRouter, createWebHistory } from "vue-router";
import {fb} from "../firebase"


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
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin.vue"),
    meta: { requiredAuth: true },
    children: [
      {
        path: "overview",
        name: "overview",
        component: () => import("../views/Overview.vue")
      }
    ]
      // {
      //   path: "products",
      //   name: "products",
      //   component: Products
      // },
      // {
      //   path: "profile",
      //   name: "profile",
      //   component: Profiles
      // },
      // {
      //   path: "orders",
      //   name: "orders",
      //   component: Orders
      // }
    }  
]   

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiredAuth)) {
   
    fb.auth().onAuthStateChanged(function(user) {
      if (!user) {
        next({
          path: "/",
          query: { redirect: to.fullPath }
        });  
      } else next()
    })

 } else {
    next()
 }
 
})

export default router;
