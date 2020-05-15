"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Login from '../components/Login.vue'
// import Home from '../components/Home.vue'
// import Welcome from '../components/Welcome.vue'
// import Users from '../components/user/Users.vue'
// import Rights from '../components/power/Rights.vue'
// import Roles from '../components/power/Roles.vue'
// import Cate from '../components/goods/Cate.vue'
// import Params from '../components/goods/Params.vue'
// import Goodslist from '../components/goods/List.vue'
// import Add from '../components/goods/Add.vue'
// import Order from '../components/order/Order.vue'
// import Report from '../components/report/Report.vue'
var Login = function Login() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Login.vue'));
  });
};

var Home = function Home() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Home.vue'));
  });
};

var Welcome = function Welcome() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Welcome.vue'));
  });
};

var Users = function Users() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/user/Users.vue'));
  });
};

var Rights = function Rights() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/power/Rights.vue'));
  });
};

var Roles = function Roles() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/power/Roles.vue'));
  });
};

var Cate = function Cate() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/goods/Cate.vue'));
  });
};

var Params = function Params() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/goods/Params.vue'));
  });
};

var Goodslist = function Goodslist() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/goods/List.vue'));
  });
};

var Add = function Add() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/goods/Add.vue'));
  });
};

var Order = function Order() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/order/Order.vue'));
  });
};

var Report = function Report() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/report/Report.vue'));
  });
};

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  redirect: '/login'
}, // 重定向
{
  path: '/login',
  component: Login
}, {
  path: '/home',
  component: Home,
  redirect: '/welcome',
  children: [{
    path: '/welcome',
    component: Welcome
  }, {
    path: '/users',
    component: Users
  }, {
    path: '/rights',
    component: Rights
  }, {
    path: '/roles',
    component: Roles
  }, {
    path: '/categories',
    component: Cate
  }, {
    path: '/params',
    component: Params
  }, {
    path: '/goods',
    component: Goodslist
  }, {
    path: '/goods/add',
    component: Add
  }, {
    path: '/orders',
    component: Order
  }, {
    path: '/reports',
    component: Report
  }]
}];
var router = new _vueRouter["default"]({
  routes: routes
}); // 挂载路由导航守卫(控制页面访问权限)

router.beforeEach(function (to, from, next) {
  // to 将要访问的路径
  // from 代表从哪个路径跳转过来
  // next 是一个函数, 表示放行
  //  next(): 放行  next('/login): 强制跳转
  if (to.path === '/login') return next(); // 获取token

  var tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login');
  next();
});
var _default = router;
exports["default"] = _default;