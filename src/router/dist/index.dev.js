"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _login = _interopRequireDefault(require("../components/login.vue"));

var _Home = _interopRequireDefault(require("../components/Home.vue"));

var _Welcome = _interopRequireDefault(require("../components/Welcome.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  redirect: '/login'
}, // 重定向
{
  path: '/login',
  component: _login["default"]
}, {
  path: '/home',
  component: _Home["default"],
  redirect: '/welcome',
  children: [{
    path: '/welcome',
    component: _Welcome["default"]
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