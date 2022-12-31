import Dialog from "./src/Dialog.vue";

// 为组件提供 install 安装方法，供按需引入
Dialog.install = function (Vue) {
  Vue.component(Dialog.name, Dialog);
};

// 默认导出组件
export default Dialog;
