"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

require("./plugins/element.js");

require("./assets/css/global.css");

require("./assets/fonts/iconfont.css");

var _vueTableWithTreeGrid = _interopRequireDefault(require("vue-table-with-tree-grid"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 导入全局样式表
// 导入字体图标
// 导入tree-grid
// 导入axios
// 配置请求的根路径
_axios["default"].defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'; // axios请求拦截(添加token,保证拥有获取数据的权限)

_axios["default"].interceptors.request.use(function (config) {
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token'); // 在最后必须 return config

  return config;
});

_vue["default"].prototype.$http = _axios["default"];
_vue["default"].config.productionTip = false;

_vue["default"].component('tree-table', _vueTableWithTreeGrid["default"]); // 时间过滤器


_vue["default"].filter('dateFormat', function (originVal) {
  var dt = new Date(originVal);
  var y = dt.getFullYear();
  var m = (dt.getMonth() + 1 + '').padStart(2, '0');
  var d = (dt.getDate() + '').padStart(2, '0');
  var hh = (dt.getHours() + '').padStart(2, '0');
  var mm = (dt.getMinutes() + '').padStart(2, '0');
  var ss = (dt.getSeconds() + '').padStart(2, '0');
  return "".concat(y, "-").concat(m, "-").concat(d, " ").concat(hh, ":").concat(mm, ":").concat(ss);
});

new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');