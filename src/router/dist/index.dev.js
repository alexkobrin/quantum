"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Home = _interopRequireDefault(require("../views/Home.vue"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var routes = [
  // {
  //   path: "/login",
  //   name: "login",
  //   meta:{layout: 'empty'},
  //   component:() => import ('../views/Login.vue')
  // },
  // {
  //   path: "/register",
  //   name: "register",
  //   meta: {layout: 'empty'},
  //   component:() => import ('../views/Register.vue')
  // },
  {
    path: "/",
    name: "Home",
    component: _Home["default"]
  }
];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes
});
var _default = router;
exports["default"] = _default;
