"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _vue=_interopRequireDefault(require("vue")),_vueRouter=_interopRequireDefault(require("vue-router")),_Login=_interopRequireDefault(require("../components/Login.vue")),_Home=_interopRequireDefault(require("../components/Home.vue"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_vue.default.use(_vueRouter.default);var routes=[{path:"/",redirect:"/login"},{path:"/login",component:_Login.default},{path:"/home",component:_Home.default}],router=new _vueRouter.default({routes:routes}),_default=router;exports.default=_default;