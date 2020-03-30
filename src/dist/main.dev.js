"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

require("./plugins/element.js");

require("./assets/css/global.css");

require("./assets/fonts/iconfont.css");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 导入全局样式表
// 导入字体图标
// 导入axios
// 配置请求的根路径
_axios["default"].defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'; // axios请求拦截(添加token,保证拥有获取数据的权限)

_axios["default"].interceptors.request.use(function (config) {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token'); // 在最后必须 return config

  return config;
});

_vue["default"].prototype.$http = _axios["default"];
_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');