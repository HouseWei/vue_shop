"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _vue=_interopRequireDefault(require("vue")),_vueRouter=_interopRequireDefault(require("vue-router")),_login=_interopRequireDefault(require("../components/login.vue")),_Home=_interopRequireDefault(require("../components/Home.vue")),_Welcome=_interopRequireDefault(require("../components/Welcome.vue"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_vue.default.use(_vueRouter.default);var routes=[{path:"/",redirect:"/login"},{path:"/login",component:_login.default},{path:"/home",component:_Home.default,redirect:"/welcome",children:[{path:"/welcome",component:_Welcome.default}]}],router=new _vueRouter.default({routes:routes});router.beforeEach(function(e,t,o){return"/login"===e.path?o():window.sessionStorage.getItem("token")?void o():o("/login")});var _default=router;exports.default=_default;