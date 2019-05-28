import Vue from "vue";
import VueI18n from "vue-i18n";
import enUS from "./locale/enUS";
import zhCN from "./locale/zhCN";
import queryString from "query-string";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
// babel-plugin-import 会帮助你加载 JS 和 CSS
import {
  Layout,
  Menu,
  Form,
  Input,
  Button,
  Icon,
  Checkbox,
  Radio,
  Select,
  DatePicker,
  Dropdown,
  LocaleProvider
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";
import "./assets/iconfont.js";

Vue.config.productionTip = false;

Vue.use(Layout);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(Radio);
Vue.use(Select);
Vue.use(Auth);
Vue.use(DatePicker);
Vue.use(Dropdown);
Vue.use(LocaleProvider);
Vue.use(VueI18n);

Vue.component("Authorized", Authorized);
const IconFont404 = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1212356_8snh9jn5nzb.js"
});
Vue.component("IconFont404", IconFont404);

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zh_CN",
  messages: {
    zh_CN: { message: zhCN },
    en_US: { message: enUS }
  }
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
