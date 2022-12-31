import Message from "./src/index.js";

export default {
  // 返回 install 函数 用于 Vue.use 注册
  install(vue) {
    vue.prototype.$message = Message;
  },
};
