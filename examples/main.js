import Vue from "vue";
import App from "./App.vue";
import "./assets/fonts/iconfont.css";
import hgv2 from "../packages/index.js";
import Message from "../packages/Message/index.js";

Vue.config.productionTip = false;

Vue.use(hgv2);
Vue.use(Message);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
