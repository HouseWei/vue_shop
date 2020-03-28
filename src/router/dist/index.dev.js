"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _login = _interopRequireDefault(require("../components/login.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  redirect: '/login'
}, // 重定向
{
  path: '/login',
  component: _login["default"]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;